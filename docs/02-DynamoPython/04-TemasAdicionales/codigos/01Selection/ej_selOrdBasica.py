import clr

clr.AddReference('RevitAPIUI')
from Autodesk.Revit.UI import *
from Autodesk.Revit.UI.Selection import *

clr.AddReference('RevitServices')
import RevitServices
from RevitServices.Persistence import DocumentManager
doc = DocumentManager.Instance.CurrentDBDocument

flag = True
selectIds = []

while flag:
    try:
        ref = uidoc.Selection.PickObject(ObjectType.Element, 'Seleccione elementos en orden, presione ESC para parar la selección.')
        e_id = ref.ElementId
        if e_id not in selectIds:
            selectIds.append(e_id)
    except:
        flag = False
        break

elemenSelect = [doc.GetElement(id) for id in selectIds]

OUT = elemenSelect