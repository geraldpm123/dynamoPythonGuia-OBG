
import clr

clr.AddReference('RevitAPI')
from Autodesk.Revit.DB import *

clr.AddReference("RevitServices")
from RevitServices.Persistence import DocumentManager
from RevitServices.Transactions import TransactionManager

doc = DocumentManager.Instance.CurrentDBDocument


muro = UnwrapElement(IN[0])
nivel = UnwrapElement(IN[1])

elementId_nivel = nivel.Id


# Obtenemos el parametro Restriccion superior
paramResSup = muro.get_Parameter(BuiltInParameter.WALL_HEIGHT_TYPE)


# Inicializar la transaccion
TransactionManager.Instance.EnsureInTransaction(doc)
# Asiganrle un valor a este parametro
resultado = paramResSup.Set(elementId_nivel)

# Finalizar la transaccion
TransactionManager.Instance.TransactionTaskDone()



# Asigne la salida a la variable OUT.
OUT = resultado