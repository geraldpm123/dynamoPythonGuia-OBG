---
sidebar_position: 4
---


# 4. Creación de Objetos

Como vimos en el punto anterior, se pudo acceder a las propiedades y métodos de un objeto, pero para ello el objeto debe existir, entonces ahora veremos como crear objetos utilizando la documentación de la API pública.

Se puede instanciar o crear objetos de
una determinada clase varias veces según sea necesario, y para ello se suele usar:
* **Constructor**: Un método especial definido en la Clase.
* **Métodos Estáticos**: Métodos de uso múltiple que pueden usarse para crear objetos, Estos métodos se llaman desde la Clase.

:::danger[Cuidado!]

No todas las clases ofrecen **Constructores** y/o **Métodos Estáticos** para instanciar objetos, en algunos casos tendremos que usar clases terceras, ademas que existen Clases que no permiten ser instanciadas usando la API pública.

:::


## 4.1. Importación de Bibliotecas

Para poder usar los **Métodos Estáticos** y los **Constructores**, es necesario realizar las importaciones de bibliotecas, ya que en ambos casos se usa la llamada a la clase directamente.

Ademas, importar bibliotecas en tu código te permite aprovechar el trabajo previo de otros desarrolladores, aumentar la productividad, mejorar la eficiencia y la fiabilidad de tu aplicación, y seguir las mejores prácticas de desarrollo de software.

En capítulos anteriores usamos pro ejemplo la biblioteca ```math```, esta biblioteca esta incluida en el lenguaje Python asi como otras bibliotecas como ```sys```, ```os```, ```random```, etc.

En Python, existe una biblioteca llamada ```clr``` que significa "Common Language Runtime" (Tiempo de Ejecución de Lenguaje Común, en español). Es una parte fundamental del entorno de ejecución de .NET Framework desarrollado por Microsoft, esta biblioteca nos permitirá utilizar bibliotecas hechas en C# (las que usaremos de Dynamo y Revit).
Estas bibliotecas C# que comúnmente utilizaremos en nuestros Python Script tenemos:
* **ProtoGeometry:** Biblioteca que contiene las clases geométricas de Dynamo tales como ```Point```, ```Line```, ```Solid```, etc
* **RevitAPI:** Biblioteca que contiene las clases de la base de datos de Revit como ```Wall```, ```Element```, ```FamilyInstace```, etc
* **RevitAPIUI:** Biblioteca que contiene las clases de manejo de interfaz de usuario de Revit como ```TaskDialog```, ```Selection```, etc
* **RevitServices:** Biblioteca qie contiene clases para acceso de variables de documento de Revit y procesos como ```DocumentManager``` y ```TransactionManager```.
* **RevitNodes:** Biblioteca que contiene clases de extension para convertir objetos de Dynamo hacia Revit y viceversa.

La importación de bibliotecas de C# a traves de la biblioteca ```clr``` tiene la siguiente sintaxis:

```py
import clr

clr.AddReference([nombre_Biblioteca])
from [Namespace] import [Clase]
```

En esta sintaxis se debe proveer la siguiente información:
* **```[nombre_Biblioteca]```:** ```string``` del nombre de la *Biblioteca* que contiene a la Clase
* **```[Namespace]```:** Nombre del *Namespace* completo de la Clase a usar
* **```[Clase]```:** Nombre de la *Clase* (se puede usar ```*``` para indicar que se cargará todas las clases existentes del Namespace)

Para mostrar como importamos bibliotecas, mostramos el siguiente código de ejemplo:
```py
# Importación de bibliotecas
import sys
import clr
import math

clr.AddReference('System')
from System.Collections.Generic import List

#Import Geometry dynamo
clr.AddReference('ProtoGeometry')
from Autodesk.DesignScript.Geometry import *

#import DCCoreNodes
clr.AddReference('DSCoreNodes')
from DSCore import *

#Import Revit API
clr.AddReference('RevitAPI')
from Autodesk.Revit.DB import *
from Autodesk.Revit.DB.Architecture import *
from Autodesk.Revit.DB.Structure import *

#Import Revit APIUI
clr.AddReference('RevitAPIUI')
from Autodesk.Revit.UI import *

#import Revit Nodes and extensions
clr.AddReference("RevitNodes")
import Revit
clr.ImportExtensions(Revit.Elements)
clr.ImportExtensions(Revit.GeometryConversion)

#import Document Manager and TransactionManager
clr.AddReference("RevitServices")
from RevitServices.Persistence import DocumentManager
from RevitServices.Transactions import TransactionManager

OUT = 0
```

## 4.2. Métodos Estáticos para instanciar un objeto

En C# (recordemos que la documentación esta en este lenguaje), los métodos estáticos se definen con la palabra clave ```static``` y pertenecen a la clase en lugar de a una instancia específica de la clase. Esto significa que pueden ser invocados sin necesidad de crear una instancia de la clase.

Para utilizar un método estático en python, simplemente lo llamas utilizando el nombre de la clase seguido de un punto y luego el nombre del método.


:::note[Ejemplo: utilización Método Estático]

Tenemos el método estático ```ByCoordinates()``` de la Clase **Point**, en la documentación aparece de la siguiente forma:

<div style={{ textAlign: 'center' }}>
  <img  style={{ maxWidth: '550px'}}
  src={require('./img/MetodoEstaticoByCoordinates.png').default}
  alt="MetodoEstaticoByCoordinates"/>
</div>

Podemos notar este método estático, y que devuelve un objeto **Point**, ademas es importante leer a que *Namespace* y *Biblioteca* pertenece para hacer la respectiva importación.

Entonces el código para crear un objeto de la clase **Point** usando el método ```ByCoordinates()``` sera el siguiente:
```py
import clr

clr.AddReference('ProtoGeometry')
from Autodesk.DesignScript.Geometry import Point

# Instanciando un objeto Point
puntoNuevo = Point.ByCoordinates(0, 0, 0)
```
:::


Ademas de ser útiles para instanciar un objeto, los métodos estáticos son útiles en varios escenarios adicionales, como:

* Funcionalidad utilitaria: Pueden ser utilizados para definir funciones de utilidad que no dependen del estado de un objeto específico.

* Inicialización de clase: Pueden ser usados para inicializar variables estáticas, realizar configuraciones iniciales, etc.

* Implementación de patrones de diseño: En algunos casos, los métodos estáticos se utilizan en la implementación de patrones de diseño como Singleton, Factory, etc.

## 4.3. Constructores para instanciar un objeto

Un constructor es un método especial dentro de una clase que se llama automáticamente cuando se crea una nueva instancia de la clase. Su propósito principal es inicializar el objeto recién creado.


<details close>
  <summary>**Ejemplo: Constructor para objeto TaskDialog**</summary>

  Tenemos el constructor de la clase **TaskDialog**, el cual se muestra a continuación:

<div style={{ textAlign: 'center', maxWidth: '650px' }}>
  <img  style={{ maxWidth: '650px'}}
  src={require('./img/constructorTaskDialog.png').default}
  alt="constructorTaskDialog"/>
</div>

La sintaxis de este método es:


<div style={{ textAlign: 'center' }}>
  <img  style={{ maxWidth: '550px'}}
  src={require('./img/constructorTaskDialogSyntax.png').default}
  alt="constructorTaskDialogSyntax"/>
</div>

A diferencia de un Método Estático, el Constructor siempre devuelve una instancia de la misma Clase. 
Entonces el código para crear un objeto de la clase **TaskDialog** usando el método constructor sera el siguiente:
  ```py
import clr

clr.AddReference('RevitAPIUI')
from Autodesk.Revit.UI import TaskDialog

# Instanciando un objeto TaskDialog
instanciaTaskDialog = TaskDialog("Este es un titulo")
  ```
</details>

<details close>
  <summary>**Ejemplo: Constructor para objeto ElementId**</summary>

  Tenemos el constructor de la clase **ElementId**, la sintaxis de este método es:

<div style={{ textAlign: 'center' }}>
  <img  style={{ maxWidth: '550px'}}
  src={require('./img/constructorElementId.png').default}
  alt="constructorElementId"/>
</div>
Usando el método constructor sera el siguiente:
  ```py
import clr

clr.AddReference('RevitAPI')
from Autodesk.Revit.DB import ElementId

# Instanciando un objeto ElementId
instanciaElementId = ElementId(387644)
  ```
</details>


<details close>
  <summary>**Ejemplo: Constructor y Metodos Estaticos Objetos Geometricos Revit**</summary>

  Usando la documentación de Revit, podemos encontrar clases qeu se usan para objetos geométricos de Revit.
  ```py
import clr

clr.AddReference('RevitAPI')
#from Autodesk.Revit.DB import XYZ, Line, Plane, CurveLoop, GeometryCreationUtilities
from Autodesk.Revit.DB import *

# Crear objetos XYZ (Punto de Revit) --> Constructor
punto2Revit = XYZ(10, 10, 10)
punto1Revit = XYZ.Zero # Propiedad estática


# Crear objeto Line (Linea de Revit) --> Método Estático
lineaRevit = Line.CreateBound(punto1Revit, punto2Revit)

# Crear Vectores de Revit
vecZ = XYZ.BasisZ

# Crear un Plano (Plane de Revit) --> Método Estático
plano = Plane.CreateByNormalAndOrigin(vecZ, punto1Revit)

# Definimos una lista de Lineas para un rectángulo
listaLineas = [Line.CreateBound(XYZ(0, 0, 0), XYZ(1, 0, 0)),
               Line.CreateBound(XYZ(1, 0, 0), XYZ(1, 1, 0)),
               Line.CreateBound(XYZ(1, 1, 0), XYZ(0, 1, 0)),
               Line.CreateBound(XYZ(0, 1, 0), XYZ(0, 0, 0))]

# Creamos un CurveLoop (Objeto que almacena lista de Curvas)
outline = CurveLoop.Create(listaLineas)

# Crear un sólido extraído --> Método Estático
height = 1.0
solid = GeometryCreationUtilities.CreateExtrusionGeometry([outline], vecZ, height)
  ```
</details>



Los constructores son útiles porque te permiten inicializar el estado de un objeto cuando se crea, lo que garantiza que esté en un estado válido y coherente desde el principio.