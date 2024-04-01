import clr
from Autodesk.Revit.DB import DWGImportOptions, ImportPlacement, ElementId, Transaction

doc = __revit__.ActiveUIDocument.Document
uidoc = __revit__.ActiveUIDocument

options = DWGImportOptions()
options.Placement = ImportPlacement.Origin # Insert Options
link = clr.Reference[ElementId]()
t = Transaction(doc)
t.Start('Load Link')
doc.Link(r"C:\Some\Path\YourDrawing.dwg", options, uidoc.ActiveView, link)
t.Commit()