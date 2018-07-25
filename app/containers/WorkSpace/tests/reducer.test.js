import { fromJS } from 'immutable';
import workSpaceReducer from '../reducer';

describe('workSpaceReducer', () => {
  it('returns the initial state', () => {
    expect(workSpaceReducer(undefined, {})).toEqual(fromJS({}));
  });
});
