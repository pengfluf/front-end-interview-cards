/*
 *
 * Interview reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_QUESTION,
  CHECK_ANSWER,
  START_LOADING,
  LOADING_FINISHED,
} from './constants';

export const initialState = fromJS({
  currentCategory: '',
  block: {},
  blockIndex: null,
  myAnswer: '',
  answerShown: false,
  loading: false,
  loaded: false,
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
    case START_LOADING:
      return state.set('loading', true);
    case LOADING_FINISHED:
      return state.set('loading', false).set('loaded', true);
    default:
      return state;
  }
}

export default interviewReducer;
