import React from 'react';
import '../Button/Button.css';
import './landing.css';
import '../../index.css';

function Landing() {
  return (
    <div className='hero-container'>
      <h1 className='hero-heading'>Välkommen!</h1>
      <h2>Du har blivit antagen till en utbildning på yrkeshögskolan KYH</h2>
      <div className='hero-btns'>
        <a href='https://www.youtube.com/watch?v=-NlyjnM0FwU&t=13s' target="_blank" rel="noopener noreferrer" >
          <button
            className='btns movie--btn'
            buttonstyle='btn--outline'
            buttonsize='btn--large'
          >
            SE VIDEO <i className='far fa-play-circle' />
          </button>
        </a>
      </div>
    </div>

  );
}

export default Landing;