import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import {items} from '../JSON/data';
import icon from '../images/plane.svg'; 
import '../styles/NavBar.css';
const NavBar = () => {

  const [menu, setMenu] = useState(false);
  const sideBar = ()=>{
    let x = document.getElementById('insideMenu');
    setMenu(!menu);
    if(x.classList.contains('insideMenu--active')){
      x.classList.remove('insideMenu--active');
    } else{
      x.classList.add('insideMenu--active');
    }
  }
  return (
    <>
    <div className='navbar'>
      <div className='icon'>
      <Link to=''>
      <img alt='' src={icon} className='icon' />
      </Link>

      </div>
      <div className='linksContent'>
        <ul className='links'>
            {items.map(i=>{
              return    <li key={i.id}>
                            <Link to={`/${i.name}`} >
                              {i.name}</Link>
                        </li>
            })}
        </ul>
        <div className='linksContentMobile' onClick={sideBar}>
          {menu?
          (<img 
            alt='burguer-menu' 
            src='https://img.icons8.com/ios-filled/50/000000/xbox-x.png'
            className='menuSideBar'/>
          ):(
           <img
            alt=''
            src='https://img.icons8.com/ios-filled/50/000000/menu-rounded.png'
            className='menuSideBar'/>
            )}
        </div>
      </div>
      <div class='insideMenu' id='insideMenu'>
        <ul>
              {items.map(i=>{
                return    <li key={i.id}>
                              <Link 
                              to={`/${i.name}`}
                              onClick={sideBar}>
                                {i.name}</Link>
                          </li>
              })}
          </ul>
      </div>
    </div>
    <Outlet/>
    </>
  )
}

export default NavBar