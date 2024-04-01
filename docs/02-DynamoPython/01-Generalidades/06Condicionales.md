---
sidebar_position: 6
---

# 6. Estructuras Condicionales
Las estructuras condicionales en Python te permiten tomar decisiones en tu código basadas en
ciertas condiciones. Las condiciones son expresiones que se evalúan como verdaderas (python
```True```) o falsas python ```False```. Las condicionales más comunes en Python son las siguientes:

## 6.1. if
Es la estructura básica de una condicional. Si la condición se cumple (es verdadera), el bloque de
código dentro del ```if``` se ejecuta.

```py
if condicion:
    # Bloque de código si la condición es verdadera
```

## 6.2. if-else
Permite ejecutar un bloque de código si la condición se cumple (```True```) o, en caso contrario,
ejecutar otro bloque de código si la condición no se cumple (```False```).

```py
if condicion:
    # Bloque de código si la condición es verdadera
else:
    # Bloque de código si la condición es falsa
```

## 6.3. if-elif-else
Permite evaluar múltiples condiciones en cascada y ejecutar diferentes bloques de código según
la condición que se cumpla primero.

```py
if condicion1:
    # Bloque de código si la condición1 es verdadera
elif condicion2:
    # Bloque de código si la condición2 es verdadera
else:
    # Bloque de código si ninguna de las condiciones anteriores se cumple
```

El siguiente ejemplo muestra cómo usar una estructura condicional ```if``` para tomar una decisión
simple:

```py
edad = 25
if edad >= 18:
    print("Eres mayor de edad.")
else:
    print("Eres menor de edad.")
```

En este ejemplo, si la variable ```edad``` es mayor o igual a 18, se imprimirá "Eres mayor de edad" de lo contrario,
se imprimirá "Eres menor de edad".
Además de estas estructuras básicas, también puedes usar operadores lógicos como ```and``` (y), ```or```
(o) y ```not``` (negación) para combinar múltiples condiciones dentro de una expresión condicional
más compleja.
