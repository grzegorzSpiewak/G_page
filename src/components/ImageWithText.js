import React from 'react';
import PropTypes from 'prop-types';
import RedirectButton from './RedirectButton';
import LazyImg from './LazyImg';
import business from 'styles/images/business.jpg';
import team from 'styles/images/team.jpg';
import placeholder from 'styles/images/placeholder.jpg';

const images = {
  business,
  team
};

const ImageWithText = (props) => {
  return (
    <section className={props.reverse === 'yes' ? 'frame frame__reverse' : 'frame'}>
      <div className="frame__image">
        <div className="frame__image__ovarlay">
          <LazyImg
            src={images[ props.imageName ]}
            alt={props.alt}
            className={'frame__image__ovarlay'}
            placeholder={placeholder}
          />
          <RedirectButton
            redirect={props.redirect}
            anchor={props.anchor}
            className={'frame__image__ovarlay'}
          />
        </div>
      </div>
      <div className="frame__info">
        <h1 className="frame__info__heading">{props.heading}</h1>
        <p className="frame__info__text" dangerouslySetInnerHTML={ {__html: props.text} } />
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
  reverse: PropTypes.string.isRequired
};

export default ImageWithText;
