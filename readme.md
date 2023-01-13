# GIT Desarrollo Colaborativo

Esta herramienta funciona como un sistema de control de versiones e implementa un __grafo dirigido aciclico__ para llevar el control de los cambios realizados a lo largo de la historia del proyecto.

Este grafo se forma mediante la creacion de nodos _(vertices)_ que apuntan a otros, realizados con anterioridad _(aristas)_, para identificar cuales fueron las acciones realizadas historicamente.

## Areas de GIT

Cuando trabajamos con git, esta herramienta permite la gestion de los cambios dentro del proyecto, administrando diferentes areas. Estas corresponden a cada una de las etapas de trabajo y son las siguientes:

### Working Directory

Area de trabajo que corresponde a la carpeta donde se inicializo el repositorio de git. Rara vez vamos a utilizar la linea de comandos mas alla de la creacion del repositorio y se utiliza normalmente para crear, editar y eliminar los archivos del proyecto.

* __git init:__ inicializa un repositorio de git
* __mkdir `<name>`:__ crea un directorio (carpeta)
* __touch `<name>`:__ crea el archivo especificado
* __cd `<path>`:__ abre el directorio seleccionado
* __rm -rf .git:__ elimina el repositorio de git

### Staging Area (Index)

Area de control de cambios que se utiliza para realizar las capturas de codigo __(SNAPSHOT)__ y agregar los archivos a los que vamos a realizarle seguimiento. Corresponde a la etapa intermedia antes de registrar los cambios de manera definitiva.

* __git status:__ muestra el estado de los archivos respecto al INDEX
* __git diff:__ compara el working directory con el staging area
* __git blame `<file>`:__ muestra los autores de cada linea del archivo
* __git restore --staged `<file>`:__ elimina la ultima captura realizada
* __git rm --cached `<file>`:__ remueve el archivo y sus capturas del INDEX

### Repository (Local / Remote)

Repositorio o almacen de cambios, corresponde al lugar donde se guardan las capturas de codigo realizadas mediante commits en archivos (BLOB) y a las que podemos acceder a traves del historial de confirmaciones, facilitando la navegacion.

* __git commit:__ confirma las capturas realizadas previamente
* __git log:__ muestra el registro de confirmaciones
* __git push:__ envia al repositorio remoto los cambios realizados
* __git fetch:__ obtiene el historial del repositorio remoto
* __git pull:__ obtiene y combina los cambios remotos en el repositorio local
