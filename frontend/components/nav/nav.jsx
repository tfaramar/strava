import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ currentUser, logout }) => {

    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/" className="header-link">
                <h1 className="logo">STRAVA</h1>
            </Link>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/signup"><button>Sign up</button></Link>
        </nav>
    );

    const personalNav = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.firstName}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalNav() : sessionLinks();
};

export default Nav;