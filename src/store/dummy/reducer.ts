import { TEST, testAction } from "./action";

export type TestAction = ReturnType<typeof testAction>;
export interface TestState {
  test: number;
}

const initialState: TestState = {
  test: 0,
};

const reducer = (state: TestState = initialState, action: TestAction) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        test: ++state.test,
      };
    default:
      return state;
  }
};

export default reducer;
