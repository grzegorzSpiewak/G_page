import React from 'react';
import PropTypes from 'prop-types';

const FrameWithText = (props) => {
  return (
    <section className={props.reverse === 'yes' ? 'frame frame__reverse' : 'frame'}>
      <div className="frame__slogan">
        <h1 className="frame__slogan__caption">{props.caption}</h1>
      </div>
      <div className="frame__info">
        <h1 className="frame__info__heading">{props.heading}</h1>
        <p className="frame__info__text">{props.text}</p>
      </div>
    </section>
  );
};

FrameWithText.propTypes = {
  caption: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  reverse: PropTypes.string.isRequired
};

export default FrameWithText;
