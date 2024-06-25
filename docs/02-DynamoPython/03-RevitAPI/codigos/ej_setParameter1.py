import clr

clr.AddReference('RevitAPI')
from Autodesk.Revit.DB import *

clr.AddReference("RevitServices")
from RevitServices.Persistence import DocumentManager
from RevitServices.Transactions import TransactionManager

doc = DocumentManager.Instance.CurrentDBDocument

# Inputs
muro = UnwrapElement(IN[0])

# Obtenemos el parámetro Comentarios
paramComments = muro.get_Parameter(BuiltInParameter.ALL_MODEL_INSTANCE_COMMENTS)

# Inicializar la transaction
TransactionManager.Instance.EnsureInTransaction(doc)
# Asignarle un valor a este parámetro
# resaltado--next-line
resultado = paramComments.Set("Hola Mundo")
# Finalizar la transacción
TransactionManager.Instance.TransactionTaskDone()

# Asigne la salida a la variable OUT.
OUT = resultado