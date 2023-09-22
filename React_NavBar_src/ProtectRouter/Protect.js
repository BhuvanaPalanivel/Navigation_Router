import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'



const  authUser = () =>{
    const user ={login : true};
    
    return user && user.login
}


const Protect = () => {
const isAuth =authUser();

  return (
     isAuth ? <Outlet /> : < Navigate to='/' />
  )
}

export default Protect