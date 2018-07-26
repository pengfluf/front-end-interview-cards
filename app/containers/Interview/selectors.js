import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the interview state domain
 */

const selectInterviewDomain = state => state.get('interview', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Interview
 */

const makeSelectInterview = () =>
  createSelector(selectInterviewDomain, substate => substate.toJS());

export default makeSelectInterview;
export { selectInterviewDomain };
