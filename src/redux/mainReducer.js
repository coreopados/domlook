import {
  SET_ADS,
  SET_IS_LOADED,
  SET_IS_LOADING,
  SET_HORIZONTAL_ORIENTATION,
  SET_VERTICAL_ORIENTATION,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  SET_FAVOURITES,
  SET_ABOUT_TEXT,
  SET_NEWS,
  USER_ID,
  SET_CURRENCY,
  SET_FILTERS_OPEN,
  SET_FILTERS_CLOSE,
} from './constants';
import { act } from '@testing-library/react';

const initialState = {
  isLoading: true,
  isLoaded: false,
  ads: [],
  orientation: 'horizontal',
  favourites: [],
  showAllAbout: false,
  news: [],
  userId: '',
  currency: 'USD',
  isAsideFormOpen: false,
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    // user id
    case USER_ID:
      return {
        ...state,
        userId: action.payload,
      };

    case SET_ADS:
      return {
        ...state,
        ads: action.payload,
      };
    case SET_IS_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_VERTICAL_ORIENTATION:
      return {
        ...state,
        orientation: 'vertical',
      };
    case SET_HORIZONTAL_ORIENTATION:
      return {
        ...state,
        orientation: 'horizontal',
      };
    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: action.payload,
      };
    case REMOVE_FAVOURITE:
      return {
        ...state,
        favourites: action.payload,
      };
    case SET_FAVOURITES:
      return {
        ...state,
        favourites: action.payload,
      };
    case SET_ABOUT_TEXT:
      return {
        ...state,
        showAllAbout: !state.showAllAbout,
      };
    case SET_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    case SET_CURRENCY:
      return {
        ...state,
        currency: action.payload,
      };
    case SET_FILTERS_OPEN:
      return {
        ...state,
        isAsideFormOpen: true,
      };
    case SET_FILTERS_CLOSE:
      return {
        ...state,
        isAsideFormOpen: false,
      };
    default:
      return state;
  }
};
