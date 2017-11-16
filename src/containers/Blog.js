import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as fetchActions from 'modules/posts/actions';
import PageWrap from 'components/PageWrap';

const mapStateToProps = ({ blog }) => ({
  posts: blog.posts,
  isFetching: blog.isFetching,
  loadingStatus: blog.loadingStatus
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(fetchActions, dispatch);
};

class Blog extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    loadingStatus: PropTypes.string.isRequired,
    fetchPosts: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <PageWrap>
        <div className="test">This is my blog{console.log(this.props)}</div>
      </PageWrap>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
