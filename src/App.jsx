import React, { useState } from 'react';
// import React, { Component } from 'react';
import Notification from './components/Notification';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import { Title } from './components/Statistics/Statistics.styled';
import Statistics from './components/Statistics';


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

    const totalFeedback = good + neutral + bad;
  

  const positiveFeedbackPercentage = () => {
    return Math.round((good * 100) / totalFeedback);
  }

  function leaveFeedback(evt) {
    switch (evt.target.name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  }

    const isShowStatistics = totalFeedback;

    return (
      <>
        <FeedbackOptions
          options={{good, bad, neutral}}
          onLeaveFeedback={leaveFeedback}
        />

        {!isShowStatistics ? <Notification message="No feedback given" /> : 
          <Section>
            <Title>Statistics:</Title>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage()}
            />
          </Section>}
      </>
    );
}


/*
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  totalFeedback() {
    const totalFeedback = Object.values(this.state);
    // console.log(totalFeedback);

    return totalFeedback.reduce((total, value) => total + value, 0);
  }

  positiveFeedbackPercentage() {
    return Math.round((this.state.good * 100) / this.totalFeedback());
  }

  leaveFeedback = option => {
    this.setState(prevSate => ({
      [option]: prevSate[option] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const isShowStatistics = this.totalFeedback();

    return (
      <>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.leaveFeedback}
        />

        {!isShowStatistics ? <Notification message="No feedback given" /> : <Section>
            <Title>Statistics:</Title>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalFeedback()}
              positivePercentage={this.positiveFeedbackPercentage()}
            />
          </Section>}
        
        {isShowStatistics && (
          <Section>
            <Title>Statistics:</Title>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalFeedback()}
              positivePercentage={this.positiveFeedbackPercentage()}
            />
          </Section>
        )}
      </>
    );
  }
}
*/

export default App;
