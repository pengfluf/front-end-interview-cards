/*
 *
 * WorkSpace reducer
 *
 */

import { fromJS } from 'immutable';
import { COPY_CATEGORIES, ADD_CATEGORY, REMOVE_CATEGORY } from './constants';

export const initialState = fromJS({
  selectedCategories: {
    HTML: {},
    CSS: {},
    JS: {},
  },
  categories: {
    HTML: {},
    CSS: {},
    JS: {},
  },
  categoryList: [],
});

function workSpaceReducer(state = initialState, action) {
  switch (action.type) {
    case COPY_CATEGORIES:
      return state
        .set('categories', action.categories)
        .set('categoryList', action.categoryList);
    case ADD_CATEGORY:
      return state.setIn(
        ['selectedCategories', action.categoryName],
        action.category,
      );
    case REMOVE_CATEGORY:
      return state.updateIn(
        ['selectedCategories', action.categoryName],
        () => ({}),
      );
    default:
      return state;
  }
}

export default workSpaceReducer;
