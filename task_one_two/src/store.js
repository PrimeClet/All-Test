import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/taskReducer';
import rootSaga from './sagas/taskSagas';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the store with saga middleware
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;