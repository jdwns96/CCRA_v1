import { all } from "redux-saga/effects";

import { testSaga } from "./dummy/saga";

export default function* rootSaga() {
  yield all([testSaga()]);
}
