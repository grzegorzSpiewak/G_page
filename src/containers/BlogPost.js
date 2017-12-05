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
import Content from 'data/BlogPost';

const mapStateToProps = ({ blogPost, images }) => ({
  article: blogPost.post,
  loadingStatus: blogPost.loadingStatus,
  images
});

const mapDispatchToProps = (dispatch) => {
  return {
    content: bindActionCreators(fetchActions, dispatch),
    assets: bindActionCreators(fetchAssets, dispatch)
  }
};

class BlogPost extends Component {
  static propTypes = {
    loadingStatus: PropTypes.string.isRequired,
  }

  componentWillMount() {
    const contentId = this.props.match.params.id;
    const assetsId = this.props.location.state.images.sys.id;

    this.props.content.fetchById(contentId);
    this.props.assets.fetchAssets(assetsId);
  }

  render() {
    return (
      <PageWrap>
        {
          this.props.loadingStatus === 'SUCCES' ?
          <Post
            article={this.props.article.fields}
            images={this.props.images}
            redirect={Content.contact}
          />
          :
          <Loading />
        }
      </PageWrap>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);
