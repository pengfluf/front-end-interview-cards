/**
 *
 * Interview
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  makeSelectSelectedCategories,
  makeSelectSelectedCategoryList,
} from 'containers/WorkSpace/selectors';

import { questionAnswered } from 'containers/WorkSpace/actions';

import injectReducer from 'utils/injectReducer';
import makeSelectInterview from './selectors';
import reducer from './reducer';
import style from './style.scss';

import {
  getQuestion,
  checkAnswer,
  startLoading,
  loadingFinished,
  finishQuestion,
  reset,
} from './actions';

export class Interview extends React.Component {
  constructor(props) {
    super(props);

    this.questionAnswered = this.questionAnswered.bind(this);
    this.goNext = this.goNext.bind(this);
  }

  async componentDidMount() {
    if (!this.props.selectedCategoryList.length) {
      this.props.history.push('/');
    } else {
      await this.props.startLoading();

      await this.getQuestion();

      await this.props.loadingFinished();
    }
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

  questionAnswered() {
    const {
      myAnswer,
      block,
      blockIndex,
      currentCategory,
    } = this.props.interview;
    const question = {
      myAnswer,
      ...block,
    };

    this.props.questionAnswered(question, blockIndex, currentCategory);

    this.props.finishQuestion();
  }

  goNext() {
    this.props.reset();
    this.getQuestion();
  }

  render() {
    const { question, answer } = this.props.interview.block;
    const {
      loaded,
      loading,
      currentCategory,
      answerShown,
      readyToGo,
    } = this.props.interview;
    if (loaded) {
      return (
        <div className={style.interview}>
          <Helmet>
            <title>Interview</title>
            <meta name="description" content="Description of Interview" />
          </Helmet>
          <div className={style.title}>{currentCategory}</div>
          <p className={style.question}>{question}</p>

          {/* eslint-disable react/no-array-index-key */}
          {answerShown &&
            answer.map((item, index) => (
              <p
                className={style.answerChunk}
                key={`${item.substr(0, 5)}${index}`}
              >
                {item}
              </p>
            ))}
          {/* eslint-enable */}

          <div className={style.controls}>
            {!answerShown && (
              <button
                className={style.checkAnswer}
                onClick={this.props.checkAnswer}
              >
                Check the answer
              </button>
            )}

            {answerShown && (!readyToGo && answerShown) ? (
              <Fragment>
                <button onClick={this.questionAnswered}>
                  My answer is good 😎
                </button>
                <button>I could do better ☕️</button>
              </Fragment>
            ) : (
              <Fragment>
                <button onClick={this.goNext}>Go to the next question</button>
              </Fragment>
            )}
          </div>
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
      question: PropTypes.string,
      answer: PropTypes.array,
    }),
    blockIndex: PropTypes.number,
    myAnswer: PropTypes.string,
    currentCategory: PropTypes.string,
    answerShown: PropTypes.bool,
    loaded: PropTypes.bool,
    loading: PropTypes.bool,
    readyToGo: PropTypes.bool,
  }),
  getQuestion: PropTypes.func,
  checkAnswer: PropTypes.func,
  questionAnswered: PropTypes.func,
  startLoading: PropTypes.func,
  loadingFinished: PropTypes.func,
  finishQuestion: PropTypes.func,
  reset: PropTypes.func,
  selectedCategories: PropTypes.object,
  selectedCategoryList: PropTypes.array,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
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
    questionAnswered: (question, questionIndex, categoryName) =>
      dispatch(questionAnswered(question, questionIndex, categoryName)),
    finishQuestion: () => dispatch(finishQuestion()),
    reset: () => dispatch(reset()),
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
