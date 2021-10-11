import React, { useState, useEffect } from "react";
import classNames from "classnames";

import "./sidebar.css";

function Sidebar(props) {
  const { sidebarOpen, setSidebarOpen, setMessages } = props;

  return (
    <div className={classNames("sidebar", { nonVisible: !sidebarOpen })}>
      <div className="logo d-flex justify-content-between">
        <div className="logo-name">
          [ C M M S ]
        </div>
      </div>
      <div className="vertical-menu pt-2">
        <ul>
          <li onClick='/dashboard'>
            <img
              src="https://cdn.glitch.com/af45ea57-cc17-431c-a29e-191393077cfe%2Ficons8-menu-rounded-50.png?v=1596541736150"
              alt=""
            />
            <span>Dashboard</span>
          </li>
          <li>
            <img
              src="https://cdn.glitch.com/af45ea57-cc17-431c-a29e-191393077cfe%2Fconversation.svg?v=1596542126344"
              alt=""
            />
            <span>Mesin</span>
          </li>
          <li>
            <img
              src="https://cdn.glitch.com/af45ea57-cc17-431c-a29e-191393077cfe%2Fcopy.svg?v=1596543073128"
              alt=""
            />
            <span>Drafts</span>
          </li>
          <li>
            <img
              src="https://cdn.glitch.com/af45ea57-cc17-431c-a29e-191393077cfe%2Fbookmark.svg?v=1596542475338"
              alt=""
            />
            <span>Saved items</span>
          </li>
        </ul>
        <ul className="channels">
          <li className="d-flex justify-content-between">
            <span className="menu-title">CHANNELS</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
