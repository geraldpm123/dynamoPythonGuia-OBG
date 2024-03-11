# Importación de bibliotecas
import clr

clr.AddReference("RevitAPIUI")
from Autodesk.Revit.UI.Selection import *

# Import Document Manager
clr.AddReference("RevitServices")
from RevitServices.Persistence import DocumentManager

uidoc = DocumentManager.Instance.CurrentUIApplication.ActiveUIDocument
doc = DocumentManager.Instance.CurrentDBDocument

# Método para seleccionar varios elementos dentro del modelo
ref_pickObjects = uidoc.Selection.PickObjects(ObjectType.Element, "Seleccione elementos en el modelo")

# Tendremos una lista de Reference para los objetos seleccionados
"""
pickObjects = []
for reff in ref_pickObjects:
  pickObjects.append(doc.GetElement(reff))
"""

pickObjects = [doc.GetElement(reff) for reff in ref_pickObjects]

OUT = pickObjects