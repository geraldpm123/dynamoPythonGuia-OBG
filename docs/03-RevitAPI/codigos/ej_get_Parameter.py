import clr

clr.AddReference('RevitAPI')
from Autodesk.Revit.DB import BuiltInParameter


muro = UnwrapElement(IN[0])

# utilizando el metodo LookupParameter()
#paramComent = muro.LookupParameter("Comentarios")
paramComent = muro.get_Parameter(BuiltInParameter.ALL_MODEL_INSTANCE_COMMENTS)
#paramLongi = muro.LookupParameter("Longitud")
paramLongi = muro.get_Parameter(BuiltInParameter.CURVE_ELEM_LENGTH)
#paramRestBase = muro.LookupParameter("Restricción de base")
paramRestBase = muro.get_Parameter(BuiltInParameter.WALL_BASE_CONSTRAINT)

# Obteniendo los valores del parameter
val_ParmaCom = paramComent.AsString()
val_paramLongi = paramLongi.AsDouble()
val_paramRestBase = paramRestBase.AsElementId()

val_paramLongi_2 = paramLongi.AsValueString()

OUT = val_paramLongi, val_paramLongi_2