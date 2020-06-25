import {
    SORT_TYPE_RENT,
    SORT_TYPE_SELL,
    SORT_STATUS_HOUSE,
    SORT_STATUS_APARTMENT,
    RESET_FILTERS
} from './constants';

const initialState = {
    typeFilter: '',
    statusFilter: ''
}
export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        //сортировка по цене
        case SORT_TYPE_RENT:
            return {
                ...state,
                typeFilter: "rent",
            };
        case SORT_TYPE_SELL:
            return {
                ...state,
                typeFilter: "sell",
            };
        case SORT_STATUS_HOUSE:
            return {
                ...state,
                statusFilter: "house",
            };
        case SORT_STATUS_APARTMENT:
            return {
                ...state,
                statusFilter: "apartment",
            };
        case RESET_FILTERS:
            return {
                ...state,
                typeFilter: '',
                statusFilter: ''
            };


        default:
            return state;
    }
}