/*
 *
 * Interview actions
 *
 */

import {
  GET_QUESTION,
  CHECK_ANSWER,
  START_LOADING,
  LOADING_FINISHED,
} from './constants';

export function getQuestion(currentCategory, blockIndex, block) {
  return {
    type: GET_QUESTION,
    currentCategory,
    blockIndex,
    block,
  };
}

export function checkAnswer() {
  return {
    type: CHECK_ANSWER,
  };
}

export function startLoading() {
  return {
    type: START_LOADING,
  };
}

export function loadingFinished() {
  return {
    type: LOADING_FINISHED,
  };
}
