import React from 'react';
import PropTypes from 'prop-types';
import RedirectButton from './RedirectButton';
import SmoothScrollButton from './SmoothScrollButton';

const Header = (props) => {
  return (
    <section className={`header__${props.background}`}>
      <div className="header__overlay">
        <div className="header__overlay__centered">
          <h1 className="header__heading" >{props.heading}</h1>
          <h2 className="header__caption">{props.caption}</h2>
          {
            props.scroll ?
            <SmoothScrollButton
              className={ "header__scroll"}
              to={props.scroll.to}
              anchor={props.scroll.anchor}
            />
            :
            null
          }
        </div>
      </div>
    </section>
  );
};

Header.propTypes = {
  background: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default Header;
