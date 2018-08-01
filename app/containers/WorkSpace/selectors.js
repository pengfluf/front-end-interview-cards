import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the workSpace state domain
 */

const selectWorkSpaceDomain = state => state.get('workSpace', initialState);

/**
 * Other specific selectors
 */

const makeSelectCategories = () =>
  createSelector(selectWorkSpaceDomain, substate => substate.get('categories'));

const makeSelectCategoryList = () =>
  createSelector(selectWorkSpaceDomain, substate =>
    substate.get('categoryList'),
  );

const makeSelectSelectedCategories = () =>
  createSelector(selectWorkSpaceDomain, substate =>
    substate.get('selectedCategories').toJS(),
  );

const makeSelectSelectedCategoryList = () =>
  createSelector(selectWorkSpaceDomain, substate =>
    substate.get('selectedCategoryList').toJS(),
  );

/**
 * Default selector used by WorkSpace
 */

const makeSelectWorkSpace = () =>
  createSelector(selectWorkSpaceDomain, substate => substate.toJS());

export default makeSelectWorkSpace;
export {
  selectWorkSpaceDomain,
  makeSelectCategories,
  makeSelectCategoryList,
  makeSelectSelectedCategories,
  makeSelectSelectedCategoryList,
};
