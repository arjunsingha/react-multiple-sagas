import {takeLatest, put, delay} from 'redux-saga/effects';


function* asyncAgeDown(){
    console.log("AsyncAgeDown from saga2 called");
    yield delay(1000);
    yield put({type: "AGE_DOWN_ASYNC", value: 1});
}
export default function* watchAgeDown(){
    yield takeLatest("AGE_DOWN", asyncAgeDown);
}