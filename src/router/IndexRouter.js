import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from '../views/login/Login'
import NewsSandBox from '../views/sandbox/NewsSandBox'
const IndexRouter = () => {
  return (
    <Router>
        <Routes>
        <Route path='/login' element={Login}></Route>
        <Route path='/sandbox' element={NewsSandBox}></Route>

        </Routes>

    
     
    </Router>


  )
}

export default IndexRouter
