import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the startPane state domain
 */

const selectStartPaneDomain = state => state.get('startPane', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by StartPane
 */

const makeSelectStartPane = () =>
  createSelector(selectStartPaneDomain, substate => substate.toJS());

export default makeSelectStartPane;
export { selectStartPaneDomain };
