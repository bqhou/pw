import React from 'react'

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  
  } from '@ant-design/icons';
  import { Layout, Menu, Button, theme } from 'antd';
const { Header} = Layout;

const TopHeader = () => {
  return (
    <Header
          style={{
            padding: 0,
            // background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            // icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            // onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
  )
}

export default TopHeader