import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as fetchActions from 'modules/posts/actions';

const mapStateToProps = ({ blog }) => ({
  posts: blog.posts,
  isFetching: blog.isFetching,
  loadingStatus: blog.loadingStatus,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(fetchActions, dispatch);
};

class Home extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    loadingStatus: PropTypes.string.isRequired,
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.shape({

    }).isRequired
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        {
          this.props.loadingStatus === 'SUCCES' ?
          console.log(this.props)
          :
          <p>Nie ma tresci</p>
        }
        <div>This is Homepage</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
