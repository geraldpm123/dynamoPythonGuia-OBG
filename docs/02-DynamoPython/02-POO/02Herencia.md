---
sidebar_position: 2
---
# 2. Herencia
La herencia es otro concepto clave en POO. Permite que una clase herede atributos y métodos
de otra clase. Esto fomenta la reutilización del código y la creación de jerarquías. Por ejemplo:

<div style={{ textAlign: 'center' }}>
  <img  style={{ maxWidth: '600px'}}
  src={require('./img/diagramaClasesDispositivos.png').default}
  alt="diagramaClasesDispositivos"/>
</div>

En la figura anterior se muestra 4 clases **Dispositivo Class**, **Celular Class**, **Tablet Class** y **Laptop Class**,
las cuales establecen propiedades y métodos para cada objeto que pertenezca a su respectiva clase. 

Luego la herencia se establece siendo **Dispositivo Class** la clase padre y el resto de clases heredan de esta. 

Entonces cuando se tenga por ejemplo un objeto de **Celular Clase**, este tendrá las siguientes propiedades y métodos:

<div style={{ textAlign: 'center' }}>
  <img  style={{ maxWidth: '300px'}}
  src={require('./img/objetoCelular1.png').default}
  alt="objetoCelular1"/>
</div>


Como se puede observar el objeto de la clase **Celular Class** tiene la propiedad ```anchoBanda``` y el método ```HacerLlamada()```, pero también ha heredado las propiedades ```tamanioPantalla``` y memoria, asi como el método ```Encender()```. Este comportamiento es gracias a la herencia de Clases.

:::tip[Herencia de Clases]

La Herencia de Clases evita tener que estar definiendo muchas veces las propiedades y métodos comunes para un grupo de clases en común. Esta característica es muy común en las clases de Dyanmo y Revit.

:::


Existen otros conceptos en POO pero en esta guía básica solo hablaremos de estos conceptos.