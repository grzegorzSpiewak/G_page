/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as fetchActions from 'modules/posts/actions';

const mapStateToProps = ({ blog }) => ({
  posts: blog.posts
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(fetchActions, dispatch);
};

class Home extends Component {
  static propTypes = {
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      }).isRequired
    ).isRequired
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div>This is Homepage{console.log(this.props.posts)}</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
