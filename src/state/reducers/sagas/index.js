import { put, takeLatest, all, fork } from "redux-saga/effects";
import { GET_BEERS } from "../types";
import { getBeersSuccessAction, getBeersErrorAction } from "../slices/";
import axios from "axios";

const PUNK_URL = 'https://api.punkapi.com/v2'

function* getBeersSaga() {
  try {
    const response = yield axios.get(`${PUNK_URL}/beers`);
    yield put(getBeersSuccessAction(response.data));
  } catch (error) {
    console.log(error)
    yield put(getBeersErrorAction(error));
  }
}

export function* watchGetBeers() {
  yield takeLatest(GET_BEERS, getBeersSaga);
}

export const rootSaga = function* () {
  yield all([
    fork(watchGetBeers),
  ]);
};