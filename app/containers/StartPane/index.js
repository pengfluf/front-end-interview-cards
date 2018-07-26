/**
 *
 * StartPane
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

import {
  makeSelectSelectedCategoryList,
  makeSelectCategories,
  makeSelectCategoryList,
} from 'containers/WorkSpace/selectors';
import { addCategory, removeCategory } from 'containers/WorkSpace/actions';

import injectReducer from 'utils/injectReducer';
import makeSelectStartPane from './selectors';
import reducer from './reducer';
import style from './style.scss';

export class StartPane extends React.Component {
  constructor(props) {
    super(props);

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleCheckboxChange(categoryName, category) {
    if (this.props.selectedCategoryList.some(name => name === categoryName)) {
      this.props.removeCategory(categoryName);
    } else {
      this.props.addCategory(categoryName, category);
    }
  }

  render() {
    const { categoryList, categories, selectedCategoryList } = this.props;
    return (
      <div className={style.startpane}>
        <Helmet>
          <title>StartPane</title>
          <meta name="description" content="Description of StartPane" />
        </Helmet>
        <p>Select the categories by which you want to test your knowledge.</p>
        <div className={style.filters}>
          {categoryList ? (
            categoryList.map(categoryName => (
              <div className={style.filter} key={categoryName}>
                {/* eslint-disable jsx-a11y/label-has-for */}
                <label htmlFor={`category${categoryName}`}>
                  {categoryName}
                </label>
                {/* eslint-enable */}
                <input
                  id={`category${categoryName}`}
                  name="category"
                  type="checkbox"
                  checked={selectedCategoryList.some(
                    name => name === categoryName,
                  )}
                  onChange={() => {
                    this.handleCheckboxChange(
                      categoryName,
                      categories[categoryName],
                    );
                  }}
                />
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
        {/* eslint-disable jsx-a11y/anchor-is-valid */}
        {selectedCategoryList.length ? (
          <Link to="/interview">Start</Link>
        ) : null}
        {/* eslint-enable */}
      </div>
    );
  }
}

StartPane.propTypes = {
  categories: PropTypes.object,
  selectedCategoryList: PropTypes.array,
  categoryList: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  addCategory: PropTypes.func,
  removeCategory: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  startpane: makeSelectStartPane(),
  selectedCategoryList: makeSelectSelectedCategoryList(),
  categories: makeSelectCategories(),
  categoryList: makeSelectCategoryList(),
});

function mapDispatchToProps(dispatch) {
  return {
    addCategory: (categoryName, category) =>
      dispatch(addCategory(categoryName, category)),
    removeCategory: categoryName => dispatch(removeCategory(categoryName)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'startPane', reducer });

export default compose(
  withReducer,
  withConnect,
)(StartPane);
