import React from 'react';
import './../index.css';

const GifGridItem = ( { url , title } ) => {

  return (
    <div className='card__item animate__animated animate__fadeIn'>
      <p>{ title }</p>
      <img src={ url } alt={ title }/>
    </div>
  )
} 

export default GifGridItem;