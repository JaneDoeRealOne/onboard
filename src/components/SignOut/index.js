import React from 'react';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
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
);


export default withFirebase(SignOutButton);