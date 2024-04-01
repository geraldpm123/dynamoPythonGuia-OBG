
colCatIds = List[ElementId](listaCatIds)

# Creación de Reglas
regla = ParameterFilterRuleFactory.CreateEqualsRule(idParam, valor, 0.0001)

elemFilters = []
elemFilters.append(ElementParameterFilter(regla))
elemFilter = LogicalAndFilter(elemFilters) # ElementFilter (Or / And)


# Creación de parameterFilter
filtro = ParameterFilterElement.Create(doc, "Filtro 01", colCatIds, elemFilter)