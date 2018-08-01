import {
  GET_QUESTION,
  CHECK_ANSWER,
  UPDATE_MY_ANSWER,
  SHOW_MY_ANSWER,
  HIDE_MY_ANSWER,
  START_LOADING,
  LOADING_FINISHED,
  FINISH_QUESTION,
  RESET,
  ALL_QUESTIONS_ANSWERED,
} from '../constants';

import {
  getQuestion,
  checkAnswer,
  updateMyAnswer,
  showMyAnswer,
  hideMyAnswer,
  startLoading,
  loadingFinished,
  finishQuestion,
  reset,
  finishInterview,
} from '../actions';

describe('Interview actions', () => {
  describe('getQuestion action', () => {
    it('Returns the correct type and passed arguments', () => {
      const currentCategory = 'HTML';
      const blockIndex = 1;
      const block = {
        question: '',
        answer: ['chunk1', 'chunk2'],
      };

      const expected = {
        type: GET_QUESTION,
        currentCategory,
        blockIndex,
        block,
      };
      expect(getQuestion(currentCategory, blockIndex, block)).toEqual(expected);
    });
  });

  describe('checkAnswer action', () => {
    it('Returns the correct type and passed arguments', () => {
      const expected = {
        type: CHECK_ANSWER,
      };
      expect(checkAnswer()).toEqual(expected);
    });
  });

  describe('updateMyAnswer action', () => {
    it('Returns the correct type and passed arguments', () => {
      const text = 'some text';

      const expected = {
        type: UPDATE_MY_ANSWER,
        text,
      };
      expect(updateMyAnswer(text)).toEqual(expected);
    });
  });

  describe('showMyAnswer action', () => {
    it('Returns the correct type and passed arguments', () => {
      const expected = {
        type: SHOW_MY_ANSWER,
      };
      expect(showMyAnswer()).toEqual(expected);
    });
  });

  describe('hideMyAnswer action', () => {
    it('Returns the correct type and passed arguments', () => {
      const expected = {
        type: HIDE_MY_ANSWER,
      };
      expect(hideMyAnswer()).toEqual(expected);
    });
  });

  describe('startLoading action', () => {
    it('Returns the correct type and passed arguments', () => {
      const expected = {
        type: START_LOADING,
      };
      expect(startLoading()).toEqual(expected);
    });
  });

  describe('loadingFinished action', () => {
    it('Returns the correct type and passed arguments', () => {
      const expected = {
        type: LOADING_FINISHED,
      };
      expect(loadingFinished()).toEqual(expected);
    });
  });

  describe('finishQuestion action', () => {
    it('Returns the correct type and passed arguments', () => {
      const expected = {
        type: FINISH_QUESTION,
      };
      expect(finishQuestion()).toEqual(expected);
    });
  });

  describe('reset action', () => {
    it('Returns the correct type and passed arguments', () => {
      const expected = {
        type: RESET,
      };
      expect(reset()).toEqual(expected);
    });
  });

  describe('finishInterview action', () => {
    it('Returns the correct type and passed arguments', () => {
      const expected = {
        type: ALL_QUESTIONS_ANSWERED,
      };
      expect(finishInterview()).toEqual(expected);
    });
  });
});
