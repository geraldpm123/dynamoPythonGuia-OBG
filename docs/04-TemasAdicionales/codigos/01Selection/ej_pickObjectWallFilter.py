# Importación de bibliotecas
import clr

clr.AddReference("RevitAPI")
from Autodesk.Revit.DB import *

clr.AddReference("RevitAPIUI")
from Autodesk.Revit.UI.Selection import *

# Import Document Manager
clr.AddReference("RevitServices")
from RevitServices.Persistence import DocumentManager

uidoc = DocumentManager.Instance.CurrentUIApplication.ActiveUIDocument
doc = DocumentManager.Instance.CurrentDBDocument

# Definimos la clase para el filtro
class filtroSeleccionMuros(ISelectionFilter):
  def AllowElement(self, element):
    if element.Category.BuiltInCategory == BuiltInCategory.OST_Walls:
      return True

# Instanciamos un objeto de la clase "filtroSeleccionMuros"
filtro = filtroSeleccionMuros()

# Método para seleccionar varios elementos dentro del modelo
ref_pickWalls= uidoc.Selection.PickObjects(ObjectType.Element, filtro, "Seleccione muros en el modelo")

# Tendremos una lista de Reference para los objetos seleccionados
pickWalls = [doc.GetElement(reff) for reff in ref_pickWalls]

OUT = pickWalls