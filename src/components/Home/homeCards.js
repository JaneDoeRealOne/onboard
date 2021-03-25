import React from 'react';
import Home from './home';
import './homeCards.css';
import ExternalHome from './externalHome';
import * as ROUTES from '../../constants/routes';

function HomeCards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <h1>Användbar information</h1>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <ExternalHome
              src='images/schoolsoft.jpg'
              text='Du kan kontrollera dina betyg genom att logga in på ditt Schoolsoft-konto.'
              label='Schoolsoft'
              path='https://www.schoolsoft.se/'
            />
            <ExternalHome
              src='images/slack.png'
              text='Fråga undervisningen för dina klassen Slack Channels och gå med i dem.'
              label='Slack'
              path='https://slack.com/intl/en-se/'
            />
            <ExternalHome
              src='images/classroom.jpg'
              text='I Google Classroom hittar du allt studiematerial, nyheter, meddelanden och all annan information.'
              label='Classroom'
              path='https://classroom.google.com'
            />
          </ul>
          <ul className='cards__items'>
            <ExternalHome
              src='images/meets.jpg'
              text='Google Meets är den plats där du kommer att ha fjärrmöten.'
              label='Google Meet'
              path='https://meet.google.com/'
            />
            <Home
              src='images/faq.png'
              text='Om du har några frågor, se vår FAQ-sida.'
              label='FAQ'
              path={ROUTES.FAQ}
            />
            <ExternalHome
              src='images/csn.png'
              text='Glöm inte att registrera dina poäng i tid till CSN.
               För andra frågor angående betalningar, kolla deras webbsida.'
              label='CSN'
              path='https://www.csn.se/'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HomeCards;