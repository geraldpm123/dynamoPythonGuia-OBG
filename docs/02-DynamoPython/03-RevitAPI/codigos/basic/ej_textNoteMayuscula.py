
import clr
#import Document Manager and TransactionManager
clr.AddReference("RevitServices")
import RevitServices
from RevitServices.Persistence import DocumentManager
from RevitServices.Transactions import TransactionManager

doc = DocumentManager.Instance.CurrentDBDocument

textNote = UnwrapElement(IN[0])

# Leer el valor de la propiedad "Text"
contenido = textNote.Text

# Convirtiendo a mayusculas
contenido_May = contenido.upper()

TransactionManager.Instance.EnsureInTransaction(doc)
# Modificando la propiedad "Text"
textNote.Text = contenido_May

TransactionManager.Instance.TransactionTaskDone()


OUT = contenido_May