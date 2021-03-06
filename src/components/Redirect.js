import React from 'react';
import PropTypes from 'prop-types';
import RedirectButton from './RedirectButton';

const Redirect = (props) => {
  return (
    <section className="redirect">
      <h1 className="redirect__heading">{props.heading}</h1>
      {
        props.external ?
          <a
            className="redirect__btn"
            href={props.redirect}
            target="_blank"
            rel='external nofollow'
            dangerouslySetInnerHTML={ {__html: props.anchor} }
          />
        :
          <RedirectButton
            redirect={props.redirect}
            anchor={props.anchor}
            className={'redirect'}
          />
      }
    </section>
  );
};

Redirect.propTypes = {
  heading: PropTypes.string.isRequired,
  redirect: PropTypes.string.isRequired,
  anchor: PropTypes.string.isRequired
};

export default Redirect;
