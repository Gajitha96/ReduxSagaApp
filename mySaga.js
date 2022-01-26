import {INCREMENT, DECREMENT} from './Action';
import {put, takeEvery} from 'redux-saga/effects';
// import { incremet } from "./reducer";

export function* sayhello() {
  console.log('This is redux saga');
}

function* incremet() {
  console.log('This is Increment');
}
export function* watchIncrement() {
  yield takeEvery(INCREMENT, incremet);
}
function* decrement() {
  console.log('This is decrement');
}

export function* watchDecrement() {
  yield takeEvery(DECREMENT, decrement);
}
