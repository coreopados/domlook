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
                // currentPageNews: 1
            };
        case FILTER_CATEGORY_NEWS_BY_ANLITIC:
            return {
                ...state,
                filterCategoryNews: 'Аналитика',
                // currentPageNews: 1
            };
        case FILTER_CATEGORY_NEWS_BY_TIPSGKH:
            return {
                ...state,
                filterCategoryNews: 'Новости и советы ЖКХ',
                // currentPageNews: 1
            };
        case FILTER_CATEGORY_NEWS_BY_NEWBUILD:
            return {
                ...state,
                filterCategoryNews: 'Новости новостроек',
                // currentPageNews: 1
            };
        case FILTER_CATEGORY_NEWS_BY_MARKET:
            return {
                ...state,
                filterCategoryNews: 'Новости рынка',
                // currentPageNews: 1
            };
        case FILTER_CATEGORY_NEWS_BY_TIPS_ARRANGEMENT:
            return {
                ...state,
                filterCategoryNews: 'Советы по обустройству',
                // currentPageNews: 1
            };
        case FILTER_CATEGORY_NEWS_BY_FINANCE:
            return {
                ...state,
                filterCategoryNews: 'Финансы',
                // currentPageNews: 1
            };

        default:
            return state;
    }
}