/**
 *
 * Results
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectResults from './selectors';
import reducer from './reducer';

/* eslint-disable react/prefer-stateless-function */
export class Results extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Results</title>
          <meta name="description" content="Description of Results" />
        </Helmet>
        <h2>Results</h2>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  results: makeSelectResults(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'results', reducer });

export default compose(
  withReducer,
  withConnect,
)(Results);
