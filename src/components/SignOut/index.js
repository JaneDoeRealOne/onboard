import React from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import './signout.css';


const SignOutButton = ({ firebase }) => (
  <>
    <ul className='logout-wrapper'>
      <li>
        <Link
          className='logout'
          to={ROUTES.LANDING}
        >
          <button
            className='logout-button'
            type="button"
            onClick={firebase.doSignOut}
          >
            Logga ut
          </button>
        </Link>
      </li>
    </ul>
  </>
);





export default withFirebase(SignOutButton);