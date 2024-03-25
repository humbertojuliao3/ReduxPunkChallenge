import createSagaMiddleware from "@redux-saga/core";
import { configureStore, Tuple } from '@reduxjs/toolkit'
import rootReducers from "./reducers";
import {rootSaga} from "./reducers/sagas" 

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducers,
  middleware: () => new Tuple(sagaMiddleware),
})

sagaMiddleware.run(rootSaga);

export default store;
