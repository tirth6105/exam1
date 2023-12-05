import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'


import Extra from '../Pages/Extra'
import Singleproduct from '../Pages/Singleproduct'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
// import Home from './Pages/Home'
// import Boy from './Pages/Boy'
// import Logsig from './Pages/Logsig'

const Mainroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Extra' element={<Extra/>}></Route>
            <Route path='/Extra/:js' element={<Singleproduct/>}></Route>
            <Route path='/Signup' element={<Signup/>}></Route>
            <Route path='/Login' element={<Login/>}></Route>
        </Routes>
    </div>
  )
}

export default Mainroutes