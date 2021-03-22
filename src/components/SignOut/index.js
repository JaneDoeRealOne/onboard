import React from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';


const SignOutButton = ({ firebase }) => (
  <>
    <ul>
      <li>
        <Link
          to={ROUTES.LANDING}>
          <button
            type="button"
            onClick={firebase.doSignOut}
            style={{
              backgroundColor: 'transparent',
              // width: '70px',
              color: '#fff',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '13px 20px',
              border: '1px solid var(--primary)',
              transition: 'all 0.3s ease-out',
              fontSize: '18px',
              marginRight: '40px',
              textTransform: 'upperCase',
              cursor: 'pointer'
            }}>
            Logga ut
          </button>
        </Link>
      </li>
    </ul>
  </>
);





export default withFirebase(SignOutButton);