---
sidebar_position: 2
---
# 2. Objetos Dynamo Revit

## 2.1. Elementos de Revit Empaquetados
Es importante entender como los objetos de Revit estan presentes en Dynamo.

```py
muro = UnwrapElement(IN[0])

estaBloqueado = muro.Pinned

OUT = estaBloqueado
```

## 2.2. Geometría de Dynamo y Revit (GeometryConversion)