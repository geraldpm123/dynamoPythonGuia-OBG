---
sidebar_position: 3
---

# 3. Archivos de Documentación


Ahora que comprendemos el funcionamiento de las clases y la herencia entre ellas, es fundamental entender dónde se encuentran establecidas las clases para los objetos de Dynamo y, aún más importante, dónde se localizan para Revit.

La documentación para Dynamo y Revit se puede encontrar en los archivos de extensión ```.chm```. Estos archivos contienen información sobre las clases existentes y públicas de los objetos de Dynamo y Revit. Es esencial consultar esta documentación para comprender completamente la estructura y funcionalidad de las clases disponibles en estas plataformas.

<div style={{ textAlign: 'center' }}>
  <img  style={{ maxWidth: '300px'}}
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
  <img  style={{ maxWidth: '600px'}}
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

:::note[Ejemplo 1]
<div style={{ textAlign: 'center' }}>
  <img  style={{ maxWidth: '550px'}}
  src={require('./img/sintaxisPropiedad.png').default}
  alt="sintaxisPropiedad"/>
</div>
:::

:::note[Ejemplo 2]
<div style={{ textAlign: 'center' }}>
  <img  style={{ maxWidth: '500px'}}
  src={require('./img/sintaxisPropiedad2.png').default}
  alt="sintaxisPropiedad2"/>
</div>
:::

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

:::note[Ejemplo 1]
En este ejemplo se puede ver un método llamado ```Reverse``` que devuelve un objeto ```Curve```, ademas no recibe ningún argumento.
<div style={{ textAlign: 'center' }}>
  <img  style={{ maxWidth: '400px'}}
  src={require('./img/sintaxisMetodo1.png').default}
  alt="sintaxisMetodo1"/>
</div>
:::

:::note[Ejemplo 2]
En este ejemplo se puede ver un método llamado ```Rotate``` que devuelve un objeto ```Geometry```, y recibe tres argumentos, los cuales son de tipo: ```Point```, ```Vector``` y ```double```.
<div style={{ textAlign: 'center' }}>
  <img  style={{ maxWidth: '500px'}}
  src={require('./img/sintaxisMetodo2.png').default}
  alt="sintaxisMetodo2"/>
</div>
:::


:::note[Ejemplo 3]
En este ejemplo se puede ver un método llamado ```Flip``` que no devuelve nada (```void```), ademas no recibe ningún argumento.
<div style={{ textAlign: 'center' }}>
  <img  style={{ maxWidth: '500px'}}
  src={require('./img/sintaxisMetodo3.png').default}
  alt="sintaxisMetodo3"/>
</div>
:::

:::note[Ejemplo 4]
En este ejemplo se puede ver un método llamado ```ByCoordinates``` que devuelve un objeto ```Point```, y recibe tres argumentos, los cuales son de tipo: ```double```, ```double``` y ```double```.
Pero este Metodo es muy particular ya que tiene el modificador ```static```, este tipo de Métodos no se usan desde un objeto, sino que desde la misma Clase.
<div style={{ textAlign: 'center' }}>
  <img  style={{ maxWidth: '500px'}}
  src={require('./img/sintaxisMetodo4.png').default}
  alt="sintaxisMetodo4"/>
</div>
:::

:::tip[Métodos Estáticos]

Los Métodos Estáticos no se llaman directamente desde un objeto, sino que se llaman desde la Clase, pro lo que pueden ser usados para crear objetos de una determinada Clase, o **Instanciar la Clase**

:::

