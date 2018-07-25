/**
 *
 * WorkSpace
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import StartPane from 'containers/StartPane';

import data, { list } from 'data';
import injectReducer from 'utils/injectReducer';
import makeSelectWorkSpace from './selectors';
import reducer from './reducer';
import { copyCategories } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class WorkSpace extends React.Component {
  componentDidMount() {
    this.props.copyCategories(data, list);
  }

  render() {
    return (
      <div>
        <StartPane />
      </div>
    );
  }
}

WorkSpace.propTypes = {};

const mapStateToProps = createStructuredSelector({
  workspace: makeSelectWorkSpace(),
});

function mapDispatchToProps(dispatch) {
  return {
    copyCategories: (categories, categoryList) =>
      dispatch(copyCategories(categories, categoryList)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'workSpace', reducer });

export default compose(
  withReducer,
  withConnect,
)(WorkSpace);
