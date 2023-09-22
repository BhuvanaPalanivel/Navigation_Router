import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useParams} from 'react-router-dom'

const Products = () => {
    const navigate=useNavigate();
    const {id}=useParams()
  return (
    <div><h1>Products {id}</h1>
      <button onClick={()=>navigate("/")}>Go to Home Page</button>
    </div>
  )
}

export default Products