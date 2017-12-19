import React, { Component } from 'react';
import Header from 'components/Header';
import FrameWithText from 'components/FrameWithText';
import Services from 'components/Services';
import PageWrap from 'components/PageWrap';
import ImageWithText from 'components/ImageWithText';
import Redirect from 'components/Redirect';
import Footer from 'components/Footer';
import Content from 'data/Homepage';

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <PageWrap>
        <Header {...Content.header} />
        <FrameWithText {...Content.introduction} />
        <Services {...Content.services} />
        <ImageWithText {...Content.about} />
        <Redirect {...Content.contact} />
        <Footer />
      </PageWrap>
    );
  }
}

export default Home;
