import { Component } from "react";
import Reviews from "./Reviews/Reviews";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section"
import Notification from "./Notification/Notification"

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleReviews = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1
    }));
  };

  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback(this.state);
    return totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback(this.state);
    const positivePercentage = this.countPositiveFeedbackPercentage;

    return (
      <>
        <Section title="Please leave your feedback:">
          <Reviews
          options={['good', 'neutral', 'bad']}
          handleReviewsOptions={this.handleReviews}
          
          />
        </Section >
        <Section title="Statistics:">
          

        {totalFeedback?(<Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positivePercentage}
          />) : (<Notification
            message="There is no feedback yet."
          > </Notification>)}
        </Section>
      </>
    );
  }
}

export default App;

