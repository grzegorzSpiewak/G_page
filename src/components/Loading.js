import React from 'react';

const Loading = () => {
  return (
    <section className="loading">
      <div className="loading__display">
        <h1 className="loading__display__header">loading</h1>
        <span className="loading__display__ball" />
        <span className="loading__display__ball" />
        <span className="loading__display__ball" />
      </div>
    </section>
  );
};

export default Loading;
