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
  FINISH_QUESTION,
  RESET,
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

export function finishQuestion() {
  return {
    type: FINISH_QUESTION,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}
