import PropTypes from "prop-types";
import { Wrapper, Title } from 'components/Feedback/FeedbackStyled';

export default function Section ({title, children}) {
    return (
        <Wrapper>
            <Title>{title}</Title>
            {children}
        </Wrapper>
    );
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.object,
}