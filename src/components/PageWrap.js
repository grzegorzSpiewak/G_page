import React from 'react';
import PropTypes from 'prop-types';

const PageWrap = ({ children }) => {
  return (
    <main id="page-wrap">
      {children}
    </main>
  );
};

PageWrap.propTypes = {

};

export default PageWrap;
