import './photo/test.css';
import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import {Link, Outlet, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getItem, getSelf } from '../action/user';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
const LayoutNew = () => {
    return (
        <div id="wrapper">

     
        <ul class="navbar-nav sidebar sidebar-dark accordion" style={{ backgroundColor: "#435585" }} id="accordionSidebar"> 
    
          <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
          <div className="sidebar-brand-icon">
            <img
              src={require("./photo/logo.png")}
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
          </div>
          <div className="sidebar-brand-text mx-2">
            <h6 className="m-0">
              Hotel Realta
              <br />
              <p className="fs-6 fst-italic lead m-0">check in dong</p>
            </h6>
          </div>
          </a>
    
          
          <hr class="sidebar-divider my-0"></hr>
          <li className="nav-item active">
          <a className="nav-link" href="index.html">
            
            <span>Dashboard</span>
          </a>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}
        <div className="sidebar-heading">Module</div>
        {/* Nav Item - Pages Collapse Menu */}
        {/* Nav Item - Utilities Collapse Menu */}
        
        
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-bs-toggle="collapse"
            data-bs-target="#collapseHR"
            aria-expanded="true"
            aria-controls="collapseHR"
          >
            
            <span>HR</span>
          </a>
          <div
            id="collapseHR"
            className="collapse"
            aria-labelledby="headingHR"
            data-bs-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Menus:</h6>
              <Link to={'/'}>
              <a className="collapse-item" href="buttons.html">
                Departement
              </a>
              </Link>
              <Link to={'employee'}>
              <a className="collapse-item" href="cards.html">
                Employee
              </a>
              </Link>
              <Link to={'work_order'}>
              <a className="collapse-item" href="cards.html">
                WorkOrder
              </a>
              </Link>
            </div>
          </div>
        </li>

        
    
          </ul>

    
       
        <div id="content-wrapper" class="d-flex flex-column">
    
       
          <div id="content">
    
         
            <nav style={{ backgroundColor: "#363062" }} class="navbar navbar-expand navbar-light topbar mb-4 static-top shadow">
    
              
          
            
              <ul className="navbar-nav ml-auto">
                {/* Nav Item - User Information */}
                <li className="nav-item dropdown no-arrow mx-3">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                      Admin
                    </span>
                    <img
                      className="img-profile rounded-circle"
                      src="https://i.pravatar.cc/150?img=12"
                      alt=""
                    />
                  </Link>
                  {/* Dropdown - User Information */}
                  <div
                    className="dropdown-menu dropdown-menu-end shadow animated--grow-in w-auto"
                    aria-labelledby="userDropdown"
                  >
                    <Link className="dropdown-item" to={"/profile"}>
                      <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                      Profile
                    </Link>
                    <Link className="dropdown-item" to={"/setting"}>
                      <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                      Settings
                    </Link>
                    <Link className="dropdown-item" to={"/activity"}>
                      <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                      Activity Log
                    </Link>
                    <div className="dropdown-divider" />
                    <Link
                      className="dropdown-item"
                      data-bs-toggle="modal"
                      data-bs-target="#logoutModal"
                      to={"/logout"}
                    >
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                      Logout
                    </Link>
                  </div>
                </li>
              </ul>
    
            </nav>
         
            <div class="container-fluid">
            <main>
      {<Outlet />}
      </main>
            </div>
         
    
          </div>
         
    
      
          <footer class="sticky-footer" style={{ backgroundColor: "#363062" }}>
            <div class="container my-auto">
              <div class="copyright text-center my-auto">
                <span>Copyright &copy; Your Website 2019</span>
              </div>
            </div>
          </footer>
       
    
        </div>
     
    
      </div>
    );
}

export default LayoutNew;
