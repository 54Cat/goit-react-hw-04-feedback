import React from "react";
import Section from 'components/Feedback/Section';
import Statistics from 'components/Feedback/Statistics';
import FeedbackOptions from 'components/Feedback/FeedbackOptions';
import { Container } from 'components/Feedback/FeedbackStyled';

export default class App extends React.Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
    
    addFeedback = (e) => {
        const nameState = e.currentTarget.id;
    
        this.setState((prevState) => {
            return {
                [nameState]: prevState[nameState] + 1,
            }
        });
    }

    countTotalFeedback = () => {
        return Object.values(this.state).reduce((total, item) => total + item, 0);
    }

    countPositiveFeedbackPercentage = () => {
        return Math.round(this.state.good * 100 / this.countTotalFeedback());
    }

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage(); 
        const onLeaveFeedback = this.addFeedback; 
        
        return (
            <Container>
    
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={['Good', 'Neutral', 'Bad']}
                        onLeaveFeedback={onLeaveFeedback}
                    />
                </Section>
                
                <Section title="Statistic">
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercentage={positivePercentage}
                    />
                </Section>
            </Container>
        );        
    }   
}
