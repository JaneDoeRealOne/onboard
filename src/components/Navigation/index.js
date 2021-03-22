import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import '../../index.css';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import Logo from '../assets/KYH-logo.png';



const Navigation = () => (
  <nav className='navbar'>
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </nav>
);

const NavigationAuth = () => (
  <div className='navbar-container'>
    <ul className='nav-wrap'>
      <li className='nav-item'>
        <div>
          <img src={Logo} className='logo' alt='logotype' />
        </div>
      </li>
      <div className='link-wrapper'>
        <li className='nav-item'>
          <Link
            className='nav-link'
            to={ROUTES.EDUCATION_SELECT}>Utbildning</Link>
        </li>
        <li className='nav-item'>
          <Link
            className='nav-link'
            to={ROUTES.HOME}>Hem</Link>
        </li>
        <li className='nav-item'>
          <Link
            className='nav-link'
            to={ROUTES.FAQ}>FAQ</Link>
        </li>
        <li className='nav-item'>
          <Link
            className='nav-link'
            to={ROUTES.NEWS}>Nyheter</Link>
        </li>
      </div>
      <SignOutButton />
    </ul>
  </div>
);

const NavigationNonAuth = () => (
  <div className='navbar-container'>
    <ul className='nav-wrap'>
      <li className='nav-item'>
        <Link to='/' className='navbar-logo'>
          <div>
            <img src={Logo} className='logo' alt='logotype' />
          </div>
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className='nav-link btn'
          to={ROUTES.SIGN_IN}>
          <button
            className='signin-button loginbtn'
          >LOGGA IN</button>
        </Link>
      </li>
    </ul>
  </div>
);

export default Navigation;