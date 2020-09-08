Repositorio Progra-Web

#### Descripción del repositorio:

**¿Qué incluye la estructura base del proyecto?**

- Carpeta build: En esta carpeta se encontrarán todos los archivos minificados de extensión .js y .css
- Carpeta dist: En esta carpeta se encontrarán las plantillas .css generadas para mostrar en el navegador
- Carpeta node_modules: En esta carpeta se encuentran los paquetes instalados de las dependencias indicadas por el archivo package.json
- Carpeta source: En esta carpeta se encontrarán los archivos no minificados de extensión .js y .css
- Carpeta src: En esta carpeta se encontrarán los archivos de extensión .scss y un archivo .html para ejecutar las plantillas .css
- Archivo .gitignore: En esta carpeta se encontrarán todos los archivos y carpetas a ignorar para que no se suban al repositorio
- Archivo .gulpfile.js: En este archivo se declararán todas las tareas que gulp tiene que ejecutar
- Archivo package.json: En este archivo se encuentran las dependencias que se van a usar en el proyecto
- Archivo package-lock.json: Este archivo indica información muy importante del proyecto (nombre, versión, dependencias, etc.)
- Dependencias:
* gulp: Herramienta que automatiza tareas comunes en el desarrollo de una aplicación
* gulp-sass: Preprocesador CSS que genera de forma automática hojas de estilo
* browser-sync: Permite que el navegador se actualice automáticamente cuando se efectúa un cambio en archivos .css y .html
* gulp-uglify: Permite minificar archivos .js
* gulp-minify-css: Permite minificar archivos .css

**Comandos de instalación de la estructura base**

Para comenzar con el proyecto, se procede a ingresar el siguiente comando, el cual creará un archivo package.json, el cual almacenará las dependencias que vamos a utilizar junto con su versión, autor del proyecto, y entre otros datos. Estos datos hay que ingresarlos manualmente, se solicitarán dichos datos apenas hayamos ingresado este comando:

> npm init

A continuación se muestran las dependencias que hay que instalar:

Se procede a instalar gulp en nuestro entorno de desarrollo con el siguiente comando:

> npm install --save-dev gulp

Se procede a instalar gulp-sass en nuestro entorno de desarrollo con el siguiente comando:

> npm install --save-dev gulp-sass

Se procede a instalar browser-sync en nuestro entorno de desarrollo con el siguiente comando:

> npm install --save-dev browser-sync

Se procede a instalar gulp-uglify en nuestro entorno de desarrollo con el siguiente comando:

> npm install --save-dev gulp-uglify

Se procede a instalar gulp-minify-css en nuestro entorno de desarrollo con el siguiente comando:

> npm install --save-dev gulp-minify-css

**Tareas que automatiza el proyecto**

- Se minifica código de dos tipos de archivo: .js y .css
- Se sincronizan cambios con el navegador (se actualiza automáticamente al efectuar un cambio en archivos .html o en archivos .css)
- Se compilan estilos con el preprocesador scss, para generar estilos .css