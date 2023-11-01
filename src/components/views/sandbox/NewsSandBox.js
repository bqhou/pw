import React from 'react'
import SideMenu from '../../sandbox/SideMenu'
import TopHeader from '../../sandbox/TopHeader'
import UserList from './user-manage/UserList'
import RightList from './right-manage/RightList'
import Home from './home/Home'
import RoleList from './right-manage/RoleList'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import { redirect } from 'react-router-dom'

import { Layout, Menu, Button, theme } from 'antd';
const { Header, Sider, Content } = Layout;
const NewsSandBox = () => {
  return (

      <div>
        {/* <TopHeader></TopHeader> */}
        <SideMenu></SideMenu>
       
        <Outlet/>

        {/* <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            // background: colorBgContainer,
          }}
        >
          Content
        </Content>
         */}

        {/* <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/user-manage/list' element={<UserList />}></Route>
          <Route path='/right-manage/role/list' element={<RoleList />}></Route>
          <Route path='/right-manage/right/list' element={<RightList />}></Route>
        </Routes> */}
      </div>
 
  )
}

export default NewsSandBox