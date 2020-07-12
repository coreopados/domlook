import {
    SORT_PRICE,
} from './constants';

const initialState = {
    sort_price: 'low-price',
};

export const filterByPriceReducer = (state = initialState, action) => {
    switch (action.type) {
        //сортировка по цене
        case SORT_PRICE:
            return {
                ...state,
                sort_price: action.payload
            };
        default:
            return state;
    }
}