import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import rootReducer from '../reducers'

const saga = createSagaMiddleware();

const store = createStore(rootReducer,undefined,applyMiddleware(saga));

saga.run(rootSaga);

export default store;