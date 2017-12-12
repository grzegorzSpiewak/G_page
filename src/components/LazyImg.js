import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Lazy } from 'react-lazy';

class LazyImg extends Component {

  render() {
    return (
      <Lazy component="div" ltIE9>
        <img src={this.props.src} alt={`${this.props.alt}`} className={`${this.props.className}__pic`} />
      </Lazy>
    )
  }
}

LazyImg.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export default LazyImg;
