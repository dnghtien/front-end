import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Router, Link } from "@reach/router";
import Home from '../pages/home.js';
import Weather from '../pages/weather.js';
import Logo from '../images/logo.png';
import Createacmd from '../components/modal/createACMD.js';
import Signinacmd from '../components/modal/signinACMD.js';
import Forgotacmd from '../components/modal/forgotACMD.js';
 
function Navbar(){
    return(
        <div className='Navbar'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={{height:'6.5%' ,with:'90%',marginLeft:'5%',marginRight:'5%'}}>
                <Link className="navbar-brand" to='/'>
                    <img src={Logo} alt='logo' style={{width:'20%'}}/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to='/'>Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/weather'>Weather</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to='/' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Account
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to='' data-toggle="modal" data-target="#CreateACMD">Create</Link>
                        <Link className="dropdown-item" to='' data-toggle="modal" data-target="#SigninACMD">Sign in</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to='' data-toggle="modal" data-target="#ForgotACMD">Forgot password</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" to='/'>Disabled</Link>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <Createacmd/>
            <Signinacmd/>
            <Forgotacmd/>
            <Router>
                <Home exact path='/' />
                <Weather path='/weather' />
            </Router>
        </div>
    );
}

export default Navbar;