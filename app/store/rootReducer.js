import { combineReducers } from "@reduxjs/toolkit";
import breweryReducer from './slices/brewery';


const rootReducer = combineReducers({
  breweries: breweryReducer,
});

export default rootReducer;