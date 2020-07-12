import { combineReducers } from 'redux';
import { mainReducer } from './mainReducer';
import { paginationReducer } from './paginationReducer';
import { filterByPriceReducer } from './filterByPriceReducer';
import { filterByDateReducer } from './filterByDateReducer';
import { filterReducer } from './filterReducer';

export const rootReducer = combineReducers({
  mainReducer, paginationReducer, filterByPriceReducer, filterByDateReducer, filterReducer,
});
