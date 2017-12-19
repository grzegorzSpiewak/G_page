import React from 'react';
import Helmet from 'react-helmet';
import SEO from 'data/SEO';

const Head = (props) => {
  const currentPage = props.page === '/' ? 'home' : props.page;
  const data = SEO[ currentPage ];

  return (
    <Helmet>
      <html lang="en" amp />
      <meta charSet="utf-8"/>
      <meta name="robots" content="noindex, nofollow" />
      <meta name="robots" content="noindex" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <title>{data.title}</title>
      <link rel="canonical" href={`${data.canonical}${currentPage}`} />
      <meta name="description" content={`${data.description}`} />
      <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700&amp;subset=cyrillic,cyrillic-ext,latin-ext,vietnamese" rel="stylesheet" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css" rel="stylesheet"  type='text/css' />
    </Helmet>
  );
};

export default Head;
