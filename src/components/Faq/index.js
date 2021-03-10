import React from 'react';

import { withAuthorization } from '../Session';

const FaqPage = () => (
  <div>
    <h1>FAQ</h1>
    <p>The FAQ Page is accessible by every signed in user.</p>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(FaqPage);