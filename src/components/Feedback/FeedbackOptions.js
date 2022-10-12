import PropTypes from "prop-types";
import { BtnList, BtnItem, Btn } from 'components/Feedback/FeedbackStyled';


export default function FeedbackOptions({ options, onLeaveFeedback }) {
    const btn = options.map((element) => {
    return (
        <BtnItem key={element.toLowerCase()}> 
            <Btn type="button" id={element.toLowerCase()} onClick={onLeaveFeedback}>
                {element}
            </Btn> 
        </BtnItem>
        );
    });

    return (
        <BtnList>{btn}</BtnList>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
}
