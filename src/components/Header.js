import React from 'react';
import PropTypes from 'prop-types';
import SmoothScrollButton from './SmoothScrollButton';

const Header = (props) => {
  return (
    <section className={`header__${props.background}`} role="img" aria-label="cubic wallpeaper" name="header">
      <div className="header__overlay">
        <div className="header__overlay__centered">
          <h1 className="header__heading" dangerouslySetInnerHTML={ { __html: props.heading } } />
          <h2 className="header__caption" dangerouslySetInnerHTML={ { __html: props.caption } } />
          {
            props.scroll ?
              <SmoothScrollButton
                className={'header'}
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
  scroll: PropTypes.shape({
    to: PropTypes.string.isRequired,
    anchor: PropTypes.string.isRequired
  }).isRequired
};

export default Header;
