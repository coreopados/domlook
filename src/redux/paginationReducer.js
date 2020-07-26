import {
    PAGINATE_SALE,
    PAGINATE_RENT,
    PAGINATE_DAILYRENT,
    PAGINATE_NEWS,
    PAGINATE_COMMON,
} from './constants';

export const initialState = {
    itemsPerPage: 9,
    currentPageSale: 1,
    currentPageRent: 1,
    currentPageDailyRent: 1,
    currentPageNews: 1,
    currentPageCommon: 1,
};

export const paginationReducer = (state = initialState, action) => {



    // console.log(state)

    switch (action.type) {
        //пагинация
        case PAGINATE_SALE:
            return {
                ...state,
                currentPageSale: action.payload,
            };
        case PAGINATE_RENT:
            return {
                ...state,
                currentPageRent: action.payload,
            };
        case PAGINATE_DAILYRENT:
            return {
                ...state,
                currentPageDailyRent: action.payload,
            };
        case PAGINATE_COMMON:
            return {
                ...state,
                currentPageCommon: action.payload,
            };
        case PAGINATE_NEWS:
            return {
                ...state,
                currentPageNews: action.payload,
            };
        default:
            return state;
    }
}