import { BEERS } from "./types";
import beerReducer from "./slices";

const rootReducers = {
    [BEERS]: beerReducer
};

export default rootReducers;