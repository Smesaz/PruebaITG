import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from "sweetalert2";
import "../styles/formPage.css";
import { items } from '../JSON/data';

const Form = () => {

    let {item} = useParams();
    
    let itemSelected = items.find(i=>
      {if(i.name === item) return i
      else return ''});

    const [input, SetInput]=useState({
        name:'',
        email:'',
        phone:'',
        age:'',
    });
    const [error, setError] = useState({
      email:'',
      age:'',
    }); 

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
    const validateMail = (e)=>{
        if(!/\S+@\S+\.\S+/.test(e.target.value)){ // Expresión regular para validar el formato de Email
          setError({
            ...error,
            email:'Debe ser un email válido',
          });
        } else{
          setError({
            ...error,
            email:''
          });
        }
      }
    
    const validateAge = (e)=>{
      if(e.target.value < 18){
        setError({
          ...error,
          age:'La edad debe ser mayor o igual a 18 años',
        });
      }
      else if(e.target.value > 100){
        setError({
          ...error,
          age:'La edad debe ser mayor o igual a 100 años',
        });
      }
      else{
        setError({
          ...error,
          age:'',
        });
      }

    }
    const HandleOnSubmit = (e)=>{
        e.preventDefault();
        console.log("Datos enviados exitosamente: ",input); 
        Swal.fire({
          icon: 'success',
          title: 'Tu información fue enviada con éxito, estaremos en contacto contigo',
          showConfirmButton: false,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
          timer: 5000
        });
        SetInput({
            name:'',
            email:'',
            phone:'',
            age:'',
        })
    }
  return (
    <div className='formPage'>
      {itemSelected ? 
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
         || !input.phone || !input.email || !input.age ?
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