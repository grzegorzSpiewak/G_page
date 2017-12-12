/* eslint-disable */
import React from 'react';
import LazyImg from './LazyImg';
import RedirectButton from './RedirectButton';

const Post = (props) => {
  return (
    <section className="blog">
      <article className="blog__post">
        <h1 className="blog__post__title">{props.article.title}</h1>
        <p className="blog__post__lead">{props.article.lead.split('_')}</p>
        {
          props.images.imageLoaded === 'SUCCES' ?
          <LazyImg
            className={'blog__post'}
            src={props.images.images.fields.file.url}
            alt={'test'}
          />
          :
          null
        }
        <h2 className="blog__post__subtitle">{props.article.firstParagraphTitle}</h2>
        <p className="blog__post__paragraph">{props.article.firstParagraph}</p>
        <h2 className="blog__post__subtitle">{props.article.secondParagraphTitle}</h2>
        <p className="blog__post__paragraph">{props.article.secondParagraph}</p>
        <h2 className="blog__post__subtitle">{props.article.thirdParagraphTitle}</h2>
        <p className="blog__post__paragraph">{props.article.thirdParagraph}</p>
        <div className="blog__post__info">
          <h2 className="blog__post__info__date">Posted on: {props.article.date.split('T')[0]}</h2>
          <h2 className="blog__post__info__author">{props.article.author.sys.id}</h2>
        </div>
      </article>
      <RedirectButton
        redirect={props.redirect.redirect}
        anchor={props.redirect.anchor}
        className={ "blog" }
        reset={props.reset}
      />
    </section>
  );
};

export default Post;
