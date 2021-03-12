import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import styled from "styled-components";
import Logo from '../assets/KYH-logo.png';

const UL = styled.ul`
  padding: 0;
  margin: 0;
  text-align: center;
  display: flex;
  vertical-align: top;
  justify-content: space-evenly;
  align-items: left;
  font-family: "Roboto", sans-serif;
  font-size: 1.4rem;
`;

const LI = styled.li`
  position: relative;
  top: 0;
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  width: 100%;
  background: black;
`;

const NavBar = styled.div`
  height: 25px;
  a {
    font-family: "Roboto", sans-serif;
    color: #fff;
    padding: 10px;
    box-sizing: border-box;
    text-decoration: none;
    height: 35px;
  }

  a:hover {
    color: #fff;
    font-size: 17px;

  }
`;

const Navigation = () => (
  <NavBar>
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </NavBar>
);
  

const NavigationAuth = () => (
  <UL>
    <LI>
      <Link to={ROUTES.HOME}>Hem</Link>
    </LI>
    <LI>
      <Link to={ROUTES.FAQ}>FAQ</Link>
    </LI>
    <LI>
      <Link to={ROUTES.NEWS}>Nyheter</Link>
    </LI>
    <LI>
      <SignOutButton />
    </LI>
  </UL>
);

const NavigationNonAuth = () => (
  <UL>
    <LI>
    <Link to='/' className='navbar-logo' >
            <div>
              <img src={Logo} className='logo' alt='logotype'  width='35%'/>
            </div>
    </Link>
    </LI>
    <LI>
      <Link to={ROUTES.SIGN_IN}>Logga In</Link>
    </LI>
    </UL>
  );

export default Navigation;