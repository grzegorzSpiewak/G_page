export default class TestActions {

  static TEST = 'TEST';

  static test(value) {
    console.log(value);
    return {
      type: TestActions.TEST,
      value
    };
  }
}
