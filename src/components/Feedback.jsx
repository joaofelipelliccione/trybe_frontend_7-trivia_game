import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FeedbackBtns from './FeedbackBtns';

class Feedback extends React.Component {
  render() {
    const { assertionsProp, scoreProp } = this.props;
    const numberThree = 3;

    return (
      <main id="feedbackCard">
        <div id="feedbackMsg">
          {assertionsProp < numberThree
            ? <h2 data-testid="feedback-text">Podia ser melhor...</h2>
            : <h2 data-testid="feedback-text">Mandou bem!</h2>}
          <p>
            Você acertou
            <output data-testid="feedback-total-question">
              {' '}
              {Number(assertionsProp)}
            </output>
            {' '}
            questões.
          </p>
          <p>
            Um total de
            <output data-testid="feedback-total-score">
              {' '}
              {Number(scoreProp)}
            </output>
            {' '}
            pontos.
          </p>
        </div>
        <FeedbackBtns />
      </main>
    );
  }
}

Feedback.propTypes = {
  assertionsProp: PropTypes.number.isRequired,
  scoreProp: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  assertionsProp: state.trivia.assertions,
  scoreProp: state.trivia.score,
});

export default connect(mapStateToProps, null)(Feedback);
