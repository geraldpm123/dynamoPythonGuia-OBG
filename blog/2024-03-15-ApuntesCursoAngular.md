---
slug: apuntesAngular
title: Apuntes sobre Angular
authors: gerald
tags: [hello, angular]
---

En este post hay apuntes del curso de Udemy de Fernando Herrera de Angular


<!--truncate-->

# 1. Instalaciones
1. Instalar Node, para probar `node --version`
2. Instalar git, `git --version`
    * `git config --global user.name "geraldpm123"`
    * `git config --global user.email "geraldpm123@gmail.com"`

# 2. Creación de Proyecto
1. `ng version` para verificar que se tiene instalado angular cli
2. `ng new my-app --standalone false`, Angular >17  -> CSS -> SSG/Prerendering: N
3. `cd my-app` -> `ng serve -o` -> N
4. Importante, la carpeta node_modules se puede restaurar con: `npm install`

# 3. Atajos de Angular
* Para crear un componente: `ng g c heroes/hero`
* Para crear un modulo: `ng g m dbz`