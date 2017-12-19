/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as fetchActions from 'modules/fetchById/actions';
import * as fetchAssets from 'modules/fetchAssets/actions';
import PageWrap from 'components/PageWrap';
import Loading from 'components/Loading';
import Post from 'components/Post';
import Footer from 'components/Footer';
import Content from 'data/BlogPost';

const mapStateToProps = ({ blogPost, images }) => ({
  article: blogPost.post,
  postLoaded: blogPost.postLoaded,
  images
});

const mapDispatchToProps = (dispatch) => ({
  content: bindActionCreators(fetchActions, dispatch),
  assets: bindActionCreators(fetchAssets, dispatch)
});

class BlogPost extends Component {
  static propTypes = {
    postLoaded: PropTypes.string.isRequired,
  }

  componentWillMount() {
    const contentId = this.props.match.params.id;
    const assetsId = this.props.location.state.images.sys.id;

    this.props.content.fetchById(contentId);
    this.props.assets.fetchAssets(assetsId);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <PageWrap>
        {
          this.props.postLoaded === 'SUCCES' ?
          <Post
            article={this.props.article.fields}
            images={this.props.images}
            reset={this.props.content.loadInitialState}
            redirect={Content.contact}
          />
          :
          <Loading />
        }
        <Footer />
      </PageWrap>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);
