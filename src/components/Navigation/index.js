import React from 'react';
import { Link } from 'react-router-dom';
// import { Button } from '../Button/Button';
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
        <Link to={ROUTES.HOME}>Hem</Link>
      </li>
      <li className='nav-item'>
        <Link to={ROUTES.FAQ}>FAQ</Link>
      </li>
      <li className='nav-item'>
        <Link to={ROUTES.NEWS}>Nyheter</Link>
      </li>
      <li className='nav-item'>
        <SignOutButton />
      </li>
    </ul>
  </div>
);

const NavigationNonAuth = () => (
  <ul className='nav-wrap'>
    <li className='nav-item'>
      <Link to='/' className='navbar-logo' >
        <div>
          <img src={Logo} className='logo' alt='logotype' />
        </div>
      </Link>
    </li>
    <li className='nav-item'>
      <Link to={ROUTES.SIGN_IN}>
        <button
          className='nav-button'
          style={{
            backgroundColor: 'transparent',
            color: '#fff',
            padding: '13px 20px',
            border: '1px solid var(--primary)',
            transition: 'all 0.3s ease-out',
            fontSize: '18px',
            underline: 'none'
          }}>LOGGA IN</button>
      </Link>
    </li>
  </ul>
);

export default Navigation;