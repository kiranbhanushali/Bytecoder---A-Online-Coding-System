import React, { useState } from "react";
import logo from "../assets/bytecode-logo.png";
import { Redirect } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/login";
import { Link } from 'react-router-dom';
import './Header.css'

const Authhandle = () => {
  const isLogged = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const onClickLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
  };
  
  if (isLogged) {
    return (
      <div className="header_nav">
        <div className="header_option">
          <a onClick={onClickLogout} className="btn btn-outline-dark">
            {" "}
      Logout{" "}
          </a>
        </div>
      </div>
      
    );
  } else {
    return (
      <div className="header_nav">
        <div className="header_option">
          <a href="/login" className="btn btn-outline-dark">
            {" "}
            Login{" "}
          </a>
        </div>
        <div className="header_option">
          <a href="/register" className="btn btn-outline-dark">
            {" "}
            Register{" "}
          </a>
        </div>
      </div>
    );
  }
};

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={logo} />
      </Link>
      <div className="header_nav">
        <div className="header_option">
          <a href="/problems" className="btn btn-outline-dark">
            {" "}
                Problems{" "}
          </a>
        </div>
        <div className="header_option">
          <a href="/submit" className="btn btn-outline-dark">
            {" "}
                Code Compile Run{" "}
          </a>

        </div>
        <div className="header_option">
          <a href="/profile" className="btn btn-outline-dark">
            {" "}
                Profile{" "}
          </a>
        </div>
        {Authhandle()}
      </div>
    </div>

  );
};

export default Header;
