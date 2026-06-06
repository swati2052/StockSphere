import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">

      <div className="container-fluid">

        {/* LEFT: Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="media/images/stockspherelogo.png"
            alt="Logo"
            style={{ width: "120px", objectFit: "contain" }}
          />
        </a>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAV ITEMS (RIGHT SHIFTED) */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

          {/* 🔥 CHANGE 1: justify-content-end = items moved right */}

          <ul className="navbar-nav align-items-center gap-3">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/support">Support</Link>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;