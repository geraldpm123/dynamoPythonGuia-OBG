import clr

clr.AddReference('RevitAPI')
from Autodesk.Revit.DB import *

clr.AddReference("RevitServices")
from RevitServices.Persistence import DocumentManager
from RevitServices.Transactions import TransactionManager

doc = DocumentManager.Instance.CurrentDBDocument
# Entrada de datos
muro = UnwrapElement(IN[0])
nivel = UnwrapElement(IN[1])
elementId_nivel = nivel.Id

# Obtenemos el parámetro Restricción superior
paramResSup = muro.get_Parameter(BuiltInParameter.WALL_HEIGHT_TYPE)

# Inicializar la transacción
TransactionManager.Instance.EnsureInTransaction(doc)
# Asignarle un valor a este parámetro
# resaltado--next-line
resultado = paramResSup.Set(elementId_nivel)
# Finalizar la transacción
TransactionManager.Instance.TransactionTaskDone()

# Asigne la salida a la variable OUT.
OUT = resultado