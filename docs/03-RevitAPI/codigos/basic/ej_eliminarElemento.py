import clr


clr.AddReference('RevitServices')
import RevitServices
from RevitServices.Persistence import DocumentManager
from RevitServices.Transactions import TransactionManager

doc = DocumentManager.Instance.CurrentDBDocument

elemento = UnwrapElement(IN[0])


TransactionManager.Instance.EnsureInTransaction(doc)

resultado = doc.Delete(elemento.Id)

TransactionManager.Instance.TransactionTaskDone()

OUT = resultado