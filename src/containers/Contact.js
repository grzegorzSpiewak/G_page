import React, { Component } from 'react';
import Header from 'components/Header';
import ContactForm from 'components/ContactForm';
import FrameWithText from 'components/FrameWithText';
import PageWrap from 'components/PageWrap';
import Content from 'data/Contact';

class Contact extends Component {

  render() {
    return (
      <PageWrap>
        <Header {...Content.header} />
        <FrameWithText {...Content.introduction} />
        <ContactForm {...Content.form} />
      </PageWrap>
    );
  }
}

export default Contact;
