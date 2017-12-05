/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import FlipCard from './FlipCard';

const renderItems = (items) => {
  return items.map(item => (
    <FlipCard {...item} key={item.id} />
  ));
};

const Technologies = (props) => {
  return (
    <section className="technologies" name="technology">
      <h1 className="technologies__heading">{props.heading}</h1>
      <div className="technologies__wrap">
        {renderItems(props.items)}
      </div>
    </section>
  );
};

Technologies.propTypes = {
  heading: PropTypes.string.isRequired
};

export default Technologies;
