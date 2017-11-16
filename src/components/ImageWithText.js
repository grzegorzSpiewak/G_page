import React from 'react';
import PropTypes from 'prop-types';

const ImageWithText = (props) => {
  return (
    <section className="frame">
      <div className="frame__image">
        <div className="frame__image__ovarlay">
          <img src="./images/home.jpg" alt="image" className="frame__image__ovarlay__image" />
        </div>
      </div>
      <div className="frame__info">
        <h1 className="frame__info__heading">Naglowek</h1>
        <p className="frame__info__text">tekst</p>
      </div>
    </section>
  );
};


export default ImageWithText;
