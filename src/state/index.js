import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {reducer as dogs} from './dog/reducer';

const rootReducer = combineReducers({
  dogs,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
