import React, { Component } from 'react';
import Redirect from 'components/Redirect';
import Footer from 'components/Footer';
import PageWrap from 'components/PageWrap';
import Content from 'data/Error';

class Error extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <PageWrap>
        <Redirect {...Content.contact} />
        <Footer />
      </PageWrap>
    );
  }
}

export default Error;
