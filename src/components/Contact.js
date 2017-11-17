import React from 'react';
import PropTypes from 'prop-types';
import RedirectButton from './RedirectButton';

const Contact = (props) => {
  return (
    <section className="contact">
      <h1 className="contact__heading">{props.heading}</h1>
      <RedirectButton redirect={props.redirect} anchor={props.anchor} className={ "contact" } />
    </section>
  );
};

Contact.propTypes = {

};

export default Contact;
