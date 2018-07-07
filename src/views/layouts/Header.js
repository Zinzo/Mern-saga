import React, { Component } from 'react';
import Link from 'react-router-dom/es/Link';


import * as css from '../../css/module'

class Header extends Component {

    render() {
        return (
            <div className="Header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand">React Express App</a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item"><Link to={'/'} className="nav-link"><css.Title>Home</css.Title></Link></li>
                            <li className="nav-item"><Link to={'/lists'} className="nav-link">ListsPage</Link></li>
                            <li><Link to={'/edit/:id'}>Edit</Link></li>
                        </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header;