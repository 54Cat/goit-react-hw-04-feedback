import PropTypes from "prop-types";
import Notification from 'components/Feedback/Notification'
import { StatData } from 'components/Feedback/FeedbackStyled';

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
    if (total === 0) {
        return (<Notification/>);
    } 
    return (
        <ul>
            <li>
                <StatData>Good: <span>{good}</span></StatData>
            </li>
            <li>
                <StatData>Neutral: <span>{neutral}</span></StatData>
            </li>
            <li>
                <StatData>Bad: <span>{bad}</span></StatData>
            </li>
            <li>
                <StatData>Total: <span>{total}</span></StatData>
            </li>
            <li>
                <StatData>Positive feedback: <span>{positivePercentage}%</span></StatData>
            </li>
        </ul>
    );
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}