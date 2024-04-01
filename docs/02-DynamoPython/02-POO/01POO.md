---
sidebar_position: 1
---
# 1. Programación Orientada a Objetos (POO)
La Programación Orientada a Objetos (POO) es un paradigma fundamental en el desarrollo de
software que organiza el código en entidades llamadas öbjetos
¨
. Estos objetos encapsulan datos
y comportamientos, permitiendo una estructura más modular y comprensible del código. En el
contexto de Dynamo y Python, la POO juega un papel esencial para crear scripts más eficientes
y mantenibles.

<div style={{ textAlign: 'center' }}>
  <img
  src={require('./img/objetoCelular.png').default}
  alt="ObjetoCelular"/>
</div>

En la figura se puede ver las propiedades y métodos de un objeto real celular, en cuanto a
las propiedades, cada una almacena un tipo de valor específico (```int```, ```double```, ```float```, ```string```, ```objeto
de otra clase```, etc.) y en los métodos se puede distinguir que son funciones y pueden o no tener
argumentos que van dentro de los paréntesis, ```void``` significa que el método no devolverá ningún
valor al ser llamada o utilizada.

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
  src={require('./img/instanciasClaseCelular.png').default}
  alt="instanciasClaseCelular"/>
</div>