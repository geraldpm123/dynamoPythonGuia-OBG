---
sidebar_position: 3
---

# 3. Archivos de Documentación


Ahora que comprendemos el funcionamiento de las clases y la herencia entre ellas, es fundamental entender dónde se encuentran establecidas las clases para los objetos de Dynamo y, aún más importante, dónde se localizan para Revit.

La documentación para Dynamo y Revit se puede encontrar en los archivos de extensión ```.chm```. Estos archivos contienen información sobre las clases existentes y públicas de los objetos de Dynamo y Revit. Es esencial consultar esta documentación para comprender completamente la estructura y funcionalidad de las clases disponibles en estas plataformas.

<div style={{ textAlign: 'center' }}>
  <img
  src={require('./img/archivosDocDynamoRevit.png').default}
  alt="archivosDocDynamoRevit"/>
</div>

## 3.1. Estructuración de los Archivos de Documentación
Estos archivos están estructuradas de la siguiente manera:

```
Biblioteca01
├── Namespace01
│   ├── Clase01
│   |   └── Propiedades
│   |   └── Métodos
│   ├── Clase02
│   |   └── Propiedades
│   |   └── Métodos
|   ...
├── Namespace02
│   ├── Clase03
│   |   └── Propiedades
│   |   └── Métodos
│   ├── Clase04
│   |   └── Propiedades
│   |   └── Métodos
|   ... 
Biblioteca02
├── Namespace03
│ 
...
```

Cada archivo ```.chm``` contiene información de clases de bibliotecas, los cuales están contenidas en archivos ```.dll``` correspondientes a la API de cada software (estos archivos binarios son utilizados como medio de comunicación), mas adelante hablaremos mas acerca de ello. Entre las bibliotecas mas comunes tenemos:

- Revit: ```RevitAPI.dll``` y ```RevitAPIUI.dll```
- Dynamo: ```ProtoGeometry.dll```, ```RevitServices.dll```, etc

Dentro del archivo .chm se puede ver toda esta información de la siguiente manera:

<div style={{ textAlign: 'center' }}>
  <img
  src={require('./img/jeraquiaEnChm.png').default}
  alt="jeraquiaEnChm"/>
</div>

## 3.2. Estructura de una Propiedad

La documentación ofrece la sintaxis de las propiedades de las clases en el lenguaje ```C#```, saber leer e identificar cada parte es muy importante para poder hacer uso de la propiedad en cuestión. En ```C#``` la sintaxis se presenta de la siguiente forma:

```js
[modificadores] tipo NombreDeLaPropiedad { get; set; }
```

Donde: 

1. **```NombreDeLaPropiedad```**: Es el identificador que se utilizará para acceder a la propiedad desde dentro de la clase o desde fuera de ella.
2. **```tipo```**:  Es el tipo de dato de la propiedad. Indica qué tipo de valor puede almacenar la propiedad.
3. **```{ get; set; }```**: Es la implementación de los métodos de acceso (```get``` y ```set```) de la propiedad. El método ```get``` se utiliza para obtener el valor de la propiedad, mientras que el método ```set``` se utiliza para establecer el valor de la propiedad.
4. **```[modificadores]```**: Son los modificadores de acceso que definen la visibilidad de la propiedad. Pueden ser ```public```, ```private```, ```protected```, ```internal```, etc.

A continuación se muestran dos ejemplos de dos Propiedades extraídos de al documentación.

**Ejemplo 1:**
<div style={{ textAlign: 'center' }}>
  <img
  src={require('./img/sintaxisPropiedad.png').default}
  alt="sintaxisPropiedad"/>
</div>

**Ejemplo 2:**
<div style={{ textAlign: 'center' }}>
  <img
  src={require('./img/sintaxisPropiedad2.png').default}
  alt="sintaxisPropiedad2"/>
</div>

## 3.3. Estructura de un Método
Al igual que las propiedades, la documentación de los métodos de una clase están en lenguaje ```C#```, la sintaxis se presenta de la siguiente forma:

```js
[modificadores] tipoRetorno NombreDelMetodo([parámetros]) 
```

Donde: 

1. **```NombreDelMetodo```**: Es el identificador que se utiliza para llamar al método y acceder a su funcionalidad.
2. **```tipoRetorno```**: Es el tipo de dato que devuelve el método. Puede ser cualquier tipo de dato válido en C#, incluyendo tipos primitivos como int, string, double, etc., o tipos definidos por el usuario, como clases o estructuras.
3. **```[parámetros]```**: Son los valores que se pasan al método para que los utilice en su funcionamiento. Los parámetros pueden ser de cualquier tipo de dato válido en C# y pueden ser opcionales o requeridos, según cómo se defina el método.
4. **```[modificadores]```**: Son los modificadores de acceso y otros modificadores como static, virtual, abstract, override, etc. Estos modificadores determinan el alcance y el comportamiento del método.

A continuación se muestran dos ejemplos de Métodos extraídos de al documentación.

**Ejemplo 1:**

En este ejemplo se puede ver un método llamado ```Reverse``` que devuelve un objeto ```Curve```, ademas no recibe ningún argumento.
<div style={{ textAlign: 'center' }}>
  <img
  src={require('./img/sintaxisMetodo1.png').default}
  alt="sintaxisMetodo1"/>
</div>

**Ejemplo 2:**

En este ejemplo se puede ver un método llamado ```Rotate``` que devuelve un objeto ```Geometry```, y recibe tres argumentos, los cuales son de tipo: ```Point```, ```Vector``` y ```double```.
<div style={{ textAlign: 'center' }}>
  <img
  src={require('./img/sintaxisMetodo2.png').default}
  alt="sintaxisMetodo2"/>
</div>

**Ejemplo 3:**

En este ejemplo se puede ver un método llamado ```Flip``` que no devuelve nada (```void```), ademas no recibe ningún argumento.
<div style={{ textAlign: 'center' }}>
  <img
  src={require('./img/sintaxisMetodo3.png').default}
  alt="sintaxisMetodo3"/>
</div>

**Ejemplo 4:**

En este ejemplo se puede ver un método llamado ```ByCoordinates``` que devuelve un objeto ```Point```, y recibe tres argumentos, los cuales son de tipo: ```double```, ```double``` y ```double```.
Pero este Metodo es muy particular ya que tiene el modificador ```static```, este tipo de Métodos no se usan desde un objeto, sino que desde la misma Clase.
<div style={{ textAlign: 'center' }}>
  <img
  src={require('./img/sintaxisMetodo4.png').default}
  alt="sintaxisMetodo4"/>
</div>

:::tip[Métodos Estáticos]

Los Métodos Estáticos no se llaman directamente desde un objeto, sino que se llaman desde la Clase, pro lo que pueden ser usados para crear objetos de una determinada Clase, o **Instanciar la Clase**

:::

## 3.4. Uso de Propiedades y llamada a Métodos de Objeto


Para usar una propiedad o un método de un objeto de una Clase en Python, primero necesitas tener una instancia válida de esa clase. Luego, puedes acceder a las propiedades y métodos de esa instancia utilizando el operador de punto (```.```).

Supongamos que tienes una clase **Persona** con una propiedad ```Nombre``` y un método ```Saludar()```. Para usarlos, primero creas un objeto de la clase Persona y luego accedes a sus propiedades y métodos de esta manera:

```python
# Se debe tener una instancia de la Clase "Persona"
persona1 # Este es un objeto de la clase "Persona" previamente definido

# Usar la propiedad Nombre
nombreAnterior = persona1.Nombre # Leyendo el valor de la propiedad "Nombre"
persona1.Nombre = "Juan" # Estableciendo un nuevo valor a la propiedad "Nombre"
# OJO: solo se puede modificar el valor de una propiedad si tiene el método de acceso "get"

# Usar el método Saludar
persona1.Saludar()
```

**Ejemplo con objetos Dynamo**

El siguiente ejemplo muestra un script de Dynamo en cual tiene dos ```Python Script``` los cuales reciben objetos ya creados para asi utilizar propiedades y llamar métodos, para esto se hizo uso de la documentación para Clases de Dynamo.
<div style={{ textAlign: 'center' }}>
  <img
  src={require('./img/PropiedadesYMetodosDynamo.png').default}
  alt="PropiedadesYMetodosDynamo"/>
</div>
El contenido de los ```Python Script``` son los siguientes:

```py title="Python Script 01"
# Recibe un objeto Line desde el puerto IN[0]
linea1 = IN[0]

# Valor de la propiedad "Length"
long = linea1.Length

# Valor de la propiedad "IsClosed"
esCurvaCerrada = linea1.IsClosed

# Valor de la propiedad "Direction"
vecDirection = linea1.Direction

# Devolviendo objetos al entorno Dynamo
OUT = long, esCurvaCerrada, vecDirection
```

```py title="Python Script 02"
# Puertos de entrada del Python Script
linea1 = IN[0] #objeto de la clase "Line"
puntoRot = IN[1] # objeto de la clase "Point"
vecRot = IN[2] # objeto de la clase "Vector"


# Llamando al método "Reverse()" para invertir la Linea
lineaInvert = linea1.Reverse()

# Llamando al método "DoesIntersect()" para evaluar la intersección de la linea con el puntoRot
seInterseca = linea1.DoesIntersect(puntoRot)

# Llamando al método "ExtendEnd()" para extender la linea un valor de 2.5
lineaEstirada = linea1.ExtendEnd(2.5)

# Llamando al método "PointAtParameter()" para obtener el punto central de la linea estirada
puntoCentral = lineaEstirada.PointAtParameter(0.5)

# Llamando al método "Rotate()" para rotar la lineaEstirada 15°
lineaRotada = lineaEstirada.Rotate(puntoRot, vecRot, 15)

# Devolviendo objetos al entorno Dynamo
OUT = lineaInvert, seInterseca, lineaEstirada, puntoCentral, lineaRotada
```

## 3.5. Creación de Objetos

Se puede instanciar o crear objetos de
una determinada clase varias veces según sea necesario, y para ello se suele usar:
* **Constructor**: Un método especial definido en la Clase.
* **Métodos Estáticos**: Métodos de uso múltiple que pueden usarse para crear objetos, Estos métodos se llaman desde la Clase.

## 3.6. Importación de Bibliotecas