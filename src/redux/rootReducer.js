import { combineReducers } from 'redux';
import { mainReducer } from './mainReducer';
import { paginationReducer } from './paginationReducer';
import { filterCategoryReducer } from './filterCategoryReducer';
import { filterByPriceReducer } from './filterByPriceReducer';
import { filterByDateReducer } from './filterByDateReducer';
import { filterReducer } from './filterReducer';

export const rootReducer = combineReducers({
  mainReducer, paginationReducer, filterCategoryReducer, filterByPriceReducer, filterByDateReducer, filterReducer
});
