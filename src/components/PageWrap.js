import React from 'react';
import PropTypes from 'prop-types';

const PageWrap = ({ children }) => {
  return (
    <main id="page-wrap">
      {children}
    </main>
  );
};

export default PageWrap;
