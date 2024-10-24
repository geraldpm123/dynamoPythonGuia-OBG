---
slug: clonar-Docusaurus
title: Clonar Proyecto Docusaurus
authors: gerald
tags: [git, clone, docusaurus]
---

En este post se detalla los pasos seguidos para clonar el proyecto docusaurus en una PC

<!--truncate-->

## 1. Instalar Git

Si aún no lo tienes instalado, primero debes instalar Git en tu máquina.
Para los primeros pasos de instalacion de git y clonar el proyecto puede ver este [video](https://www.youtube.com/watch?v=wHh3IgJvXcE&t=1s).

Descarga Git desde [paginaGit](git-scm.com) y sigue las instrucciones del instalador.

## 2. Configurar Git
Abre la terminal o la línea de comandos y configura tu nombre de usuario y correo electrónico (estos datos aparecerán en los commits que hagas):
```bash
git config --global user.name "TuNombreDeUsuario"
git config --global user.email "TuEmail@example.com"
```

## 3. Clonar un Repositorio de GitHub:
Ve a la página del repositorio en GitHub que quieres clonar.
Haz clic en el botón verde "Code" y copia la URL del repositorio (puede ser HTTPS o SSH).
Luego, en tu terminal, navega a la carpeta donde quieres clonar el proyecto y ejecuta el siguiente comando:
```bash
git clone URL_DEL_REPOSITORIO
```

## 4. Trabajar con el proyecto
Ahora que has clonado el proyecto, puedes modificar archivos, agregar nuevos commits, y enviar tus cambios a GitHub usando comandos de Git.

Algunos comandos básicos que puedes usar:
```bash
git status
git add .
git commit -m "Mensaje del commit"
git push origin main
```

## 5. Instalar Node.js y npm
Docusaurus está basado en Node.js, por lo que necesitas tener instalado Node.js y su administrador de paquetes, npm (o yarn).

Descarga Node.js desde su sitio oficial y sigue las instrucciones para instalarlo. Esto también instalará npm.
Para verificar que la instalación fue correcta, ejecuta en tu terminal:

```bash
node -v
npm -v
```

## 6. Instalar Dependencias del proyecto
Entra en el directorio donde clonaste el proyecto de Docusaurus y ejecuta 
el siguiente comando para instalar todas las dependencias:

```bash
npm install
```
Luego para inicializar, corremos el script definido en package.json
```bash
npm run start
```

## 7. Si hay errores en los paquetes
Abre el archivo package.json de tu proyecto y asegúrate de que todas las dependencias relacionadas con @docusaurus/* (por ejemplo, @docusaurus/core, @docusaurus/preset-classic, etc.) tengan la misma versión. Deberías ver algo como esto:

```json
"dependencies": {
  "@docusaurus/core": "3.2.1",
  "@docusaurus/preset-classic": "3.2.1",
  "@docusaurus/theme-classic": "3.2.1"
}
```
Nota: La versión 3.2.1 es un ejemplo según el error que mencionaste. Si en el futuro usas una versión diferente, asegúrate de que todas las dependencias estén alineadas con la versión correcta.

Eliminar node_modules y los archivos de lock (package-lock.json o yarn.lock):
A veces, los archivos de lock pueden causar conflictos entre versiones de dependencias. Para regenerarlos:
1. Elimina la carpeta `node_modules`
2. Si estás usando npm, elimina `package-lock.json`
3. Si usas yarn, elimina `yarn.lock`

Luego instala las dependencias nuevamente
```bash
npm install
```


## 8. Deployment
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