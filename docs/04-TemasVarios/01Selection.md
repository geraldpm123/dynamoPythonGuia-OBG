---
sidebar_position: 1
---
# 1. Selección de elementos de Revit
La mayoria de script de Dynamo requiere de una tarea previa de seleccion de elementos, esto ayuda al usuario a indicar que eleemntos seran usadois en un determiuado scirpt, para ello tenemos algunos nodos basico en Dyano, como por ejemplo el nodo `Select Model Element`, pero algunas veces se requeire una seleccion mas especifica y mas personalizada, en este capitulo aboradamos la clase `Selection` perteneciente al namespace `Autodesk.Revit.UI.Selection`.

Para acceder a los metdoos que ofrece esta clase, necsitamos de una instancia de la clase `Selection`, esta clase no ofrece un constructor ni un metodo estatico para crerla, sino que este objeto ya existe en un proyecto, por l oque solo es necesario recuperarlo.
Para recuperar este objeto lo haremos a traves del objeto uidoc, especificamente en su propiedad uidoc.Selection.

A continuacion se muestra el codigo para obetenr este objeto Selection:
```py
# Importación de bibliotecas
import clr

clr.AddReference("RevitAPIUI")
from Autodesk.Revit.UI.Selection import *

# Import Document Manager
clr.AddReference("RevitServices")
from RevitServices.Persistence import DocumentManager

uidoc = DocumentManager.Instance.CurrentUIApplication.ActiveUIDocument

# Obteniendo el objeto selection
selection = uidoc.Selection
```


## 1.1. Ejemplos de aplicacion para la la clase Selection

A continuacion se muestran algunos ejemplos aplicativos para la seleccion comunes utilizando la clase Selection.


<details>
  <summary>**Ejemplo Obtener seleccion actual**</summary>

  En este ejemplo se muestra como obtener los elementos acutalmente seleccionados en el entorno de Revit

```py
# Importación de bibliotecas
import clr

clr.AddReference("RevitAPIUI")
from Autodesk.Revit.UI.Selection import *

# Import Document Manager
clr.AddReference("RevitServices")
from RevitServices.Persistence import DocumentManager

uidoc = DocumentManager.Instance.CurrentUIApplication.ActiveUIDocument

# Obteniendo Ids de elementos seleccionados
ids_selecciones = uidoc.Selection.GetElementIds()

"""
elementosSel = []
for id in ids_selecciones:
  elementosSel.append(doc.GetElement(id))
"""

elementosSel = [doc.GetElement(id) for id in ids_selecciones]

OUT = elementosSel
```
</details>

<details>
  <summary>**Ejemplo Pick Objects**</summary>

  En este ejemplo se muestra como obtener los elementos acutalmente seleccionados en el entorno de Revit

```py
# Importación de bibliotecas
import clr

clr.AddReference("RevitAPIUI")
from Autodesk.Revit.UI.Selection import *

# Import Document Manager
clr.AddReference("RevitServices")
from RevitServices.Persistence import DocumentManager

uidoc = DocumentManager.Instance.CurrentUIApplication.ActiveUIDocument

# Obteniendo Ids de elementos seleccionados
ids_selecciones = uidoc.Selection.GetElementIds()

"""
elementosSel = []
for id in ids_selecciones:
  elementosSel.append(doc.GetElement(id))
"""

elementosSel = [doc.GetElement(id) for id in ids_selecciones]

OUT = elementosSel
```
</details>

## 1.2. Selection Filter

## 1.3. Seleccion desde Vinculos




