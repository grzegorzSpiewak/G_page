import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Blog from 'containers/Blog';
import BlogPost from 'containers/BlogPost';
import Contact from 'containers/Contact';
import ErrorPage from 'containers/Error';
import Experience from 'containers/Experience';
import HamburgerMenu from 'components/HamburgerMenu';
import Head from 'components/Head';
import Home from 'containers/Home';

const Layout = ({ location }) => {
  const currentKey = location.pathname.split('/')[ 1 ] || '/';
  const timeout = { enter: 600, exit: 0 };

  return (
    <div id="main-page">
      <Head page={currentKey} />
      <HamburgerMenu />
      <TransitionGroup component="main" id="page-wrap">
        <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
          <Switch key={currentKey} location={location}>
            <Route path="/" component={Home} exact />
            <Route path="/experience" component={Experience} exact />
            <Route path="/blog" component={Blog} exact />
            <Route path="/blog/:id" component={BlogPost} />
            <Route path="/contact" component={Contact} exact />
            <Route component={ErrorPage} />
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
