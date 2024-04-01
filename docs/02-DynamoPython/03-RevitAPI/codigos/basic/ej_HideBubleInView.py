import clr

#Import Revit API
clr.AddReference('RevitAPI')
from Autodesk.Revit.DB import *

#import Document Manager and TransactionManager
clr.AddReference("RevitServices")
import RevitServices
from RevitServices.Persistence import DocumentManager
from RevitServices.Transactions import TransactionManager


doc = DocumentManager.Instance.CurrentDBDocument
vistaActiva = doc.ActiveView

grilla = UnwrapElement(IN[0])

TransactionManager.Instance.EnsureInTransaction(doc)
grilla.HideBubbleInView(DatumEnds.End0, vistaActiva)
grilla.HideBubbleInView(DatumEnds.End1, vistaActiva)
TransactionManager.Instance.TransactionTaskDone()

OUT = 0