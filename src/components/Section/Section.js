import React from 'react';
import css from './Section.module.css';
// import PropTypes from 'prop-types'

const Section = ({ title, children }) => {
  return (
    <section className={css.statisticsSection}>
      <div className={css.container}>
        <h1 className={css.statisticsTitle}>{title}</h1>
        {children}
      </div>
    </section>
  );
};

// Section.propTypes = {}

export default Section;
