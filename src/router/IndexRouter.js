import React from 'react'
import {BrowserRouter as  Router, Routes,Route} from 'react-router-dom'

import NewsSandBox from '../views/sandbox/NewsSandBox'
import Register from '../views/reg/Register'
const indexRouter = () => {
  return (
    
      <Routes>
              <Route path='/reg' element={<Register/>}/>
              <Route path='/' element={<NewsSandBox/>}/>

          </Routes>

    
          

  )
}

export default indexRouter
