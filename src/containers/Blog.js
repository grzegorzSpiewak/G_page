/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as fetchActions from 'modules/fetchPosts/actions';
import PageWrap from 'components/PageWrap';
import Header from 'components/Header';
import BlogTeaser from 'components/BlogTeaser';
import Loading from 'components/Loading';
import Footer from 'components/Footer';
import Content from 'data/Blog';

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

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <PageWrap>
        {
          this.props.loadingStatus === 'SUCCES' ?
            <div>
              <Header {...Content.header} />
              <BlogTeaser {...this.props.posts} />
            </div>
          :
            <Loading />
        }
        <Footer />
      </PageWrap>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
