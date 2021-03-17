import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import { FirebaseContext } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import './signin.css';
import DarkLogo from '../assets/KYH-dark-logo.png';
// import Education from '../Educations/index';


const SignInPage = () => (
  <>
    {/* <SignInForm /> */}
    <FirebaseContext.Consumer>
      {firebase => <SignInForm firebase={firebase} />}
    </FirebaseContext.Consumer>
    {/* <Dropdown />
    <SignInGoogle /> */}
  </>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.EDUCATION_SELECT);
        // this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;
    // const { error } = this.state;
    const isInvalid = password === '' || email === '';

    return (
      <section className='login'>
        <form
          className='login--container'
          onSubmit={this.onSubmit}>
          <div className='logo--container'>
            <img
              src={DarkLogo}
              className='form--logo'
              alt='logotype'
            />
          </div>
          <h1 className='form--h1'>Logga in</h1>
          <label>Email</label>
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Ange din email"
          />
          <label>Lösenord</label>
          <input
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Ange ditt lösenord"
          />
          {/* <br />
          <Dropdown /> */}
          <div className='btn--section'>
            <button
              disabled={isInvalid}
              type="submit"
              className='form--btn'>
              Logga in
            </button>
            {error && <p>{error.message}</p>}
          </div>
          {/* <div className='btn--section'>
            <SignInGoogle disabled={isInvalid} type="submit" className='form--btn' />
          </div> */}
        </form>
      </section>
    );
  }
}

class SignInGoogleBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = event => {
    this.props.firebase
      .doSignInWithGoogle()
      .then(socialAuthUser => {
        // Create a user in your Firebase Realtime Database too
        this.props.firebase
          .user(socialAuthUser.user.uid)
          .set({
            username: socialAuthUser.user.displayName,
            email: socialAuthUser.user.email,
            roles: [],
          })
          .then(() => {
            this.setState({ error: null });
            this.props.history.push(ROUTES.EDUCATION_SELECT);
            // this.props.history.push(ROUTES.HOME);
          })
          .catch(error => {
            this.setState({ error });
          });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const { error } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <button type="submit" class="button-google">
          <img src='icons/google.svg' alt='google login' className='googleIcon'></img>
          <span className='googleButtonText'>Logga in med Google</span>
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

const SignInGoogle = compose(
  withRouter,
  withFirebase,
)(SignInGoogleBase);

export default SignInPage;

export { SignInForm, SignInGoogle };
