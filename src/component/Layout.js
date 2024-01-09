import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./design.css";
function Layout() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-none position-absolute top-0 w-100">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h4>
              <span className="text-danger fw-bold">S</span>hoes store
            </h4>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blogs" className="nav-link">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <div className="me-4">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
              <div className="me-4">
                <i class="fa-solid fa-heart"></i>
              </div>
              <div className="me-4">
                <i class="fa-solid fa-shopping-cart"></i>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
