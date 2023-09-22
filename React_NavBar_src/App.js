import React from 'react'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Products from './Pages/Products'
import About from './Pages/About'
import Error from './Pages/Error'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import Protect from './ProtectRouter/Protect'
import Navbar from './Pages/navbar/Navbar'



const App = () => {
  return (
    <div>
      
      <Router>
      <Navbar />
          <Routes>
             <Route path="/" element={ <Home /> } />
              <Route path="/about" element={ <About /> } />
              <Route path="/products" element={ <Products /> } /> 
              <Route path="/login" element={ <Login /> } />
              <Route path="*" element={ <Error /> } /> 
          </Routes>
      </Router>
    </div>
  )
}

export default App