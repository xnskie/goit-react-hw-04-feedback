import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <Container>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    {positivePercentage ? <p>Positive feedback: {positivePercentage}%</p> : <p>Positive feedback: 0%</p>}
  </Container>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
