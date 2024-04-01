# Importación de bibliotecas
import clr

clr.AddReference("RevitAPIUI")
from Autodesk.Revit.UI.Selection import *

# Import Document Manager
clr.AddReference("RevitServices")
from RevitServices.Persistence import DocumentManager

uidoc = DocumentManager.Instance.CurrentUIApplication.ActiveUIDocument
doc = DocumentManager.Instance.CurrentDBDocument

# Obteniendo Ids de elementos seleccionados
ids_selecciones = uidoc.Selection.GetElementIds()

"""
elementosSel = []
for id in ids_selecciones:
  elementosSel.append(doc.GetElement(id))
"""

elementosSel = [doc.GetElement(id) for id in ids_selecciones]

OUT = elementosSel