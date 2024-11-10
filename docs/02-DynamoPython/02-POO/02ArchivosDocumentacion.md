---
sidebar_position: 2
---

# 2. Archivos de Documentación


Ahora que comprendemos el funcionamiento de las clases y la herencia entre ellas, es fundamental entender dónde se encuentran establecidas las clases para los objetos de Dynamo y, aún más importante, dónde se localizan para Revit.

La documentación para Dynamo y Revit se puede encontrar en los archivos de extensión ```.chm```. Estos archivos contienen información sobre las clases existentes y públicas de los objetos de Dynamo y Revit. Es esencial consultar esta documentación para comprender completamente la estructura y funcionalidad de las clases disponibles en estas plataformas.

<div style={{ textAlign: 'center' }}>
  <img  style={{ maxWidth: '300px'}}
  src={require('./img/archivosDocDynamoRevit.png').default}
  alt="archivosDocDynamoRevit"/>
</div>


## 2.1. Estructuración de los Archivos de Documentación
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



