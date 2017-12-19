import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bootstrap from 'styles/images/icons/bootstrap.png';
import github from 'styles/images/icons/github.png';
import js from 'styles/images/icons/js.png';
import node from 'styles/images/icons/node.png';
import jquery from 'styles/images/icons/jquery.png';
import react from 'styles/images/icons/react.png';
import redux from 'styles/images/icons/redux.png';
import sass from 'styles/images/icons/sass.png';
import webpack from 'styles/images/icons/webpack.png';

const icons = {
  bootstrap,
  github,
  js,
  node,
  jquery,
  react,
  redux,
  sass,
  webpack
};

class FlipCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  mouseEnter() {
    this.setState({
      hover: !this.state.hover
    });
  }

  mouseExit() {
    this.setState({
      hover: false
    });
  }

  render() {
    const flipped = this.state.hover ? 'flipcard__back__flip' : 'flipcard__front__flip';

    return (
      <section
        className="flipcard"
        onMouseEnter={this.mouseEnter.bind(this)}
        onMouseLeave={this.mouseExit.bind(this)}
      >
        <div className={`flipcard__front ${flipped}`}>
          <h1 className="flipcard__front__heading">{this.props.heading}</h1>
          <img src={icons[ this.props.icon ]} alt={this.props.alt} className="flipcard__front__pic" />
        </div>
        <div className={`flipcard__back ${flipped}`}>
          <h1 className="flipcard__back__heading">{this.props.heading}</h1>
          <p className="flipcard__back__text" dangerouslySetInnerHTML={ {__html: this.props.text} } />
        </div>
      </section>
    );
  }
}

FlipCard.propTypes = {
  heading: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default FlipCard;
