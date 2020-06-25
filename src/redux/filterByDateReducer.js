import {
    SORT_BY_TODAY,
    SORT_BY_WEEK,
    SORT_BY_MOUNTH,
} from './constants';

const initialState = {
    sort_by_date: 0,
};

export const filterByDateReducer = (state = initialState, action) => {
    switch (action.type) {
        //сортировка по дате
        case SORT_BY_TODAY:
            return {
                ...state,
                sort_by_today: 0,
            };
        case SORT_BY_WEEK:
            return {
                ...state,
                sort_by_today: 7,
            };
        case SORT_BY_MOUNTH:
            return {
                ...state,
                sort_by_today: 30,
            };

        default:
            return state;
    }
}