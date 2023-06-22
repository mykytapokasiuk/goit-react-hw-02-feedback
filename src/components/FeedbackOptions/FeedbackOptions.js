import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttonColors = [css.good, css.neutral, css.bad];
  return (
    <div className={css.feedbackOptions}>
      <ul className={css.feedbackOptionslist}>
        {options.map((option, index) => (
          <li key={index} className={css.feedbackOptionsListItem}>
            <button
              type="button"
              className={buttonColors[index]}
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackOptions;
