---
sidebar_position: 5
---

# 5. Funciones en Python
En Python, una función es un bloque de código que realiza una tarea específica y que puede
ser reutilizado en diferentes partes de un programa. Las funciones son una forma de organizar
y modularizar el código, lo que facilita el mantenimiento, la reutilización y la comprensión del
mismo.

## 5.1. Funciones preestablecidas
En Python, existen muchas funciones preestablecidas (también conocidas como funciones incorporadas o funciones integradas) que vienen incluidas en el lenguaje y están disponibles para su
uso sin necesidad de importar módulos adicionales. Estas funciones están diseñadas para realizar
tareas comunes y básicas, y forman parte del núcleo del lenguaje. Puedes usar estas funciones
directamente en tus programas sin necesidad de definirlas previamente.
Algunos ejemplos de funciones preestablecidas en Python son:

1. ```print()```: Utilizada para imprimir mensajes o valores en la consola. Es una funcion que se usa
en consola mucho, pero dentro de Dynamo no la usaremos mucho en su lugar usaremos la
visualizacio nde datos mediantes los puertos de salida (```OUT```).

```py
print("Hola, mundo!") # Usado en Consola
OUT = "Hola, mundo!" # Nosotros usaremos la asignacion a la varible OUT
```

2. ```len()```: Devuelve la longitud (número de elementos) de una secuencia, como una cadena,
lista o tupla.

```py
texto = "Hola"
longitud = len(texto)
print(longitud) # Salida: 4
```

3. ```type()```: Devuelve el tipo de datos de una variable o valor.

```py
numero = 42
tipo = type(numero)
print(tipo) # Salida: <class 'int'>
```

4. ```int()```, ```float()```, ```str()```, ```bool()```: Estas funciones convierten valores de un tipo de dato a otro.

```py
numero_texto = "42"
numero_entero = int(numero_texto)
print(numero_entero) # Salida: 42
```

Estos son solo algunos ejemplos de las muchas funciones preestablecidas que Python ofrece.
Puedes consultar la documentación oficial de Python para conocer más detalles sobre todas las
funciones incorporadas y cómo utilizarlas: funciones para Python 3.
Hay que tener precaución en el uso de funciones predefinidas, ya dentro de Dynamo no tenemos
realmente corriendo Python, sino una implementación de este lenguaje, lo que podría ocasionar
que no todas las funciones estén disponibles para los PythonScripts.

:::danger[Cuidado!]

Dynamo en realidad usa una las implementaciones **Cpython** y **IronPython**, por lo que algunas de las funcioens de Python podrían no estar presentes en Dynamo.

:::

## 5.2. Funciones Personalizadas
Una función en Python se define utilizando la palabra clave ```def``` seguida del nombre de
la función y paréntesis que pueden contener los argumentos de la función (si los necesita). A
continuación, se define el bloque de código que se ejecutará cuando la función sea llamada.
La sintaxis básica para definir una función en Python es la siguiente:

```py
def nombre_de_funcion(argumento1, argumento2, ...):
    # Código de la función
    # ...
    return resultado
```

1. **```nombre_de_funcion```:** Es el nombre que le das a tu función. Debes elegir un nombre
descriptivo y que siga las convenciones de nombres de Python.

2. **```argumento1, argumento2, ...```:** Son los argumentos que la función puede recibir. Pueden
ser opcionales y puedes especificar tantos como necesites.

3. **```return resultado```:** La instrucción ```return``` indica qué valor o valores se deben devolver cuando se llama a la función. Puedes devolver múltiples valores separados por coma
o simplemente omitir la instrucción ```return``` si la función no debe devolver ningún
valor.

Una vez que la función está definida, puedes llamarla desde cualquier parte de tu programa
proporcionando los argumentos necesarios (si los tiene). Al llamar a la función, el flujo de ejecución
del programa pasará al bloque de código de la función y realizará las operaciones definidas.
