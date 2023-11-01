import React from 'react'
import {BrowserRouter as  Router, Routes,Route} from 'react-router-dom'

import NewsSandBox from '../views/sandbox/NewsSandBox'
import Register from '../views/reg/Register'

import UserList from '../views/sandbox/user-manage/UserList'
import RightList from '../views/sandbox/right-manage/RightList'
import Home from '../views/sandbox/home/Home'
import RoleList from '../views/sandbox/right-manage/RoleList'
import NoPermission from '../views/sandbox/nopermission/NoPermission'

import { useNavigate } from 'react-router-dom'

const IndexRouter = () => {

  // const navigate=useNavigate();
  return (    
      <Routes>
              <Route path='/reg' element={<Register/>}/>
              <Route path='/' element={<NewsSandBox/>}>
                  <Route path='/home' element={<Home/>}></Route>
                  {<Route path='/user-manage/list' element={<UserList/>}></Route>}
                  <Route path='/right-manage/role/list' element={<RoleList/>}></Route>
                  <Route path='/right-manage/right/list' element={<RightList/>}></Route> 
                  <Route path='*' element={<NoPermission/>}/>
              </Route>
              {/* navigate('/') */}
       
  </Routes>
   
          

  )
}

export default IndexRouter
