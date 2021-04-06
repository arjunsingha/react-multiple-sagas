import { all, fork } from "redux-saga/effects";
import saga from "./saga";
import saga2 from "./saga2";

export default function* rootSaga() {
  yield all([
    fork(saga),
    fork(saga2)
  ]);
}