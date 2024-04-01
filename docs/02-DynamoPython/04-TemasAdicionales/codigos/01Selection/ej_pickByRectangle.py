# Importación de bibliotecas
import clr

clr.AddReference("RevitAPIUI")
from Autodesk.Revit.UI.Selection import *

# Import Document Manager
clr.AddReference("RevitServices")
from RevitServices.Persistence import DocumentManager

uidoc = DocumentManager.Instance.CurrentUIApplication.ActiveUIDocument

# Obteniendo la selección de elementos dentro de un rectángulo de selección
sel_elems = uidoc.Selection.PickElementsByRectangle("Seleccione un rectangulo que encierre los elementos")

OUT = sel_elems