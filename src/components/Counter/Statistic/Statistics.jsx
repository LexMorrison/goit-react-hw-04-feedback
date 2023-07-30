import PropTypes from 'prop-types';
export const Statistics = ({
  good = 0,
  neutral = 0,
  bad = 0,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <li>
        <p>Good: {good}</p>
      </li>
      <li>
        <p>Neutral: {neutral}</p>
      </li>
      <li>
        <p>Bad: {bad}</p>
      </li>
      <li>
        <p>Total: {total(good, neutral, bad)}</p>
      </li>
      <li>
        <p>Positive feedback: {positivePercentage(good, neutral, bad)}%</p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
