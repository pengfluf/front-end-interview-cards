/*
 *
 * Interview reducer
 *
 */

import { fromJS } from 'immutable';
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
} from './constants';

export const initialState = fromJS({
  currentCategory: '',
  block: {},
  blockIndex: null,
  myAnswer: '',
  myAnswerShown: false,
  answerShown: false,
  loading: false,
  loaded: false,
  readyToGo: false,
});

function interviewReducer(state = initialState, action) {
  switch (action.type) {
    case GET_QUESTION:
      return state
        .set('currentCategory', action.currentCategory)
        .set('blockIndex', action.blockIndex)
        .set('block', action.block);
    case CHECK_ANSWER:
      return state.set('answerShown', true);
    case UPDATE_MY_ANSWER:
      return state.set('myAnswer', action.text);
    case SHOW_MY_ANSWER:
      return state.set('myAnswerShown', true);
    case HIDE_MY_ANSWER:
      return state.set('myAnswerShown', false);
    case START_LOADING:
      return state.set('loading', true);
    case LOADING_FINISHED:
      return state.set('loading', false).set('loaded', true);
    case FINISH_QUESTION:
      return state.set('readyToGo', true);
    case RESET:
      return state
        .set('answerShown', false)
        .set('myAnswerShown', false)
        .set('myAnswer', '')
        .set('readyToGo', false);
    default:
      return state;
  }
}

export default interviewReducer;
