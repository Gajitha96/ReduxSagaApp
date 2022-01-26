import {combineReducers, createStore, applyMiddleware} from 'redux';
import rootReducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

// const reducer = combineReducers({
//   counter: rootReducer,
// });

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middleware));

// const store = createStore(rootSaga, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
