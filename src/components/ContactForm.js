/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FieldSet from './FieldSet';

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      subject: '',
      massage: '',
      disabled: true,
      massageSend: false
    };
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  allowToSubmit() {
    const email = this.state.email;
    const name = this.state.email;
    const subject = this.state.subject;

    if (email.length > 0 && name.length > 0 && subject.length > 0 ) {
      this.setState({
        disabled: false,
      })
    }
  }

  handleInputs(e) {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.allowToSubmit();
    this.setState(newState);
  }

  renderInputs(inputs) {
    return inputs.map((input, i) =>
      <FieldSet
        key={input.id}
        class={input.class}
        type={input.type}
        name={input.name}
        label={input.label}
        icon={input.icon}
        placeholder={input.placeholder}
        onChange={this.handleInputs.bind(this)}
      />
    )
  }

  render() {
    return (
      <section className="contact" name="contact">
        <h1 className="contact__heading">{this.props.heading}</h1>
        {
          this.state.massageSend ?
          <div>succes</div>
          :
          <form className="contact__form" onSubmit={this.onSubmit.bind(this)}>
            <div className="contact__form__wrap">
              <div className="contact__form__wrap__field">
                {
                  this.renderInputs(this.props.inputs.onLeft)
                }
              </div>
              <div className="contact__form__wrap__field">
                {
                  this.renderInputs(this.props.inputs.onRight)
                }
              </div>
            </div>
            <input
              disabled={this.state.disabled}
              className={
              this.state.disabled ?
              'contact__form__submit btn__disabled'
              :
              'contact__form__submit'
              }
              type="submit"
              value={`${this.props.submit}`}
            />
          </form>
        }
      </section>
    );
  }
}

export default ContactForm;
