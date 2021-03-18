import React from 'react';
// import { Button } from '../Button/Button';
import '../Button/Button.css';
import './landing.css';
import '../../index.css';

function Landing() {
  return (
    <div className='hero-container'>
      {/* <div className='text-container'> */}
      <h1 className='hero-heading'>Välkommen!</h1>
      <h2>Du har blivit antagen till en utbildning på yrkeshögskolan KYH</h2>
      {/* </div> */}
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonstyle='btn--outline'
          buttonsize='btn--large'
        >
          KOM IGÅNG
        </Button> */}
        <a href='https://www.youtube.com/embed/euiGHk8dIPI' target="_blank" rel="noopener noreferrer" >
          <button
            className='btns movie--btn'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            SE VIDEO <i className='far fa-play-circle' />
          </button>
        </a>
      </div>
    </div>

  );
}

export default Landing;