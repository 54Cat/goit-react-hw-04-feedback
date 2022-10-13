import { useState } from "react";
import Section from 'components/Feedback/Section';
import Statistics from 'components/Feedback/Statistics';
import FeedbackOptions from 'components/Feedback/FeedbackOptions';
import { Container } from 'components/Feedback/FeedbackStyled';

export default function App() {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const addFeedback = (e) => {
        switch (e.target.id) {   
            case 'good':
                setGood(state => state + 1);
                break;

            case 'neutral':
                setNeutral(state => state + 1);
                break;
        
            case 'bad':
                setBad(state => state + 1);
                break;
            default:
                return;
        }
    }

    const countTotalFeedback = () => {
        return good + neutral + bad;
    }

   const countPositiveFeedbackPercentage = () => {
        return Math.round(good * 100 / countTotalFeedback());
    }

        return (
            <Container>
    
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={['Good', 'Neutral', 'Bad']}
                        onLeaveFeedback={addFeedback}
                    />
                </Section>
                
                <Section title="Statistic">
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={countTotalFeedback()}
                        positivePercentage={countPositiveFeedbackPercentage()}
                    />
                </Section>
            </Container>
        );        
    }   
