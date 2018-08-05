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
import { makeSelectRemainingQuestions } from './selectors';
import reducer from './reducer';
import { copyCategories } from './actions';

import style from './style.scss';

export class WorkSpace extends React.Component {
  componentDidMount() {
    this.props.copyCategories(data, list);
  }

  render() {
    const { remainingQuestions } = this.props;
    return (
      <div>
        {remainingQuestions ? (
          <div className={style.remainingQuestions}>
            {this.props.location.pathname !== '/' ? 'Remaining' : 'Selected'}{' '}
            Questions: {remainingQuestions}
          </div>
        ) : null}
        <Switch>
          <Route path="/results" component={Results} />
          <Route path="/interview" component={Interview} />
          <Route exact path="/" component={StartPane} />
        </Switch>
      </div>
    );
  }
}

WorkSpace.propTypes = {
  copyCategories: PropTypes.func,
  remainingQuestions: PropTypes.number,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

const mapStateToProps = createStructuredSelector({
  remainingQuestions: makeSelectRemainingQuestions(),
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

const withReducer = injectReducer({
  key: 'workSpace',
  reducer,
});

export default withRouter(
  compose(
    withReducer,
    withConnect,
  )(WorkSpace),
);
