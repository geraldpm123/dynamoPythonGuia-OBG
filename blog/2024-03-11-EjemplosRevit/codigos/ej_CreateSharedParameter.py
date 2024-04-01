
listaCatIds = IN[0]

#resaltado-start
definitionFile = app.OpenSharedParameterFile()
definitionGroups = definitionFile.Groups

# Obtener un grupo existente
grupo1 = definitionGroups.get_Item("grupo1")

# Crear un nuevo grupo
grupo2 = definitionGroups.Create("grupo2")

# Obtener Definiciones
definition = grupo1.Definitions.get_Item("nombreParametro")

# Crear category Set
catSet = CategorySet()
[catSet.Insert(Category.GetCategory(doc, idCat)) for idCat in listaCatIds]
# Crear un binding
binding = app.Create.NewInstanceBinding(catSet)
#Crear el parámetro
doc.ParameterBindings.Insert(definition, binding)
#resaltado-end