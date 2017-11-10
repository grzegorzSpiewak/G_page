import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Helmet from 'react-helmet';
// Routes
import asyncRoute from 'utils/asyncComponent';

const Home = asyncRoute(() => import('../../containers/Home'));
const Blog = asyncRoute(() => import('../../containers/Blog'));
const Experience = asyncRoute(() => import('../../containers/Experience'));
const Contact = asyncRoute(() => import('../../containers/Contact'));
const About = asyncRoute(() => import('../../containers/About'));

// Force import during development to enable Hot-Module Replacement
if (process.env.NODE_ENV === 'development') {
  require('../../containers/Home'); // eslint-disable-line global-require
  require('../../containers/Blog'); // eslint-disable-line global-require
  require('../../containers/Experience'); // eslint-disable-line global-require
  require('../../containers/Contact'); // eslint-disable-line global-require
  require('../../containers/About'); // eslint-disable-line global-require
}

const Layout = () => (
  <div>
    <Helmet titleTemplate="%s - G corp" defaultTitle="G corp" />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
      <Route path="/Experience" component={Experience} exact />
      <Route path="/Blog" component={Blog} exact />
      <Route path="/Contact" component={Contact} />
      <Route component={Blog} />
    </Switch>
  </div>
);

export default Layout;
