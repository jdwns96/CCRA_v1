import { takeEvery, put } from "redux-saga/effects";

import { TEST } from "./action";
import type { TestAction } from "./reducer";

//middleware
function* testMiddleware(action: TestAction) {
  console.log("saga");
}
// saga
export function* testSaga() {
  yield takeEvery(TEST, testMiddleware);
}
