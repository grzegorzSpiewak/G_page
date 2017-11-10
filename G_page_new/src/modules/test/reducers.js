import TestActions from './actions';

const INITIAL_STATE = {
  test: 'test'
};

function testReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case TestActions.TEST:
    return { ...state };
  default:
    return state;
  }
}

export default testReducer;
