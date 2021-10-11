import React, { useState, useEffect } from "react";
import classNames from "classnames";
import axios from "axios";

import { useHistory } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";
import NavbarHeader from "../Navbar-Header/navbar-header";

import "./chat.css";

function Chat() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="Chat">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div
        className={classNames("main-content", "w-100", "h-100", {
          "padding-none": !sidebarOpen
        })}
      >
        <NavbarHeader
          setSidebarOpen={setSidebarOpen}
          sidebarOpen={sidebarOpen}
          setIsProfileOpen={setIsProfileOpen}
        />

        <div
          className={classNames("page-content", {
            "margin-right": isProfileOpen
          })}
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
    </div>
  );
}

export default Chat;
