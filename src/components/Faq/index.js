import React, { useState } from 'react';
import { withAuthorization } from '../Session';
import { FaqData } from './FaqData';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './Faq.css';
import '../../index.css';

const FaqPage = () => {
  const [clicked, setClicked] = useState(false)

  const toggle = index => {
    if (clicked === index) {
      return setClicked(null)
    }
    setClicked(index)
  }

  return (
    <IconContext.Provider value={{ color: '#FF8C00', size: '25px' }}>
      <div className='accordion-wrapper'>
        <div className='accordion-container'>
          {FaqData.map((item, index) => {
            return (
              <>
                <div className='wrap' onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </div>
                {clicked === index ? (
                  <div className='dropdown'>
                    <p>{item.answer}</p>
                  </div>
                ) : null}
              </>
            );
          })}
        </div>
      </div>
    </IconContext.Provider>
  );
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(FaqPage);