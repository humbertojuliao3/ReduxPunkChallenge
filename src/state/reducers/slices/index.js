import { createSlice } from "@reduxjs/toolkit";
import { getBeersName, BEERS } from "../types";

const beerInitialState = {
  beers: {
    data: null,
    isLoading: false,
    errors: '',
  }
}

export const beerSlice = createSlice({
  name: BEERS,
  initialState: beerInitialState,
  reducers: {
    [getBeersName]: (state) => {
      state.beers.isLoading = true;
      state.beers.errors = '';
    },
    getBeersSuccessAction: (state, { payload: beers }) => {
      state.beers.isLoading = false;
      state.beers.data = beers;
    },
    getBeersErrorAction: (state, { payload: error }) => {
      state.beers.isLoading = false;
      state.beers.errors = error;
    },
  }
});

export const {
    getBeers,
    getBeersSuccessAction,
    getBeersErrorAction
} = beerSlice.actions;

export default beerSlice.reducer;