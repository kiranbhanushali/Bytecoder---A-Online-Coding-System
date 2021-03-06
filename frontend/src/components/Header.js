import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/login'
import logo from '../assets/bytecode-logo.png'
import { clearSubmission } from '../actions/generic'
import './Header.css'

const AddProblem = () => {
    const isAdmin = useSelector((state) => state.auth.isAdmin)
    if (isAdmin) {
        return (
            <div className="header_nav">
                <div className="header_option">
                    <a href="/addproblem" className="btn btn-outline-dark">
                        {' '}
                Addproblem{' '}
                    </a>
                </div>
            </div>
        )
    }



}

const Authhandle = () => {
    const isLogged = useSelector((state) => state.auth.isLoggedIn)
    const dispatch = useDispatch()
    const onClickLogout = () => {
        localStorage.removeItem('token')
        dispatch(logout())
        dispatch(clearSubmission())
    }

    if (isLogged) {
        return (
            <div className="header_nav">
                <div className="header_option">
                    <a onClick={onClickLogout} className="btn btn-outline-dark">
                        {' '}
                        Logout{' '}
                    </a>
                </div>
            </div>
        )
    } else {
        return (
            <div className="header_nav">
                <div className="header_option">
                    <a href="/login" className="btn btn-outline-dark">
                        {' '}
                        Login{' '}
                    </a>
                </div>
                <div className="header_option">
                    <a href="/register" className="btn btn-outline-dark">
                        {' '}
                        Register{' '}
                    </a>
                </div>
            </div>
        )
    }
}

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <img className="header_logo" src={logo} />
            </Link>
            <div className="header_nav">
                <div className="header_option">
                    <a href="/problems" className="btn btn-outline-dark">
                        {' '}
                        Problems{' '}
                    </a>
                </div>
                <div className="header_option">
                    <a href="/profile" className="btn btn-outline-dark">
                        {' '}
                        Profile{' '}
                    </a>
                </div>
                {AddProblem()}
                {Authhandle()}

            </div>
        </div>
    )
}

export default Header
