import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Helmet from 'react-helmet';
import asyncRoute from 'utils/asyncComponent';
import HamburgerMenu from 'components/HamburgerMenu';

// Layout Components
const Home = asyncRoute(() => import('../../containers/Home'));
const Blog = asyncRoute(() => import('../../containers/Blog'));
const Experience = asyncRoute(() => import('../../containers/Experience'));
const Contact = asyncRoute(() => import('../../containers/Contact'));

// Force import during development to enable Hot-Module Replacement
if (process.env.NODE_ENV === 'development') {
  require('../../containers/Home'); // eslint-disable-line global-require
  require('../../containers/Blog'); // eslint-disable-line global-require
  require('../../containers/Experience'); // eslint-disable-line global-require
  require('../../containers/Contact'); // eslint-disable-line global-require
}

const Layout = ({ location }) => {
  const currentKey = location.pathname.split('/')[ 1 ] || '/';
  const timeout = { enter: 2000, exit: 0 };

  return (
    <div id="main-page">
      <Helmet />
      <HamburgerMenu />
      <TransitionGroup>
        <CSSTransition key={currentKey} timeout={timeout} classNames="slide" appear>
          <Switch location={location}>
            <Route path="/" component={Home} exact />
            <Route path="/experience" component={Experience} exact />
            <Route path="/blog" component={Blog} exact />
            <Route path="/contact" component={Contact} />
            <Route component={Home} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

Layout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(Layout);
