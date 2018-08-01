import {
  copyCategories,
  addCategory,
  removeCategory,
  questionAnswered,
} from '../actions';

import {
  COPY_CATEGORIES,
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  QUESTION_ANSWERED,
} from '../constants';

describe('WorkSpace actions', () => {
  describe('copyCategories action', () => {
    it('Returns the correct type and passed arguments', () => {
      const categories = { HTML: [], JS: [] };
      const categoryList = ['HTML', 'JS'];

      const expected = {
        type: COPY_CATEGORIES,
        categories,
        categoryList,
      };
      expect(copyCategories(categories, categoryList)).toEqual(expected);
    });
  });

  describe('addCategory action', () => {
    it('Returns the correct type and passed arguments', () => {
      const categoryName = 'HTML';
      const category = [{ question: 'question' }, { question: 'question' }];

      const expected = {
        type: ADD_CATEGORY,
        categoryName,
        category,
      };
      expect(addCategory(categoryName, category)).toEqual(expected);
    });
  });

  describe('removeCategory action', () => {
    it('Returns the correct type and passed arguments', () => {
      const categoryName = 'HTML';

      const expected = {
        type: REMOVE_CATEGORY,
        categoryName,
      };
      expect(removeCategory(categoryName)).toEqual(expected);
    });
  });

  describe('questionAnswered action', () => {
    it('Returns the correct type and passed arguments', () => {
      const question = {
        question: 'question',
        answer: ['chunk 1', 'chunk 2'],
      };
      const questionIndex = 1;
      const categoryName = 'HTML';

      const expected = {
        type: QUESTION_ANSWERED,
        question,
        questionIndex,
        categoryName,
      };
      expect(questionAnswered(question, questionIndex, categoryName)).toEqual(
        expected,
      );
    });
  });
});
