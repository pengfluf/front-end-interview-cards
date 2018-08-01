import { fromJS } from 'immutable';
import workSpaceReducer from '../reducer';
import {
  copyCategories,
  addCategory,
  removeCategory,
  questionAnswered,
} from '../actions';

describe('workSpaceReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      selectedCategories: {
        HTML: [],
        CSS: [],
        JS: [],
      },
      selectedCategoryList: [],
      categories: {
        HTML: [],
        CSS: [],
        JS: [],
      },
      categoryList: [],
      answeredQuestions: {
        HTML: [],
        CSS: [],
        JS: [],
      },
    });
  });

  it('Returns the initial state', () => {
    const expected = state;
    expect(workSpaceReducer(undefined, {})).toEqual(expected);
  });

  it('Handles the copyCategories action correctly', () => {
    const categories = { HTML: [], JS: [] };
    const categoryList = ['HTML', 'JS'];

    const expected = state
      .set('categories', categories)
      .set('categoryList', categoryList);

    expect(
      workSpaceReducer(state, copyCategories(categories, categoryList)),
    ).toEqual(expected);
  });

  it('Handles the addCategory action correctly', () => {
    const categoryName = 'HTML';
    const category = [{ question: 'question' }, { question: 'question' }];

    const expected = state
      .setIn(
        ['selectedCategoryList', state.get('selectedCategoryList').size],
        categoryName,
      )
      .setIn(['selectedCategories', categoryName], fromJS(category));

    expect(
      workSpaceReducer(state, addCategory(categoryName, category)),
    ).toEqual(expected);
  });

  it('Handles the removeCategory action correctly', () => {
    const categoryName = 'HTML';

    const expected = state
      .updateIn(['selectedCategories', categoryName], () => [])
      .deleteIn([
        'selectedCategoryList',
        state
          .get('selectedCategoryList')
          .toJS()
          .findIndex(ctgName => ctgName === categoryName),
      ]);

    expect(workSpaceReducer(state, removeCategory(categoryName))).toEqual(
      expected,
    );
  });

  it('Handles the questionAnswered action correctly', () => {
    const question = {
      question: 'question',
      answer: ['chunk 1', 'chunk 2'],
    };
    const questionIndex = 1;
    const categoryName = 'HTML';

    const expected = state
      .setIn(
        [
          'answeredQuestions',
          categoryName,
          state.getIn(['answeredQuestions', categoryName]).size,
        ],
        fromJS(question),
      )
      .deleteIn(['selectedCategories', categoryName, questionIndex]);

    expect(
      workSpaceReducer(
        state,
        questionAnswered(question, questionIndex, categoryName),
      ),
    ).toEqual(expected);
  });
});
