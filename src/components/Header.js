import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <section className={`header__${props.background}`}>
      <div className="header__overlay">
        <div className="header__overlay__centered">
          <h1 className="header__heading" >{props.heading}</h1>
          <h2 className="header__caption">{props.caption}</h2>
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
