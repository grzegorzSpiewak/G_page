import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Helmet from 'react-helmet';
// Layout Components
import HamburgerMenu from 'components/HamburgerMenu';
import Home from '../../containers/Home';
import Blog from '../../containers/Blog';
import About from '../../containers/About';
import Experience from '../../containers/Experience';
import Contact from '../../containers/Contact';

const Layout = ({ location }) => {
  const currentKey = location.pathname.split('/')[ 1 ] || '/';
  const timeout = { enter: 1000, exit: 0 };

  return (
    <div id="main-page">
      <Helmet />
      <HamburgerMenu />
      <TransitionGroup component="main" id="page-wrap">
        <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
          <Switch location={location}>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact />
            <Route path="/experience" component={Experience} exact />
            <Route path="/Blog" component={Blog} exact />
            <Route path="/Contact" component={Contact} />
            <Route component={Home} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default withRouter(Layout);
