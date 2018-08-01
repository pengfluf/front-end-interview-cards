import { fromJS } from 'immutable';
import {
  selectWorkSpaceDomain,
  makeSelectCategories,
  makeSelectCategoryList,
  makeSelectSelectedCategories,
  makeSelectSelectedCategoryList,
} from '../selectors';

describe('selectWorkSpaceDomain', () => {
  it('Selects correctly', () => {
    const actualState = fromJS({
      workSpace: {},
    });
    const mockedState = fromJS({
      workSpace: actualState,
    });
    expect(selectWorkSpaceDomain(mockedState)).toEqual(actualState);
  });
});

describe('categories', () => {
  it('Selects correctly', () => {
    const selector = makeSelectCategories();
    const categories = fromJS({ HTML: [], JS: [] });
    const mockedState = fromJS({
      workSpace: {
        categories,
      },
    });
    expect(selector(mockedState)).toEqual(categories);
  });
});

describe('categoryList', () => {
  it('Selects correctly', () => {
    const selector = makeSelectCategoryList();
    const categoryList = fromJS(['HTML', 'JS']);
    const mockedState = fromJS({
      workSpace: {
        categoryList,
      },
    });
    expect(selector(mockedState)).toEqual(categoryList);
  });
});

describe('selectedCategories', () => {
  it('Selects correctly', () => {
    const selector = makeSelectSelectedCategories();
    const selectedCategories = { HTML: [], JS: [] };
    const mockedState = fromJS({
      workSpace: {
        selectedCategories,
      },
    });
    expect(selector(mockedState)).toEqual(selectedCategories);
  });
});

describe('selectedCategoryList', () => {
  it('Selects correctly', () => {
    const selector = makeSelectSelectedCategoryList();
    const selectedCategoryList = ['HTML', 'JS'];
    const mockedState = fromJS({
      workSpace: {
        selectedCategoryList,
      },
    });
    expect(selector(mockedState)).toEqual(selectedCategoryList);
  });
});
