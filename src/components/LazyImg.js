import React from 'react';
import LazyLoad from 'react-lazy-load';
import PropTypes from 'prop-types';

const LazyImg = (props) => {
  return (
    <LazyLoad offsetVertical={750} height={'100%'}>
      <img src={props.src} alt={`${props.alt}`} className={`${props.className}__pic`} />
    </LazyLoad>
  );
};

LazyImg.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export default LazyImg;
