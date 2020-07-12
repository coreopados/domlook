import {
    SORT_TYPE_RENT,
    SORT_TYPE_SELL,
    SORT_STATUS_HOUSE,
    SORT_STATUS_APARTMENT,
    SORT_CITY_KIEV,
    SORT_CITY_KHARKOV,
    SORT_CITY_DNEPR,
    SORT_CITY_LVOV,
    SORT_CITY_ODESSA,

    FILTER_STATUS_RENT,
    FILTER_STATUS_SALE,
    FILTER_STATUS_DAILYRENT,

    FILTER_TYPE_HOUSE,
    FILTER_TYPE_APPARTMENT,
    FILTER_TYPE_COMMERCE,

    FILTER_TOTAL_AREA,
    FILTER_FLOOR,
    FILTER_ROOM,
    FILTER_PROP_WALLS,
    FILTER_HEATING,
    FILTER_CEILING_HEIGHT,
    FILTER_BUILDING,
    FILTER_OFFER,
    FILTER_REGION,
    FILTER_CITY,
    FILTER_DISTRICT,
    FILTER_PRICE_FROM,
    FILTER_PRICE_TO,

    FILTER_CATEGORY_NEWS,
    ACTIVE_CATEGORY_NEWS,


    RESET_FILTERS
} from './constants';

const initialState = {
    typeFilter: '',
    statusFilter: '',
    cityFilter: '',
    totalAreaFilter: '',
    floorFilter: '',
    roomsFilter: '',
    propWallsFilter: '',
    propHeatingFilter: '',
    propCeilingHeightFilter: '',
    propBuildingFilter: '',
    propOfferFilter: '',
    priceFromFilter: '',
    priceToFilter: '',
    propRegionFilter: '',
    propCityFilter: '',
    propDistrictFilter: '',
    activeCategoryNews: '',
    filterCategoryNews: ''
}
export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        //сортировка по цене
        case SORT_TYPE_RENT:
            return {
                ...state,
                typeFilter: "rent",
                statusFilter: '',
                cityFilter: ''
            };
        case SORT_TYPE_SELL:
            return {
                ...state,
                typeFilter: "sell",
                statusFilter: '',
                cityFilter: ''
            };

        //сортировка по квартира\дом
        case SORT_STATUS_HOUSE:
            return {
                ...state,
                statusFilter: "house",
                typeFilter: "",
                cityFilter: ''
            };
        case SORT_STATUS_APARTMENT:
            return {
                ...state,
                statusFilter: "apartment",
                typeFilter: "",
                cityFilter: ''
            };


        //сортировка по городам
        case SORT_CITY_KIEV:
            return {
                ...state,
                cityFilter: "Kiev",
                statusFilter: "",
                typeFilter: "",
            };
        case SORT_CITY_KHARKOV:
            return {
                ...state,
                cityFilter: "Kharkov",
                statusFilter: "",
                typeFilter: "",
            };
        case SORT_CITY_DNEPR:
            return {
                ...state,
                cityFilter: "Dnepr",
                statusFilter: "",
                typeFilter: "",
            };
        case SORT_CITY_LVOV:
            return {
                ...state,
                cityFilter: "Lvov",
                statusFilter: "",
                typeFilter: "",
            };
        case SORT_CITY_ODESSA:
            return {
                ...state,
                cityFilter: "Odessa",
                statusFilter: "",
                typeFilter: "",
            };

        case FILTER_STATUS_RENT:
            return {
                ...state,
                typeFilter: 'rent'
            };
        case FILTER_STATUS_SALE:
            return {
                ...state,
                typeFilter: 'sale'
            };
        case FILTER_STATUS_DAILYRENT:
            return {
                ...state,
                typeFilter: 'dailyRent'
            };


        case FILTER_TYPE_HOUSE:
            return {
                ...state,
                statusFilter: 'house'
            };
        case FILTER_TYPE_APPARTMENT:
            return {
                ...state,
                statusFilter: 'apartment'
            };
        case FILTER_TYPE_COMMERCE:
            return {
                ...state,
                statusFilter: 'commerce'
            };

        case FILTER_TOTAL_AREA:
            return {
                ...state,
                totalAreaFilter: action.payload
            };
        case FILTER_FLOOR:
            return {
                ...state,
                floorFilter: action.payload
            };
        case FILTER_ROOM:
            return {
                ...state,
                roomsFilter: action.payload
            };
        case FILTER_PROP_WALLS:
            return {
                ...state,
                propWallsFilter: action.payload
            };
        case FILTER_HEATING:
            return {
                ...state,
                propHeatingFilter: action.payload
            };
        case FILTER_CEILING_HEIGHT:
            return {
                ...state,
                propCeilingHeightFilter: action.payload
            };
        case FILTER_BUILDING:
            return {
                ...state,
                propBuildingFilter: action.payload
            };
        case FILTER_OFFER:
            return {
                ...state,
                propOfferFilter: action.payload
            };
        case FILTER_REGION:
            return {
                ...state,
                propRegionFilter: action.payload
            };
        case FILTER_CITY:
            return {
                ...state,
                propCityFilter: action.payload
            };
        case FILTER_DISTRICT:
            return {
                ...state,
                propDistrictFilter: action.payload
            };
        case FILTER_PRICE_FROM:
            return {
                ...state,
                priceFromFilter: action.payload
            };
        case FILTER_PRICE_TO:
            return {
                ...state,
                priceToFilter: action.payload
            };

        //новости
        case FILTER_CATEGORY_NEWS:
            return {
                ...state,
                filterCategoryNews: action.payload,
            };
        case ACTIVE_CATEGORY_NEWS:
            return {
                ...state,
                activeCategoryNews: action.payload,
            };


        case RESET_FILTERS:
            return {
                ...state,
                typeFilter: '',
                statusFilter: '',
                cityFilter: '',
                totalArea: '',
                floorFilter: '',
                roomsFilter: '',
                propWallsFilter: '',
                propHeatingFilter: '',
                propCeilingHeightFilter: '',
                propBuildingFilter: '',
                propOfferFilter: '',
                priceFromFilter: '',
                priceToFilter: '',
                propRegionFilter: '',
                propCityFilter: '',
                propDistrictFilter: '',
                filterCategoryNews: '',
                activeCategoryNews: ''
            };


        default:
            return state;
    }
}