---
sidebar_position: 4
---

# 4. Listas en Python

En Python, una lista es una estructura de datos que permite almacenar una colección ordenada de
elementos. Los elementos de una lista pueden ser de diferentes tipos, como números, cadenas de
texto, booleanos u otras listas. Las listas son uno de los tipos de datos más versátiles y utilizados
en Python debido a su flexibilidad y facilidad de uso.
Para crear una lista en Python, simplemente utilizas corchetes ```[]``` y separas los elementos con
comas. Aquí tienes un ejemplo de cómo crear una lista:

```py
mi_lista = [1, 2, 3, 4, 5]
```

En este ejemplo, hemos creado una lista llamada ```mi_lista``` que contiene los números
del 1 al 5.
Para acceder a los elementos de una lista, puedes utilizar el índice del elemento que deseas obtener.
Los índices en Python comienzan en 0. Por lo tanto, el primer elemento tiene un índice de 0, el
segundo tiene un índice de 1, y así sucesivamente. Aquí tienes un ejemplo:

```py
mi_lista = [1, 2, 3, 4, 5]
primer_elemento = mi_lista[0]
segundo_elemento = mi_lista[1]
ultimo_elemento = mi_lista[-1] # El índice -1 accede al último elemento de la lista

print(primer_elemento) # Salida: 1
print(segundo_elemento) # Salida: 2
print(ultimo_elemento) # Salida: 5
```

Para modificar elementos en una lista, simplemente asigna un nuevo valor al índice correspondiente:

```py
mi_lista = [1, 2, 3, 4, 5]
mi_lista[2] = 10

print(mi_lista) # Salida: [1, 2, 10, 4, 5]
```

Para agregar elementos a una lista, puedes utilizar el método ```append()```:

```py
mi_lista = [1, 2, 3, 4, 5]
mi_lista.append(6)

print(mi_lista) # Salida: [1, 2, 3, 4, 5, 6]
```

Existen muchos otros métodos y operaciones que se pueden realizar con listas en Python, como
eliminar elementos, concatenar listas, obtener la longitud de una lista, entre otros. Las listas son
una herramienta poderosa que te permite manejar colecciones de elementos de manera eficiente
y flexible en Python.
