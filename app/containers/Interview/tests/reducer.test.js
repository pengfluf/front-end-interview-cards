import { fromJS } from 'immutable';
import interviewReducer from '../reducer';

describe('interviewReducer', () => {
  it('returns the initial state', () => {
    expect(interviewReducer(undefined, {})).toEqual(fromJS({}));
  });
});
