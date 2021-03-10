import React from 'react';

import { withAuthorization } from '../Session';

const NewsPage = () => (
  <div>
    <h1>Nyheter</h1>
    <p>The News Page is accessible by every signed in user.</p>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(NewsPage);