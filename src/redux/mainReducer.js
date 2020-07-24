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
  USER_ID
} from './constants';

const initialState = {
  isLoading: true,
  isLoaded: false,
  ads: [],
  orientation: 'horizontal',
  favourites: [],
  showAllAbout: false,
  news: [],
  userId: '',
};



export const mainReducer = (state = initialState, action) => {

  // console.log(state)

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
      }
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


    default:
      return state;

  }
};