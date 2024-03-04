---
sidebar_position: 1
---
# 1. Revit API

## 1.1. API (Application Programming Interface)

API significa "Interfaz de Programación de Aplicaciones" (Application Programming Interface en inglés). Es un conjunto de reglas, protocolos y herramientas que permiten a diferentes software interactuar entre sí. 

En términos simples, un API define cómo un software debe interactuar con otro, proporcionando una interfaz clara y bien definida para que los desarrolladores puedan utilizar las funciones y servicios ofrecidos por otro programa o plataforma.


## 1.2. ¿Como funciona la Revit API?
En contexto general podemos mencionar que existen principalmente dos Interfaces para interactuar con Revit:
* **API (Interfaz de Programación de Aplicaciones):** 
Diseñada para que los desarrolladores puedan interactuar con un programa de forma programática, (A traves de código) Por lo general, las APIs no proporcionan una interfaz visual directa para que los usuarios interactúen con el software

* **GUI (Interfaz Gráfica de Usuario):**
es una forma visual que permite a los usuarios interactuar con un programa mediante elementos gráficos como ventanas, botones, menús y otros controles. Están diseñadas para que los usuarios puedan interactuar de forma intuitiva con el software sin necesidad de conocer o escribir código.

<div style={{ textAlign: 'center' }}>
  <img
  src={require('./img/InterfacesRevit.png').default}
  alt="InterfacesRevit"/>
</div>

La Revit API es una interfaz de programación de aplicaciones (API, por sus siglas en inglés) proporcionada por Autodesk para  Autodesk Revit. 

La API de Revit permite a los desarrolladores crear scripts, complementos y aplicaciones personalizadas que pueden interactuar con los modelos de Revit y realizar una variedad de tareas automatizadas. Esto incluye la creación, modificación y eliminación de elementos del modelo, la generación de informes personalizados, el intercambio de datos con otros sistemas y la automatización de flujos de trabajo específicos.



## 1.1. Clase

En POO, una clase es una plantilla para crear objetos, la figura antes mostrada seria la plantilla para cualquier objeto **Celular** que existe o se creará. En este sentido los objetos son instancias que pertenecen a una clase especifica. 

Es asi que todo objeto tiene cada una de las propiedades y métodos establecidos en la plantilla de su respectiva Clase.

:::tip[Termino Técnico]

Cuando creamos un objeto de una determinada Clase decimos que estamos instanciando la clase, es decir, se está
creando un objeto perteneciente a una Clase en especifico

:::

:::tip[Atributos y Métodos]

Los **atributos** son variables asociadas a un objeto, mientras que los **métodos** son funciones asociadas a la clase. En el ejemplo anterior, ```TamanioPantalla``` y ```EspacioMemoria``` son atributos, y ```EncenderCelular()``` es un método.

:::

Basándonos en el ejemplo anterior podemos tener muchos objetos pertenecientes a la clase **Celular** y cada uno de ellos tendrán las propiedades y métodos establecidos según la Clase.

<div style={{ textAlign: 'center' }}>
  <img
  src={require('./img/InterfacesRevit.png').default}
  alt="InterfacesRevit"/>
</div>

<details>
  <summary>Ejemplo</summary>
  Este es el contenido oculto que se mostrará cuando hagas clic en el `resumen`.
</details>

<details open>
  <summary>Ejemplo 01</summary>
  <p>Este contenido estará visible cuando se cargue la página.</p>
</details>

<details open>
  <summary>Ejemplo 01</summary>
  <p>Este contenido estará visible cuando se cargue la página.</p>
  
  <!-- Aquí puedes introducir contenido Markdown -->
  <p>Este es un párrafo en Markdown:</p>
  
  ```py
  # Título en Markdown
  
  - Lista 1
  - Lista 2
  ```
  $$f(x) = 5$$
</details>