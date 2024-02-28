---
sidebar_position: 2
---
# 2. Nodo "PythonScript"

El nodo **```Python Script```** es un componente específico en Dynamo. Este nodo permite a los usuarios
ejecutar código Python dentro de los flujos de trabajo de Dynamo. Al utilizar el nodo **```Python Script```**, los usuarios pueden aprovechar la potencia de Python para realizar operaciones más complejas y personalizadas dentro de las funcionalidades en Revit.

1. **Puertos de Entrada (```IN[i]```)**  Aquí es donde se definen los datos de entrada que serán
utilizados por el **```Python Script```**. Estos datos pueden incluir geometría, parámetros de Revit,
valores numéricos, listas, entre otros. Los datos de entrada se utilizan como variables dentro
del código Python nombradas como ```IN[0]```, ```IN[1]```, etc. La cantidad de puertos de entrada
puede modificarse con los botones ```+``` y ```-```.
2. **Código Python** Esta es la parte central del nodo **```Python Script```**. Aquí es donde los usuarios pueden escribir el código Python para manipular los datos de entrada y producir los
resultados deseados. El código Python escrito aquí se ejecutará cuando se ejecute el nodo
en el flujo de trabajo de Dynamo.
3. **Puerto de Salida (```OUT```)** Aquí es donde se retornan o devuelven valores calculados
dentro del código de Python, para seguir siendo usados en resto del script de Dynamo.


<div style={{ textAlign: 'center' }}>
  <img
  src={require('./img/nodoPythonScript.png').default}
  alt="Example banner" width="300"/>
</div>

El nodo **```Python Script```** permite a los usuarios realizar operaciones más avanzadas y personalizadas,
ya que tienen acceso a la potencia y flexibilidad del lenguaje de programación Python. Esto es
especialmente útil cuando las operaciones predeterminadas de Dynamo no son suficientes o cuando
se requiere realizar tareas complejas que no se pueden lograr con los nodos gráficos estándar de Dynamo.




