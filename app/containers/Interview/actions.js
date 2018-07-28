/*
 *
 * Interview actions
 *
 */

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

export function updateMyAnswer(text) {
  return {
    type: UPDATE_MY_ANSWER,
    text,
  };
}

export function showMyAnswer() {
  return {
    type: SHOW_MY_ANSWER,
  };
}

export function hideMyAnswer() {
  return {
    type: HIDE_MY_ANSWER,
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

export function finishInterview() {
  return {
    type: ALL_QUESTIONS_ANSWERED,
  };
}
