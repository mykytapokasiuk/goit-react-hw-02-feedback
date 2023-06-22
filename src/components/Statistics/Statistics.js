import React from 'react';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.statistics}>
      <h2 className={css.statisticsTitle}>Statistics</h2>
      <ul className={css.statisticsList}>
        <li className={css.statisticsListItem}>
          <span className={css.good}>Good: {good}</span>
        </li>
        <li className={css.statisticsListItem}>
          <span className={css.neutral}>Neutral: {neutral}</span>
        </li>
        <li className={css.statisticsListItem}>
          <span className={css.bad}>Bad: {bad}</span>
        </li>
        <li className={css.statisticsListItem}>
          <span className={css.total}>Total: {total}</span>
        </li>
        <li className={css.statisticsListItem}>
          <span className={css.positivePercentage}>
            Positive Feedback: {positivePercentage}%
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Statistics;
