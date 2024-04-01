---
slug: instalaciones-Docusaurus
title: Instalaciones Docusaurus
authors: gerald
tags: [hello, docusaurus]
---

En este post se registra los cambios e instalaciones importantes hechas en Docusaurus
Y el procesos inicial para
Usar `<!--` `truncate` `-->`

<!--truncate-->

## 1. Leer código desde archivos
Solución obtenida desde [stackOverFlow](https://stackoverflow.com/questions/73619703/import-and-show-file-content-in-mdx-code-blocks)
En la documentaciones se debe hacer lo siguiente (instalaciones requeridas):
[Link de documentación](https://docusaurus.io/docs/markdown-features/react#importing-code-snippets)

Luego en un archivo mdx( en lugar de un md) poner el siguiente código:
```mdx
import CodeBlock from '@theme/CodeBlock';
import MyComponentSource from '!!raw-loader!./codigos/ejemplo1.py';

<CodeBlock language="py">{MyComponentSource}</CodeBlock>
```
## 2. Katex
En la documentaciones se debe hacer lo siguiente (instalaciones requeridas): [Link de documentación](https://docusaurus.io/docs/markdown-features/math-equations)


## Deployment
Para desplegar seguir los siguientes pasos:
1. correr en la terminal `npm run build` 
2. Crear Git `git init` -> `git add .` -> `git commit -m "commit inicial"`
3. Copiar las lineas de código de github luego de crear el repositorio, masomenos es: `git remote add origin ...`
4. Configuración en `docusaurus.config.js`
    * `url: "https://geraldpm123.github.io/"`
    * `baseUrl: "/nombre-repositorio"`
5. Opcionalmente se puede probar lo generado en el "build", con `npm run serve`
6. La carpeta build es la que tiene todo para desplegar. Para github pages hacemos lo siguiente en `docusaurus.config.js`:
    * `organizationName: "geraldpm123"`
    * `projectName: "nombre-repositorio"`
    * `deploymentBranch: "gh-pages"`
    * `trailingSlash: false`
7. En powershell colocamos: `cmd /C 'set "GIT_USER=geraldpm123" && npm run deploy'`, opcionalmente podría funcionar copiar el contenido de build al branch `gh-pages`.