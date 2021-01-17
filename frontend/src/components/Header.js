import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Redirect } from "react-router";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/login";

const Authhandle = () => {
  const isLogged = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const onClickLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
  };
  if (isLogged) {
    return (
      <div>
        <li className="nav-items px-1">
          <a onClick={onClickLogout} className="btn btn-primary rounded">
            {" "}
            Logout{" "}
          </a>
        </li>
      </div>
    );
  } else {
    return (
      <div className="navbar-nav">
        <li className="nav-items px-1">
          <a href="/login" className="btn btn-primary rounded">
            {" "}
            Login{" "}
          </a>
        </li>
        <li className="nav-items px-1">
          <a href="/register" className="btn btn-primary rounded">
            {" "}
            Register{" "}
          </a>
        </li>
      </div>
    );
  }
};

const Header = () => {
  return (
    <div className="navbar">
      <nav className="container-fluid navbar px-5   bg-light ">
        <div className="nav mx-5">
          <a href="/">
            <img
              className="navbar-brand"
              src={logo}
              height="80"
              alt="logo"
            ></img>{" "}
          </a>
        </div>
        <div className="nav" className="nav_buttons">
          <ul className="nav inline">
            <li className="nav-items px-1">
              <a href="/problems" className="btn btn-primary rounded">
                {" "}
                Problems{" "}
              </a>
            </li>
            <li className="nav-items px-1">
              <a href="/run" className="btn btn-primary rounded">
                {" "}
                Code Compile Run{" "}
              </a>
            </li>
            <li className="nav-items px-1">
              <a href="/profile" className="btn btn-primary rounded">
                {" "}
                Profile{" "}
              </a>
            </li>
            {Authhandle()}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
