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
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import StartPane from 'containers/StartPane';
import Interview from 'containers/Interview';
import Results from 'containers/Results';

import data, { list } from 'data';
import injectReducer from 'utils/injectReducer';
import makeSelectWorkSpace from './selectors';
import reducer from './reducer';
import { copyCategories } from './actions';

export class WorkSpace extends React.Component {
  componentDidMount() {
    this.props.copyCategories(data, list);
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/results" component={Results} />
          <Route path="/interview" component={Interview} />
          <Route path="/" component={StartPane} />
        </Switch>
      </div>
    );
  }
}

WorkSpace.propTypes = {
  copyCategories: PropTypes.func,
};

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

export default withRouter(
  compose(
    withReducer,
    withConnect,
  )(WorkSpace),
);
