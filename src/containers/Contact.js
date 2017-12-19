import React, { Component } from 'react';
import Header from 'components/Header';
import ContactForm from 'components/ContactForm';
import PageWrap from 'components/PageWrap';
import Footer from 'components/Footer';
import Content from 'data/Contact';

class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <PageWrap>
        <Header {...Content.header} />
        <ContactForm {...Content.form} />
        <Footer />
      </PageWrap>
    );
  }
}

export default Contact;
