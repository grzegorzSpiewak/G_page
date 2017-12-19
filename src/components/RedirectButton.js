import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class RedirectButton extends Component {
  
  redirect(e) {
    e.preventDefault();
    this.props.history.push(this.props.redirect);
  }

  redirectFromPost(e) {
    e.preventDefault();
    this.props.reset();
    this.redirect(e);
  }

  render() {
    return this.props.reset ?
      <button
        onClick={this.redirectFromPost.bind(this)}
        className={`${this.props.className}__btn`}
        dangerouslySetInnerHTML={ {__html: this.props.anchor} }
      />
    :
      <button
        onClick={this.redirect.bind(this)}
        className={`${this.props.className}__btn`}
        dangerouslySetInnerHTML={ {__html: this.props.anchor} }
      />
  }
}

RedirectButton.propTypes = {
  redirect: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  anchor: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired
};

export default withRouter(RedirectButton);
