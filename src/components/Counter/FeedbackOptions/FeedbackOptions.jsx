import PropTypes from 'prop-types';
import { ButtonList, ButtonItem } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map((option, index) => {
        return (
          <li key={index}>
            <ButtonItem type="button" name={option} onClick={onLeaveFeedback}>
              {option}
            </ButtonItem>
          </li>
        );
      })}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
