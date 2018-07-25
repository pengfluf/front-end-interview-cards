import { fromJS } from 'immutable';
import startPaneReducer from '../reducer';

describe('startPaneReducer', () => {
  it('returns the initial state', () => {
    expect(startPaneReducer(undefined, {})).toEqual(fromJS({}));
  });
});
