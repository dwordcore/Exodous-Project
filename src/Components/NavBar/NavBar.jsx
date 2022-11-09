import React from "react";
import logo from "../../Assets/Images/logo3.png";

const NavBar = () => {
  return (
    <div>
      <div className="section1">
        <div className="logo">
          <img className="logo" src={logo} />
        </div>
        <div>
          <ul className="navbar-nav justify-content-end flex-grow-1 ">
            <li className="nav-item m-2">
              <button className="s1-btn btn px-4 ">Home</button>
            </li>
            <li className="nav-item m-2">
              <button className="s1-btn btn px-4 ">Orders</button>
            </li>
            <li className="nav-item m-2">
              <button className="s1-btn btn px-4 ">All Nurseries</button>
            </li>
            <li className="nav-item m-2">
              <button className="s1-btn btn px-4 ">Payments</button>
            </li>
            <li className="nav-item m-2">
              <button className="s1-btn btn  px-4 ">Nurseries</button>
            </li>
            <li className="nav-item m-2">
              <button className=" s1-btn btn  px-4 ">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
