import React from "react";
import logo from "../../Assets/Images/logo3.png";
import "./SideBar.css";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <div className="section1">
        <div className="logo">
          <img className="logo" src={logo} />
          {/* <h2>Endoxous</h2>
        <h6 className="s2-logotitle">international private limited</h6> */}
        </div>
        <div>
          <ul className="navbar-nav justify-content-end flex-grow-1 ">
            <li className="nav-item m-2">
              <NavLink to="/">
                <button className="s1-btn btn btn-sm px-4 ">Home</button>
              </NavLink>
            </li>
            <li className="nav-item m-2">
              <NavLink to="/orders">
                <button className="s1-btn btn btn-sm px-4 ">Orders</button>
              </NavLink>
            </li>
            <li className="nav-item m-2">
              <NavLink to="/salesreport">
                <button className="s1-btn btn btn-sm px-4 ">Products</button>
              </NavLink>
            </li>
            <li className="nav-item m-2">
              <NavLink to="/ordersreport">
                <button className="s1-btn btn btn-sm px-4 ">Payments</button>
              </NavLink>
            </li>
            <li className="nav-item m-2">
              <NavLink to="/allnurseries">
                <button className="s1-btn btn btn-sm px-4 ">Nurseries</button>
              </NavLink>
            </li>
            <li className="nav-item m-2">
              <button className=" s1-btn btn btn-sm px-4 ">
                <NavLink>Logout</NavLink>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
