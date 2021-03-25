import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignInPage from '../SignIn';
import HomePage from '../Home';
import NewsPage from '../News';
import FaqPage from '../Faq';
import Education from '../Educations/index';
// import Onboard from '../Onboard/index';
import Footer from '../Footer/index';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import '../../index.css';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.EDUCATION} component={Education} />
      {/* <Route path={ROUTES.ONBOARDING} component={Onboard} /> */}
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.NEWS} component={NewsPage} />
      <Route path={ROUTES.FAQ} component={FaqPage} />
      <Footer />
    </div>
  </Router>

);

export default withAuthentication(App);

