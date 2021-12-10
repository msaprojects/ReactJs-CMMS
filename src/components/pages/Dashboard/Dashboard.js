import React from 'react';
// import { removeUserSession } from '../../utils/Common';
import Sidebar from '../Sidebar/Sidebar';
import {Container, Row, Col} from "react-bootstrap"
import './dashboard.css'
import Chat from '../chat/chat'
const Dashboard = (props) => {

    // const username = getUsername()
    // const token = getToken()
    // const jabatan = getJabatan()
  // const { setIsProfileOpen, sidebarOpen, setSidebarOpen } = props;
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  // const toggle = () => setDropdownOpen((prevState) => !prevState);


  // function onClickLogOut() {
  //   removeUserSession();
  // }

  // function onClickShowProfile() {
  //   setIsProfileOpen(() => true);
  // }

  //   const handleLogout = (e) => {
  //       e.preventDefault();
  //       console.log('clear session')
  //       removeUserSession();
  //       // history.push('/login')
  //   }
    return (
      <Container fluid>
      ahsa
        <Row>
          <Col xs={2} id='sidebar-wrapper'>
            <Chat/>
          </Col>
          <Col xs={10} id='page-content-wrappet'>
            HAHA
          </Col>
        </Row>
      </Container>
    
    );
}

export default Dashboard;
