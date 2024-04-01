import clr

clr.AddReference('RevitAPI')
from Autodesk.Revit.DB import *

clr.AddReference('System')
from System.Collections.Generic import List

clr.AddReference("RevitServices")
import RevitServices
from RevitServices.Persistence import DocumentManager
from RevitServices.Transactions import TransactionManager

doc = DocumentManager.Instance.CurrentDBDocument

# Ingreso de elementos desde el puerto IN[0]
listaElementos = UnwrapElement(IN[0]) # El método UnwrapElement también funciona para listas

# Obtenemos los ids de estos elementos (ElementId)
listaIds = [elem.Id for elem in listaElementos] #Lista de Python que contiene ElementId's

# Convertimos la lista de Python "listaIds" a un "List" de C# (ICollection)
collectionIds = List[ElementId](listaIds)

# Utilizamos el método Delete()
TransactionManager.Instance.EnsureInTransaction(doc)
doc.Delete(collectionIds)
TransactionManager.Instance.TransactionTaskDone()

OUT = 0