import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Redirect } from 'react-router';
const logout = ( ) =>{
    localStorage.clear();
    return   <Redirect path="*" to="/" />

}

const Authhandle = () => {
    if ( localStorage.getItem("token")) {
        return (
            <div>
                <li className="nav-items px-1">
                    <a onClick={logout} className="btn btn-primary rounded">
                        {" "}
                        Logout{" "}
                    </a>
                </li>
            </div>
        );
    } else {
        return (
            <div>
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
            <div className="nav">
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
    );
};

export default Header;
