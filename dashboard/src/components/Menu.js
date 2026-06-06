import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Menu = ({ username }) => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await axios.post(`${"https://stocksphere-z675.onrender.com"}/logout`, {}, { withCredentials: true });
      window.location.href = "https://stock-sphere-kbz9.vercel.app";
    } catch (err) {
      console.log(err);
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="new.png" style={{ width: "50px" }} alt="logo" />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <a
              style={{ textDecoration: "none" }}
              href={"https://stock-sphere-kbz9.vercel.app"}
            >
              <p className={menuClass}>
                Home
              </p>
            </a>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick} style={{ cursor: "pointer", display: "flex", alignItems: "center", position: "relative" }}>
          <div className="avatar">{username ? username.substring(0, 2).toUpperCase() : "US"}</div>
          <p className="username">{username || "USERID"}</p>
          {isProfileDropdownOpen && (
            <div style={{ position: "absolute", top: "40px", right: "0", background: "white", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", zIndex: 10 }}>
              <button onClick={handleLogout} style={{ background: "transparent", border: "none", cursor: "pointer", color: "red" }}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
