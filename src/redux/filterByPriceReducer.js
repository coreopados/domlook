import {
    SORT_LOW_PRICE,
    SORT_HIGHT_PRICE,
} from './constants';

const initialState = {
    sort_price: 'low-price',
    // selectedOptionPrice: 'low-price',
};

export const filterByPriceReducer = (state = initialState, action) => {
    switch (action.type) {
        //сортировка по цене
        case SORT_LOW_PRICE:
            return {
                ...state,
                sort_price: "low-price",
            };
        case SORT_HIGHT_PRICE:
            return {
                ...state,
                sort_price: "hight-price",
            };
        default:
            return state;
    }
}