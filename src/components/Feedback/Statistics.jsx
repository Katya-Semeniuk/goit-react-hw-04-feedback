import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className="list">
    <li className="item">Good: {good}</li>
    <li className="item">Neutral: {neutral}</li>
    <li className="item">Bad: {bad}</li>
    <li className="item">Total: {total}</li>
    <li className="item">Positive feedback: {positivePercentage} %</li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  neutral: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bad: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
