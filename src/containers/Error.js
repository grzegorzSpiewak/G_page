import React, { Component } from 'react';
import Header from 'components/Header';
import FrameWithText from 'components/FrameWithText';
import Services from 'components/Services';
import PageWrap from 'components/PageWrap';
import ImageWithText from 'components/ImageWithText';
import Redirect from 'components/Redirect';
import Content from 'data/Error';

class Error extends Component {

  render() {
    return (
      <PageWrap>
        <Redirect {...Content.contact} />
      </PageWrap>
    );
  }
}

export default Error;
