import React from 'react'
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
import { Layout, Menu} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUpload, faUser, faVideo} from '@fortawesome/free-solid-svg-icons'
import { Container, Nav, Navbar, Row, Col, Button } from 'react-bootstrap';

// const { Sider} = Layout;

const SideMenu = () => {
  return (
<Nav variant="pills"  defaultActiveKey="/" >

      <Nav.Item>
        <Nav.Link eventKey="/" href='/'>
        <FontAwesomeIcon icon={faUser} /> Nav 1
        </Nav.Link> 
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="link-1">
        <FontAwesomeIcon icon={faUpload} /> Nav 2
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="link-2">
        <FontAwesomeIcon icon={faVideo} /> Nav 3333
        </Nav.Link>
      </Nav.Item>

</Nav>


);

}

export default SideMenu



{/* <Navbar.Brand href="#home">Navbar</Navbar.Brand>
<Nav className="me-auto">
  <Nav.Link href="#home">Home</Nav.Link>
  <Nav.Link href="#features">Features</Nav.Link>
  <Nav.Link href="#pricing">Pricing</Nav.Link>
</Nav>
*/}


//  <Layout>
//     <Sider>
//      <Menu
//         theme="dark"
//         mode="inline"
//         defaultSelectedKeys={['1']}
//         items={[
//           {
//             key: '1',
//             icon: <FontAwesomeIcon icon={faUser} />,
//             label: 'nav 1',
//           },
//           {
//             key: '2',
//             icon: <VideoCameraOutlined />,
//             label: 'nav 2',
//           },
//           {
//             key: '3',
//             icon: <UploadOutlined />,
//             label: 'nav 3',
//           },
//         ]}
//       />
//     </Sider>
//     </Layout> 

