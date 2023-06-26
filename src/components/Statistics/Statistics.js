import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './Statistics.module.css';

const handleProps = props => {
  const { positivePercentage, ...others } = props;
  return Object.entries(others).map(([key, value]) => ({
    key: key,
    value: Number(value),
  }));
};

const Statistics = props => {
  const normalizedProps = handleProps(props);
  return (
    <div className={css.statistics}>
      <h2 className={css.statisticsTitle}>Statistics</h2>
      <ul className={css.statisticsList}>
        {normalizedProps.map(item => (
          <li key={nanoid()} className={css.statisticsListItem}>
            <span className={css.good}>
              {item.key}: {item.value}
            </span>
          </li>
        ))}
      </ul>
      <p className={css.statisticsPositiveFeedback}>
        Positive feedback: <span>{props.positivePercentage}%</span>
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
