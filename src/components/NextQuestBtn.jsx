import React from 'react';
import PropTypes from 'prop-types';

class NextQuestBtn extends React.Component {
  render() {
    const { onNextQuestClick } = this.props;

    return (
      <button
        data-testid="btn-next"
        type="button"
        onClick={ onNextQuestClick }
      >
        Próxima
      </button>
    );
  }
}

NextQuestBtn.propTypes = {
  onNextQuestClick: PropTypes.func.isRequired,
};

export default NextQuestBtn;
