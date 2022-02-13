# Calculadora de salarios para desarrolladores

## NodeJs | ExpressJs | Typescript | XUBUNTU y Docker configurado.

### Requerimientos iniciales

1. Instalar Virtual Box. `https://www.virtualbox.org/` .

2. Imagen de Xubuntu. `https://drive.google.com/file/d/1BsH3RTnDlHPqx2VWouStNHAOyUKVIPkj/view?usp=drivesdk` .

3. Instalar PostMan. `https://www.postman.com/` .

#### Pasos de instalación

1. Ir a la carpeta `server` con un `cd server` .

2. Instalar las dependencias y que el IDE detecte ejecutar un `yarn install` o `npm install` .

3. Construir la imagen con un `sudo docker build .` .

4. Ubicarnos en la carpeta del docker con un `cd ../docker` y ejecutamos un `sudo docker-compose up --build` .

5. En caso de mostrar algun error ejecutar un `docker exec -it server sh` y ejecutar un `yarn install` .
<<<<<<< HEAD

### Dependencias

ver el archivo: `Dev-Salary-Calculator/server/package.json`
