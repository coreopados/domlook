import { combineReducers } from 'redux';
import { mainReducer } from './mainReducer';
import { paginationReducer } from './paginationReducer';
import { filterReducer } from './filterReducer';

export const rootReducer = combineReducers({
  mainReducer, paginationReducer, filterReducer,
});
