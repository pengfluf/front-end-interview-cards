/*
 *
 * WorkSpace actions
 *
 */

import { COPY_CATEGORIES, ADD_CATEGORY, REMOVE_CATEGORY } from './constants';

export function copyCategories(categories, categoryList) {
  return {
    type: COPY_CATEGORIES,
    categories,
    categoryList,
  };
}

export function addCategory(categoryName, category) {
  return {
    type: ADD_CATEGORY,
    categoryName,
    category,
  };
}

export function removeCategory(categoryName) {
  return {
    type: REMOVE_CATEGORY,
    categoryName,
  };
}
