import React from 'react'
import image from '../images/persontravel.svg';
import '../styles/Home.css';
const Home=()=> {
  return (
    <div className='homeContent'>
        <h2>Bienvenido! selecciona tu aerolinea</h2>
        <img alt='' src={image} ></img>
    </div>
  )
}

export default Home