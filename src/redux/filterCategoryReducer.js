import {

  FILTER_CATEGORY_NEWS,
  FILTER_CATEGORY_NEWS_BY_NEWS,
  FILTER_CATEGORY_NEWS_BY_TIPSGKH,
  FILTER_CATEGORY_NEWS_BY_NEWBUILD,
  FILTER_CATEGORY_NEWS_BY_MARKET,
  FILTER_CATEGORY_NEWS_BY_ANLITIC,
  FILTER_CATEGORY_NEWS_BY_TIPS_ARRANGEMENT,
  FILTER_CATEGORY_NEWS_BY_FINANCE,

} from './constants';


const initialState = {
  // paginationState,
  filterCategoryNews: '',
};

export const filterCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    //новости
    case FILTER_CATEGORY_NEWS:
      return {
        ...state,
        filterCategoryNews: '',

      };
    case FILTER_CATEGORY_NEWS_BY_NEWS:
      return {
        ...state,
        filterCategoryNews: 'Новости',

      };
    case FILTER_CATEGORY_NEWS_BY_ANLITIC:
      return {
        ...state,
        // currentPageNews: 1,
        filterCategoryNews: 'Аналитика',

      };
    case FILTER_CATEGORY_NEWS_BY_TIPSGKH:
      return {
        ...state,
        filterCategoryNews: 'Новости и советы ЖКХ',

      };
    case FILTER_CATEGORY_NEWS_BY_NEWBUILD:
      return {
        ...state,
        filterCategoryNews: 'Новости новостроек',

      };
    case FILTER_CATEGORY_NEWS_BY_MARKET:
      return {
        ...state,
        filterCategoryNews: 'Новости рынка',

      };
    case FILTER_CATEGORY_NEWS_BY_TIPS_ARRANGEMENT:
      return {
        ...state,
        filterCategoryNews: 'Советы по обустройству',

      };
    case FILTER_CATEGORY_NEWS_BY_FINANCE:
      return {
        ...state,
        filterCategoryNews: 'Финансы',

      };

    default:
      return state;
  }
};
