import clr

#Import Revit API
clr.AddReference('RevitAPI')
from Autodesk.Revit.DB import *

# Linea que se va acotar
detailLine = UnwrapElement(IN[0])

linea = detailLine.GeometryCurve

# Obtenemos los references de la linea
ref1 = linea.GetEndPointReference(0)
ref2 = linea.GetEndPointReference(1)


OUT = ref1, ref2

# CREAR LA COTA A PARTIR DE REFERENCES Y LINEA REFERENCE
#(trasladar la linea bse para este ejemplo con el nodo Translate)
import clr

#Import Revit API
clr.AddReference('RevitAPI')
from Autodesk.Revit.DB import *


#import Revit Nodes and extensions
clr.AddReference("RevitNodes")
import Revit
clr.ImportExtensions(Revit.Elements)
clr.ImportExtensions(Revit.GeometryConversion)


#import Document Manager and TransactionManager
clr.AddReference("RevitServices")
import RevitServices
from RevitServices.Persistence import DocumentManager
from RevitServices.Transactions import TransactionManager

#Principales variables que tal vez usemos
doc = DocumentManager.Instance.CurrentDBDocument
docCreate = doc.Create

vistaActual = doc.ActiveView
lineaUbicacion = IN[0].ToRevitType()
listaReferences = IN[1]

#Creamos un referenceArray vacio
refArray = ReferenceArray()

#Ahora llenamos el refArray con los references de la linea
for reff in listaReferences:
    refArray.Append(reff)


TransactionManager.Instance.EnsureInTransaction(doc)
cota = docCreate.NewDimension(vistaActual, lineaUbicacion, refArray)
TransactionManager.Instance.TransactionTaskDone()

OUT = cota