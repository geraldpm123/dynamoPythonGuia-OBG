---
slug: instalaciones-Docusaurus
title: Instalaciones Docusaurus
authors: gerald
tags: [hello, docusaurus]
---

En este post se registra los cambios e intslaciones importantes hechas en Docusaurus

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


