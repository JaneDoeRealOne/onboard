import React from 'react';
import HomeCards from './homeCards';
import { withAuthorization } from '../Session';

const HomePage = () => (
  <>
  <HomeCards />
  </>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);