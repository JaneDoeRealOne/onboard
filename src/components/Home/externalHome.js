import React from 'react';


function ExternalHome(props) {
  return (
    <>
      <li className='cards__item'>
        <a className='cards__item__link' to href={props.path} target='_blank' rel='noopener noreferrer'>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              src={props.src}
              alt='Home'
              className='cards__item__img'
              to='true'
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  )
}

export default ExternalHome;