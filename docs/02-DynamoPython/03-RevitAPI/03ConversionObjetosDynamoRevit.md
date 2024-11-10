---
sidebar_position: 3
---
# 3. Objetos Dynamo Revit

## 3.1. Elementos de Revit Empaquetados
Cuando se interactúa con la API de Revit dentro de Dynamo, los elementos de Revit están "envueltos" 
en una capa de Dynamo que permite su manipulación en el entorno visual. Para utilizar estos elementos 
en métodos que requieren el acceso completo a la API de Revit, es necesario "desenvolverlos" y trabajar 
directamente con ellos como objetos de Revit.

En el siguiente codigo se muestra como se usa la funcion `UnwrapElement()`:
```python title="PythonScript 📦"
# elemento_D es un elemento proveniente del entorno de Dynamo
elemento_D = IN[0]                      # Revit.Elements.Element
elemento_R = UnwrapElement(elemento_D)  # Autodesk.Revit.DB.Element

# Ahora se puede acceder a propieades y métodos establecidos en la documentación de Revit
estaBloqueado = elemento_R.Pinned

OUT = estaBloqueado
```

:::caution[Cuidado!]

El empaquetamiento de elemento **solo ocurre en Dynamo**, en PyRevit no hay necesidad de hacer tal cosa.
:::



## 3.2. Geometría de Dynamo y Revit (GeometryConversion) 
La biblioteca `GeometryConversion` en el contexto de Dynamo y la API de Revit es fundamental 
para convertir entre los tipos de geometría que se manejan en ambos entornos. Trabajar con 
geometrías es común cuando se realizan operaciones avanzadas, análisis o automatizaciones, 
y la compatibilidad entre Dynamo y Revit puede requerir conversiones específicas para que los datos fluyan de manera eficiente.

### 3.2.1. Metodos Extendidos para conversion de Revit a Dynamo

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'width': '100%'}}}%%
flowchart LR
    XYZ -- ToPoint() --> Point_D
    XYZ -- ToVector() --> Vector
    Point_R -- ToProtoType() --> Point_D
    List_XYZ -- ToPoints() --> List_Point
    UV_R -- ToProtoType() --> UV_D
    Curve_R -- ToProtoType() --> Curve_D
    CurveArray -- ToProtoType() --> PolyCurve
    PolyLine -- ToProtoType() --> PolyCurve
    Plane_R -- ToPlane() --> Plane_D
    Solid_R -- ToProtoType() --> Solid_D
    Mesh_R -- ToProtoType() --> Mesh_D
    IEnumerableMesh -- ToProtoType() --> Mesh_D
    Face_R -- ToProtoType() --> IEnumerableSurface
    Transform -- ToCoordinateSystem() --> CoordinateSystem
    BoundingBoxXYZ -- ToProtoType() --> BoundingBox

    subgraph Autodesk.Revit.DB
        direction LR
        XYZ
        Point_R[Point]
        List_XYZ["List&lt;XYZ&gt;"]
        UV_R[UV]
        Curve_R[Curve]
        CurveArray
        PolyLine
        Plane_R[Plane]
        Solid_R[Solid]
        Mesh_R[Mesh]
        IEnumerableMesh["IEnumerable&lt;Mesh&gt;"]
        Face_R[Face]
        Transform
        BoundingBoxXYZ
    end
    subgraph Autodesk.DesignScript.Geometry
        direction LR
        Point_D[Point]
        Vector
        List_Point["List&lt;Point&gt;"]
        UV_D[UV]
        Curve_D[Curve]
        PolyCurve
        Plane_D[Plane]
        Solid_D[Solid]
        Mesh_D[Mesh]
        IEnumerableSurface["IEnumerable&lt;Surface&gt;"]
        CoordinateSystem
        BoundingBox
    end
```

### 3.2.2. Metodos Extendidos para conversion de Dynamo a Revit

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'width': '100%'}}}%%
flowchart LR
    Point_D -- ToRevitType() --> XYZ
    Vector -- ToRevitType() --> XYZ
    Plane_D -- ToPlane() --> Plane_R
    List_Point -- ToXyzs() --> List_XYZ
    Curve_D -- ToRevitType() --> Curve_R
    PolyCurve -- ToRevitType() --> CurveLoop
    Surface_D -- ToRevitType() --> IList_GeometryObject
    Solid_D -- ToRevitType() --> IList_GeometryObject
    Mesh_D -- ToRevitType() --> IList_GeometryObject
    CoordinateSystem -- ToTransform() --> Transform
    CoordinateSystem -- ToRevitBoundingBox() --> BoundingBoxXYZ
    BoundingBox -- ToRevitType() --> BoundingBoxXYZ


    subgraph Autodesk.DesignScript.Geometry
        direction LR
        Point_D[Point]
        Vector
        List_Point["List&lt;Point&gt;"]
        Curve_D[Curve]
        PolyCurve
        Plane_D[Plane]
        Solid_D[Solid]
        Mesh_D[Mesh]
        CoordinateSystem
        BoundingBox
        Surface_D[Surface]
    end

    subgraph Autodesk.Revit.DB
        direction LR
        XYZ
        List_XYZ["List&lt;XYZ&gt;"]
        Curve_R[Curve]
        CurveLoop
        Plane_R[Plane]
        Transform
        BoundingBoxXYZ
        IList_GeometryObject["IList&lt;GeometryObject&gt;"]
    end
    
```