import React from 'react';
import Select from 'react-select';
import './Dropdown.css';
import '../../index.css';
import { useState, useEffect } from 'react';
import '../Button/Button.css';
// import { faBlackberry } from '@fortawesome/free-brands-svg-icons';

const optionsCity = [
  { value: 'eskilstuna', label: 'Eskilstuna' },
  { value: 'gävle', label: 'Gävle' },
  { value: 'göteborg', label: 'Göteborg' },
  { value: 'hudiksvall', label: 'Hudiksvall' },
  { value: 'karlskrona', label: 'Karlskrona' },
  { value: 'katrineholm', label: 'Katrineholm' },
  { value: 'malmö', label: 'Malmö' },
  { value: 'norrtälje', label: 'Norrtälje' },
  { value: 'ronneby', label: 'Ronneby' },
  { value: 'stockholm', label: 'Stockholm' },
];
const optionsEducation = [
  { value: 'frontend', label: 'Front-end Developer' },
  { value: 'produktionsledare', label: 'Produktionsledare -Anläggning' },
  { value: 'fastighetsingenjör', label: 'Fastighetsingenjör' },
  { value: 'ekonomi', label: 'Affärsutveckling Digital handel -Logistik' },
  { value: 'mätningsingenjör', label: 'Mätningsingenjör -Bygg & anläggning' },
  { value: 'byggproduktionsledare', label: 'Byggproduktionsledare -Nyproduktion' },
  { value: 'energispecialist', label: 'Energispecialist -Hållbara Byggnader' },
  { value: 'dotnet', label: '.NET Developer' },
];

function Dropdown() {
  const [edu, setEdu] = useState(null);
  const [loc, setLoc] = useState(null);

  useEffect(() => {
    if (edu && loc) {
      localStorage.setItem('eduloc', JSON.stringify({ edu: { ...edu }, loc: { ...loc } }))
      // add the redirect
    }
  }, [edu, loc]);
  // todo: create a mew copo
  // add a route for it, don't put it in navigation
  // dont froge tthe redirect
  // createa  new useeffect in the new compo which READS localstorage and puts it in state
  // render accordingly. :)

  function customTheme(theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: '#e2e1e197',
        primary: '#fea562c9',
      },
    };
  }
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      display: 'flex',
      justifyContent: 'flexStart',
      color: state.isSelected ? 'red' : 'black',
      padding: 20,
    }),
    control: () => ({
      width: 590,
      padding: '5px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flexStart',
      backgroundColor: '#e2e1e197'
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 1 : 0.5;
      const transition = 'opacity 300mms';

      return { ...provided, opacity, transition };
    }
  }


  return (
    <div className='dropdown-wrapper'>
      <section className='dropdown-section'>
        <h1>Vilken utbildning är du antagen till?</h1>
        <div className='react-select-section'>
          {/* <Select
          styles={customStyles}
          options={optionsCity}
          theme={customTheme}
          placeholder='Välj din utbildningsort'
        /> */}
          <Select
            value={edu}
            styles={customStyles}
            options={optionsEducation}
            theme={customTheme}
            placeholder='Välj din utbildning'
            onChange={selectedOption => setEdu(selectedOption)}
          /><br />
          <Select
            value={loc}
            styles={customStyles}
            options={optionsCity}
            theme={customTheme}
            placeholder='Välj din plats'
            onChange={selectedOption => setLoc(selectedOption)}
          />
        </div>
        <Select
          styles={customStyles}
          options={optionsEducation}
          theme={customTheme}
          placeholder='Välj din utbildning'
        />

        <button
          style={{
            // width: '100%',
            height: '3remx',
            fontSize: '1.2rem',
            marginTop: '30px',
            display: 'flex',
            justifyContent: 'center',
            cursor: 'pointer',
            backgroundColor: '#f97918c9',
            color: '#fff',
            border: 'none',
            borderRadius: '0.3rem',
            boxShadow: '0 6px 20px #93939354'
          }}
          className='btn--outline'
          id='emoji'>{'\u2728'} KLAR {'\u2728'}
        </button>
      </section>
    </div>
  )
}

export default Dropdown;
