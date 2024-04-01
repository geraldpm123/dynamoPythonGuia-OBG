muro = UnwrapElement(IN[0])

# utilizando el método LookupParameter()
paramComent = muro.LookupParameter("Comentarios")
paramLongi = muro.LookupParameter("Longitud")
paramRestBase = muro.LookupParameter("Restricción de base")

# Obteniendo los valores del parameter
val_ParmaCom = paramComent.AsString()
val_paramLongi = paramLongi.AsDouble()
val_paramRestBase = paramRestBase.AsElementId()

val_paramLongi_2 = paramLongi.AsValueString()

OUT = val_paramLongi, val_paramLongi_2