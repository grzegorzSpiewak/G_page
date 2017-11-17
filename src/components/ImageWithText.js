import React from 'react';
import LazyLoad from 'react-lazy-load';
import PropTypes from 'prop-types';
import business from 'styles/images/business.jpg';
import RedirectButton from './RedirectButton';

const images = {
  business
};

const ImageWithText = (props) => {
  return (
    <section className="frame">
      <div className="frame__image">
        <div className="frame__image__ovarlay">
          <LazyLoad offsetVertical={300}>
            <img src={ images[ props.imageName ] } alt={`${props.alt}`} className="frame__image__ovarlay__pic" />
          </LazyLoad>
          <RedirectButton redirect={ props.redirect } anchor={ props.anchor } className={ "frame__image__ovarlay" }/>
        </div>
      </div>
      <div className="frame__info">
        <h1 className="frame__info__heading">{props.heading}</h1>
        <p className="frame__info__text">{props.text}</p>
      </div>
    </section>
  );
};

ImageWithText.propTypes = {
  imageName: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  anchor: PropTypes.string.isRequired,
  redirect: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ImageWithText;
