import {
    SORT_TYPE_HOUSE,
    SORT_TYPE_APARTMENT,
    SORT_STATUS_RENT,
    SORT_STATUS_SALE,
    SORT_CITY_KIEV,
    SORT_CITY_KHARKOV,
    SORT_CITY_DNEPR,
    SORT_CITY_LVOV,
    SORT_CITY_ODESSA,

    FILTER_TYPE,
    FILTER_STATUS,

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
    SET_FEATURES,
    SET_TYPETRANSACTION,

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
    filterCategoryNews: '',
    featuresArr: [],
    typeTransaction: [],
}
export const filterReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        //сортировка по цене
        case SORT_TYPE_HOUSE:
            return {
                ...state,
                typeFilter: "house",
                statusFilter: '',
                cityFilter: ''
            };
        case SORT_TYPE_APARTMENT:
            return {
                ...state,
                typeFilter: "apartment",
                statusFilter: '',
                cityFilter: ''
            };

        //сортировка по квартира\дом
        case SORT_STATUS_RENT:
            return {
                ...state,
                statusFilter: "rent",
                typeFilter: "",
                cityFilter: ''
            };
        case SORT_STATUS_SALE:
            return {
                ...state,
                statusFilter: "sale",
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

        case FILTER_TYPE:
            return {
                ...state,
                typeFilter: action.payload
            };

        case FILTER_STATUS:
            return {
                ...state,
                statusFilter: action.payload
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
                propRegionFilter: action.payload,
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

        case SET_FEATURES:
            return {
                ...state,
                featuresArr: action.payload,
            };
        case SET_TYPETRANSACTION:
            return {
                ...state,
                typeTransaction: action.payload,
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
                activeCategoryNews: '',
                featuresArr: false,
                typeTransaction: false
            };


        default:
            return state;
    }
}