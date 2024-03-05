import React from 'react'
import { useNavigate } from 'react-router-dom'



const HeaderComponent = () => {

  const navigator = useNavigate();
  function homePage(){
    navigator('/')
  }   

  return (
    <header className='navbar navbar-dark bg-dark'>
        <h2 style={{ color: 'white', cursor: 'pointer' }} onClick={homePage}>Employee Management System</h2>
    </header>
  )
}

export default HeaderComponent