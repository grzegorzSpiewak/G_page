import React, { Component } from 'react';
import Header from 'components/Header';
import FrameWithText from 'components/FrameWithText';
import Technologies from 'components/Technologies';
import ImageWithText from 'components/ImageWithText';
import Redirect from 'components/Redirect';
import PageWrap from 'components/PageWrap';
import Content from 'data/Experience';

class Experience extends Component {

  render() {
    return (
      <PageWrap>
        <Header {...Content.header} />
        <FrameWithText {...Content.about} />
        <Technologies {...Content.technologies} />
        <Redirect {...Content.contact} />
        <ImageWithText {...Content.marketing} />
      </PageWrap>
    );
  }
}

export default Experience;
