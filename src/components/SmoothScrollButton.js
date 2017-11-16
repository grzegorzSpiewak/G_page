import React from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

const SmoothScrollButton = (props) => {
  return (
    <Link className={ `${props.className}__btn` }
          to={ props.to }
          spy={true}
          smooth={'easeOutCubic'}
          duration={1000}>
          { props.anchor }
    </Link>
  );
}

SmoothScrollButton.propTypes = {
  className: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  anchor: PropTypes.string.isRequired
}

export default SmoothScrollButton;
