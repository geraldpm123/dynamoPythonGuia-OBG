import clr

clr.AddReference('RevitAPI')
from Autodesk.Revit.DB import WallUtils

clr.AddReference('RevitServices')
import RevitServices
from RevitServices.Persistence import DocumentManager
from RevitServices.Transactions import TransactionManager

doc = DocumentManager.Instance.CurrentDBDocument

muro = UnwrapElement(IN[0])


TransactionManager.Instance.EnsureInTransaction(doc)

WallUtils.DisallowWallJoinAtEnd(muro, 0)
WallUtils.DisallowWallJoinAtEnd(muro, 1)

TransactionManager.Instance.TransactionTaskDone()

OUT = muro