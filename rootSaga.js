import {delay} from 'redux-saga';
import {all} from 'redux-saga/effects'; // all runs multipple saga at once
import {sayhello} from './mySaga';
import {watchDecrement, watchIncrement} from './mySaga';

export default function* rootSaga() {
  yield all([sayhello, watchIncrement(), watchDecrement()]);
}
