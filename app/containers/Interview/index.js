/**
 *
 * Interview
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  makeSelectSelectedCategories,
  makeSelectSelectedCategoryList,
} from 'containers/WorkSpace/selectors';

import injectReducer from 'utils/injectReducer';
import makeSelectInterview from './selectors';
import reducer from './reducer';

import {
  getQuestion,
  checkAnswer,
  startLoading,
  loadingFinished,
} from './actions';

/* eslint-disable react/prefer-stateless-function */
export class Interview extends React.Component {
  async componentDidMount() {
    await this.props.startLoading();

    await this.getQuestion();

    await this.props.loadingFinished();
  }

  getQuestion() {
    const { selectedCategories, selectedCategoryList } = this.props;

    const categoryName =
      selectedCategoryList[
        Math.floor(Math.random() * selectedCategoryList.length)
      ];

    const selectedCategory = selectedCategories[categoryName];

    let blockIndex = 0;
    if (selectedCategory.length > 1) {
      blockIndex = Math.floor(Math.random() * selectedCategory.length);
    }

    const block = selectedCategory[blockIndex];

    this.props.getQuestion(categoryName, blockIndex, block);
  }

  render() {
    const { question, answer } = this.props.interview.block;
    const { answerShown, loaded, loading } = this.props.interview;
    if (loaded) {
      return (
        <div>
          <Helmet>
            <title>Interview</title>
            <meta name="description" content="Description of Interview" />
          </Helmet>
          <div>Interview</div>
          {typeof question === 'string' ? (
            <p>{question}</p>
          ) : (
            question.map((item, index) => <p key={index}>{item}</p>)
          )}

          {typeof answer === 'string' && answerShown ? <p>{answer}</p> : null}

          {!typeof answer === 'string' && answerShown
            ? answer.map((item, index) => <p key={index}>{item}</p>)
            : null}

          {!answerShown ? (
            <button onClick={this.props.checkAnswer}>check the answer</button>
          ) : null}
        </div>
      );
    } else if (loading) {
      return <div>Loading...</div>;
    }
    return <div>Not loaded</div>;
  }
}

Interview.propTypes = {
  interview: PropTypes.shape({
    block: PropTypes.shape({
      question: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
      answer: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    }),
    answerShown: PropTypes.bool,
  }),
  getQuestion: PropTypes.func,
  checkAnswer: PropTypes.func,
  startLoading: PropTypes.func,
  loadingFinished: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  interview: makeSelectInterview(),
  selectedCategories: makeSelectSelectedCategories(),
  selectedCategoryList: makeSelectSelectedCategoryList(),
});

function mapDispatchToProps(dispatch) {
  return {
    getQuestion: (currentCategory, blockIndex, block) =>
      dispatch(getQuestion(currentCategory, blockIndex, block)),
    checkAnswer: () => dispatch(checkAnswer()),
    startLoading: () => dispatch(startLoading()),
    loadingFinished: () => dispatch(loadingFinished()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'interview', reducer });

export default compose(
  withReducer,
  withConnect,
)(Interview);
