/*
 *
 * WorkSpace actions
 *
 */

import {
  COPY_CATEGORIES,
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  QUESTION_ANSWERED,
} from './constants';

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

export function questionAnswered(question, questionIndex, categoryName) {
  return {
    type: QUESTION_ANSWERED,
    question,
    questionIndex,
    categoryName,
  };
}
