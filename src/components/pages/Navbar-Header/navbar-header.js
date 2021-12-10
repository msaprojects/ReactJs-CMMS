import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default function NavbarHeader(props) {
//   const { setIsProfileOpen, sidebarOpen, setSidebarOpen } = props;
  const [dropdownOpen, setDropdownOpen] = useState(false);
//   const toggle = () => setDropdownOpen((prevState) => !prevState);

  let history = useHistory();

  function onClickLogOut() {
    localStorage.clear();
    history.push("/signin");
  }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
//   function onClickShowProfile() {
//     setIsProfileOpen(() => true);
//   }

  return (
    <div className="Navbar-header">
      <div className="page-topbar d-flex justify-content-between align-items-center">
        <div className="menu-btn">
          <img
            src="https://cdn.glitch.com/af45ea57-cc17-431c-a29e-191393077cfe%2Flist.svg?v=1596545874905"
            alt=""
          />
        </div>
        {/* {user && ( */}
          <Dropdown>
            <DropdownToggle>
              <div className="header-profile">
                <img
                  className="rounded-circle header-profile-user"
                //   src={user.userImageUrl}
                  alt="Header Avatar"
                />
              </div>
            </DropdownToggle>
            <DropdownMenu right className="mt-2">
              <DropdownItem >Profile</DropdownItem>
              <DropdownItem >Log out</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        {/* )} */}
      </div>
    </div>
  );
}
