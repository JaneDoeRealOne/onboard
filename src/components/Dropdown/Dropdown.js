import React from 'react';
import Select from 'react-select';
import './Dropdown.css';
import '../../index.css';

// const optionsCity = [
//   { value: 'eskilstuna', label: 'Eskilstuna' },
//   { value: 'gävle', label: 'Gävle' },
//   { value: 'göteborg', label: 'Göteborg' },
//   { value: 'hudiksvall', label: 'Hudiksvall' },
//   { value: 'karlskrona', label: 'Karlskrona' },
//   { value: 'katrineholm', label: 'Katrineholm' },
//   { value: 'malmö', label: 'Malmö' },
//   { value: 'norrtälje', label: 'Norrtälje' },
//   { value: 'ronneby', label: 'Ronneby' },
//   { value: 'stockholm', label: 'Stockholm' },
// ];
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

  function customTheme(theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: 'lightGray',
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
      width: 500,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flexStart',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 1 : 0.5;
      const transition = 'opacity 300mms';

      return { ...provided, opacity, transition };
    }
  }

  return (
    <div className='dropdown-container'>
      <h1>Vänligen välj stad och utbildning nedan</h1>
      <div className='react-select-container'>
        {/* <Select
          styles={customStyles}
          options={optionsCity}
          theme={customTheme}
          placeholder='Välj din utbildningsort'
        /> */}
        <Select
          styles={customStyles}
          options={optionsEducation}
          theme={customTheme}
          placeholder='Välj din utbildning'
        />
      </div>
    </div>
  )
}

export default Dropdown;
