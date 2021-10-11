import React, { useState } from 'react';
import { removeUserSession } from '../../utils/Common';
import Sidebar from '../Sidebar/Sidebar';
import "../chat/chat.css";
import classNames from "classnames";
const Dashboard = (props) => {

    // const username = getUsername()
    // const token = getToken()
    // const jabatan = getJabatan()
  const { setIsProfileOpen, sidebarOpen, setSidebarOpen } = props;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);


  function onClickLogOut() {
    removeUserSession();
  }

  function onClickShowProfile() {
    setIsProfileOpen(() => true);
  }

    const handleLogout = (e) => {
        e.preventDefault();
        console.log('clear session')
        removeUserSession();
        // history.push('/login')
    }

    return (
        <div className='Chat'>
            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />
      <div
          className={classNames("page-content")}
        >
          <div className="chat-content h-100">
            <div className="page-title-box">
              <h4>CHAT</h4>
            </div>
            <div className="col-12 col h-100 d-flex flex-column justify-content-space">
              <div className="w-100 messages-box mb-4">
                {/* <MessageCard messages="Hola" /> */}
              </div>
            </div>
          </div>
        </div>
        </div>
    );
}

export default Dashboard;
