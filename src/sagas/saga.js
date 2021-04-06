import {takeLatest, put, delay} from 'redux-saga/effects';


function* asyncAgeUp(){
    console.log("AsyncAgeUp from saga called");
    yield delay(1000);
    yield put({type: "AGE_UP_ASYNC", value: 1});
}
export default function* watchAgeUp(){
    yield takeLatest("AGE_UP", asyncAgeUp);
}