import { fromJS } from 'immutable';
import resultsReducer from '../reducer';

describe('resultsReducer', () => {
  it('returns the initial state', () => {
    expect(resultsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
