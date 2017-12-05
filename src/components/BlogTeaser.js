/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const renderTeasers = (posts) => {
  return posts.map(post =>
    <div className="teaser" key={post.sys.id}>
      <div className="teaser__date">{post.sys.createdAt.split('T')[ 0 ]}</div>
      <h1 className="teaser__heading">{post.fields.title}</h1>
      <p className="teaser__lead">{post.fields.lead.split('_')}</p>
      <Link
        className="teaser__button"
        to={ { pathname: `/blog/${post.sys.id}`, state: {images: post.fields.images} } }>
        more
      </Link>
    </div>
  );
};

const BlogTeaser = (props) => {
  const posts = Object.keys(props).map(key => props[ key ]);
  return (
    <section className="teaser__wrap" name="teaser">
      { renderTeasers(posts) }
    </section>
  );
};

export default BlogTeaser;
