---
sidebar_position: 7
---

# 7. Bucles
Los bucles en Python son estructuras que permiten repetir un bloque de código varias veces, lo
que facilita la automatización de tareas y el procesamiento de listas o conjuntos de datos. Hay
dos tipos principales de bucles en Python: el bucle ```for``` y el bucle ```while```.

## 7.1. Bucle ```for```
Se utiliza para iterar sobre una secuencia de elementos (como listas, tuplas, cadenas de texto,
etc.) o cualquier objeto iterable. La sintaxis básica es la siguiente:

```py
for elemento in secuencia:
    # Bloque de código que se ejecuta en cada iteración
```

Ejemplo:

```py
frutas = ["manzana", "naranja", "plátano"]
for fruta in frutas:
    print(fruta)
```

Esto imprimirá cada elemento de la lista ```frutas``` en una línea separada.

## 7.2. Bucle ```while```
Se utiliza cuando se necesita repetir un bloque de código mientras se cumpla una condición
específica. La sintaxis básica es:

```py
while condicion:
    # Bloque de código que se ejecuta mientras se cumpla la condición
```
Ejemplo:

```py
contador = 0
while contador < 5:
    print(contador)
    contador += 1
```

Esto imprimirá los números del 0 al 4, ya que el bucle se ejecutará mientras ```contador``` sea menor
que 5.

En ambos tipos de bucles, es importante asegurarse de que la condición de finalización se cumpla
en algún momento para evitar bucles infinitos.
Además, puedes usar las instrucciones ```break``` y ```continue``` dentro de los bucles para controlar el
flujo de ejecución. La instrucción ```break``` permite salir del bucle por completo antes de que termine,
y ```continue``` permite pasar a la siguiente iteración del bucle sin ejecutar el resto del código en esa
iteración.
