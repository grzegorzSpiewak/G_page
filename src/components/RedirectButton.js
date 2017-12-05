import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class RedirectButton extends Component {
  handleClick(e) {
    e.preventDefault();
    this.props.history.push(this.props.redirect);
  }

  render() {
    return (
      <button
        onClick={this.handleClick.bind(this)}
        className={`${this.props.className}__btn`}
      >
        {this.props.anchor}
      </button>
    );
  }
}

RedirectButton.propTypes = {
  redirect: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  anchor: PropTypes.string.isRequired,
  redirect: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired
};

export default withRouter(RedirectButton);
