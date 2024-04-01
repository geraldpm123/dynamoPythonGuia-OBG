"""
Ejemplo: Seleccion ordenada de elementos
https://forum.dynamobim.com/t/node-for-picking-elements-in-order-with-revit-ui/66508/11
"""

import clr
import sys
import System

clr.AddReference('RevitAPI')
import Autodesk
from Autodesk.Revit.DB import *
import Autodesk.Revit.DB as DB

clr.AddReference('RevitAPIUI')
from Autodesk.Revit.UI import *
from Autodesk.Revit.UI.Selection import *

from System.Collections.Generic import List

clr.AddReference('RevitServices')
import RevitServices
from RevitServices.Persistence import DocumentManager
from RevitServices.Transactions import TransactionManager
doc = DocumentManager.Instance.CurrentDBDocument
uiapp = DocumentManager.Instance.CurrentUIApplication
uidoc = uiapp.ActiveUIDocument

#Obtener el patron de relleno uniforme
pats = FilteredElementCollector(doc).OfClass(FillPatternElement).ToElements()
for pat in pats:
	if (pat.GetFillPattern().IsSolidFill):
		patSolid = pat
		break

def overridecolor(elementId, reset = False):
	t = Transaction(doc, "Selection")
	t.Start()
	view = doc.ActiveView
	color_rgb = DB.Color(30,144,255)
	gSettings = OverrideGraphicSettings()
	if not reset: 
		gSettings.SetSurfaceForegroundPatternColor(color_rgb) 
		gSettings.SetProjectionLineColor(color_rgb)
		gSettings.SetCutLineColor(color_rgb)
		gSettings.SetCutForegroundPatternColor(color_rgb)
		gSettings.SetProjectionLineWeight(8)
		gSettings.SetSurfaceForegroundPatternId(patSolid.Id)
	view.SetElementOverrides(elementId, gSettings)
	doc.Regenerate()
	uidoc.RefreshActiveView()
	t.Commit()
	t.Dispose()
			
		
flag = True
selectId = []
TransactionManager.Instance.ForceCloseTransaction()
TaskDialog.Show('Selection', 'Pick elements in the desired order (re-select to Remove), hit ESC to stop picking.')
tg = TransactionGroup(doc, "Selection")
tg.Start()
while flag:
	try:
		ref = uidoc.Selection.PickObject(ObjectType.Element, 'Pick elements in the desired order (re-select to Remove), hit ESC to stop picking.')
		e_id = ref.ElementId
		if e_id not in selectId:
			overridecolor(e_id)
			selectId.append(e_id)
		else:
			overridecolor(e_id, True)
			selectId.pop(selectId.index(e_id))
			
	except Exception as ex:
		flag = False
		break		
tg.RollBack()
elemenSelect = [doc.GetElement(xId) for xId in selectId]

OUT = elemenSelect