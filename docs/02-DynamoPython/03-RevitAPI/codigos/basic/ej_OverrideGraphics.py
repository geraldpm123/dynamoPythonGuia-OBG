import clr

#Import Revit API
clr.AddReference('RevitAPI')
from Autodesk.Revit.DB import *

#Import Revit APIUI
clr.AddReference('RevitAPIUI')
from Autodesk.Revit.UI import *

#import Document Manager and TransactionManager
clr.AddReference("RevitServices")
import RevitServices
from RevitServices.Persistence import DocumentManager
from RevitServices.Transactions import TransactionManager

#Principales variables que tal vez usemos
doc = DocumentManager.Instance.CurrentDBDocument
vistaActual = doc.ActiveView

# Entradas
elemento = UnwrapElement(IN[0])
patronRelleno = UnwrapElement(IN[1])

# Crear un color
colorMio = Color(0, 100, 255)

# Crear el OverrideGraphicSettings
ogs = OverrideGraphicSettings()
ogs.SetSurfaceBackgroundPatternColor(colorMio)
ogs.SetSurfaceBackgroundPatternId(patronRelleno.Id)

TransactionManager.Instance.EnsureInTransaction(doc)
vistaActual.SetElementOverrides(elemento.Id, ogs)
TransactionManager.Instance.TransactionTaskDone()

OUT = 0