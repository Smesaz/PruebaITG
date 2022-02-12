# Prueba Técnica ITG

Proyecto de prueba utilizando [Create React App](https://github.com/facebook/create-react-app).

## Principales requerimientos

Aplcación para la reserva de viaje con aerolineas comerciales.

### `Menú simple responsive`

- Menú con un listado (<'li'></'li'>) de las aerolineas disponibles
- Menú versión desktop de forma horizontal
- Menú versión mobile de forma desplegable (desde un ancho de 920px)
- La lista de items en el menú es alimentado por un JSON ubicado en el archivo https://github.com/Smesaz/PruebaITG/blob/main/src/JSON/data.js 

**Nota: Ejemplo del fromato JSON: [{"id": 1, "name":"Vivair"}, {...}]**

### `Formulario`

- Texto de bienvenida (para cada aerolinea seleccionada)
- Campos de formulario:
  > Nombre Completo
  >
  > Email
  > 
  > Teléfono Celuar
  > 
  > Edad en el rango (18<=edad<=100)
  
- Formulario controlado
  >Botón de enviar desabilitado hasta llenar los campos requeridos
  >
  >Detección de errores para el campo de emmail y la edad
 
 - Datos del formulario envados e imprimidos en consola
 - Ligthbox con duración de 5 segundos para confirmar el evío exitoso de los datos 
 
## Capturas de pantalla

### `Modelo Desktop 🖥️` </br></br>

  ![image](https://user-images.githubusercontent.com/77469033/153702362-c44521b2-86fd-47b0-a9f4-104a49b86166.png) ![image](https://user-images.githubusercontent.com/77469033/153702768-fafdc82b-3235-4769-b07f-58c5b61e45a0.png)

</br></br>

### `Modelo Mobile 📱` </br></br>

  ![image](https://user-images.githubusercontent.com/77469033/153702425-6fb9dc02-10ac-4f2f-9bb8-bf7c184afc68.png) ![image](https://user-images.githubusercontent.com/77469033/153702610-1c89d201-7ca2-4aba-811f-398610dd535b.png) ![image](https://user-images.githubusercontent.com/77469033/153702649-b9ae5d1c-9591-4830-9077-450db453a202.png) ![image](https://user-images.githubusercontent.com/77469033/153702736-06430ee3-68af-4f1d-bc22-8fde3e00b98b.png)





### Enlace del Deploy ☁️
https://itg-prueba.herokuapp.com/

