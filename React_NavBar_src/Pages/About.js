import React from 'react'
import {useNavigate} from 'react-router-dom'

const About = () => {
    const navigate=useNavigate();
  return (
    <div>
        <h1>About</h1>
        <button onClick={()=>navigate("/")}>Go to Home Page</button>
    </div>
  )
}

export default About