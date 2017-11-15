import React from 'react';
import PropTypes from 'prop-types';

const About = (props) => {
  return (
    <section className="about">
      <div className="about__caption">
        <h1 className="about__caption__text">{props.caption}</h1>
      </div>
      <div className="about__info">
        <h1 className="about__info__heading">{props.heading}</h1>
        <p className="about__info__text">{props.text}</p>
      </div>
    </section>
  );
};

About.propTypes = {
  caption: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default About;
