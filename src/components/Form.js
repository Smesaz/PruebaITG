import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from "sweetalert2"; // paquete que permite laa utilización de pop-ups con estilo
import "../styles/formPage.css";
import { items } from '../JSON/data'; // se importa archivo con los datos en formato json

const Form = () => {

  //utilización del hook params para obtener por destructuring el params que incorpora la url 
    let {item} = useParams(); 
    
    // itemSelected va a obtener el obj donde items.name sea igual al obtenido por params
    let itemSelected = items.find(i=>
      {if(i.name === item) return i
      else return ''});
    // inicialización del estado local para los diferentes inputs del formulario
    const [input, SetInput]=useState({
        name:'',
        email:'',
        phone:'',
        age:'',
    });
    //inicialización para los estados locales de los errores email y edad del formulario
    const [error, setError] = useState({
      email:'',
      age:'',
    }); 
    // Esta función va a estar escuchando los cambios de los diferentes inputs, y a su
    // vez actualizando el estado local input, teniendo en cuenta los posibles errores.
    const HandleOnChange = (e)=>{
        SetInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        if(e.target.name==='email'){
            validateMail(e);
          }
        if(e.target.name==='age'){
            validateAge(e);
          }
    }
    // Esta función permite validar el formato de un correo electrónico del tipo ejemplo@ejemplo.ejemplo
    const validateMail = (e)=>{
        if(!/\S+@\S+\.\S+/.test(e.target.value)){ // Expresión regular para validar el formato de Email
          setError({
            ...error,
            email:'Debe ser un email válido',
          });
        } else{
          setError({ // de ser correcto el formato del email, se limipia el estado de error.email
            ...error,
            email:''
          });
        }
      }
    // función que permite validar el rango de edad escrito en el formulario entre 18 a 100 años
    const validateAge = (e)=>{
      if(e.target.value < 18){ // se setea el error en error.age al ser la edad menor a 18
        setError({
          ...error,
          age:'La edad debe ser mayor o igual a 18 años',
        });
      }
      else if(e.target.value > 100){// se setea el error en error.age al ser la edad mayor a 100
        setError({
          ...error,
          age:'La edad debe ser mayor o igual a 100 años',
        });
      }
      else{
        setError({ // se limpia el estado de error.age de ser una edad válida
          ...error,
          age:'',
        });
      }

    }
    const HandleOnSubmit = (e)=>{
        e.preventDefault();// permite cancelar un evento si este es cancelable.
        console.log("Datos enviados exitosamente: ",input); // se escribe por consola los datos adquiridos en el formulario
        Swal.fire({ // se ejecuta la alerta por 5 segundos una vez se hallan consologueado los datos del form
          icon: 'success',
          title: 'Tu información fue enviada con éxito, estaremos en contacto contigo',
          showConfirmButton: false,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
          timer: 5000 // tiempo de 5000 milisegundos
        });
        SetInput({ // una vez enviado los datos, se procede a eliminar cada uno de los valores de los inputs en el formulario
            name:'',
            email:'',
            phone:'',
            age:'',
        })
    }
  return (
    <div className='formPage'>
      {itemSelected ? // utilizando ternarios se hace la condición de si existe una aerolinea dado el dado por params, 
      // sino presenta una leyenda diciendo que la aerolinea no existe
      <>
      <h3>
      Hola, bienvenido, sabemos que quieres viajar en <strong>{itemSelected.name}</strong>
     , por favor diligencia el siguiente formulario:
      </h3> 
     <form className='form'>
         <img alt='' src={itemSelected.logo} className='logo' />
         <label>Nombre Completo *</label>
         <input 
         type="text" 
         placeholder='Escribre tu nombre'
         name='name'
         value={input.name}
         maxLength='50'
         onChange={(e)=>{HandleOnChange(e)}}
         />
         <label>Email *</label>
         {error.email ? <p className='p-alert'>{error.email}</p> : <></>}
         <input 
         type="email" 
         maxLength='50'
         placeholder='Escribre tu correo electrónico'
         name='email'
         value={input.email}
         onChange={(e)=>{HandleOnChange(e)}}
         />
         <label>Celular *</label>
         <input 
         type="number" 
         min='1'
         maxLength='15'
         placeholder='Escribre tu número celular'
         name='phone'
         pattern="^[0-9]+"
         value={input.phone}
         onChange={(e)=>{HandleOnChange(e)}}
         />
         <label>Edad *</label>
         {error.age ? <p className='p-alert'>{error.age}</p> : <></>}
         <input 
         type="number" 
         min='1'
         maxLength='3'
         placeholder='Escribre tu edad'
         name='age'
         pattern="^[0-9]*"
         value={input.age}
         onChange={(e)=>{HandleOnChange(e)}}
         />
         {error.email || error.age || !input.name 
         || !input.phone || !input.email || !input.age ? // con la utilización de un ternario se habilita o deshabilita el boton de enviar el formulario.
         // el formulario unicamente es habilitado si no existe ningun error en el estado local y si los diferentes campos input presentan información.
         <button
         disabled
         type='submit'
         className='isDisabled'
         onClick={HandleOnSubmit}
         >Enviar</button>:

         <button
         type='submit'
         onClick={HandleOnSubmit}
         >Enviar</button>}
     </form>
     </> :
      <h3> 
      Página de aerolinea no encontrada... 
      </h3>
      }
       
    </div>
  )
}

export default Form