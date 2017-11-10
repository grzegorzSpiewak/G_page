import TestActions from './actions';

export default class testMiddleware {
  static testFunc(value) {
    return (dispatch) => {
      dispatch(TestActions.test(value));
    };
  }
}
