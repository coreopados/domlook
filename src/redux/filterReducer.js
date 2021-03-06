
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

    SORT_PRICE,
    SORT_DATE,

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
    FILTER_ID,

    FILTER_CATEGORY_NEWS,
    ACTIVE_CATEGORY_NEWS,
    SET_FEATURES,
    SET_TYPETRANSACTION,
    ACTIVE_MAIN_FORM,
    ACTIVE_REG_FORM,

    IS_LOGGED,
    IS_LOGGED_IN,

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
    // featuresArr: false,
    featuresArr: false,
    typeTransaction: false,
    activeMainForm: 'loginForm',
    activeRegForm: 'privateReg',
    idFilter: '',
    isLogged: false,
    isLoggedStatus: false,
    sort_price: 'low-price',
    sort_date: 'false',

}
export const filterReducer = (state = initialState, action) => {


    switch (action.type) {

        //сортировка по цене
        case SORT_PRICE:
            return {
                ...state,
                sort_price: action.payload
            };

        //сортировка по дате
        case SORT_DATE:
            return {
                ...state,
                sort_date: action.payload,
            };

        // is showing Login
        case IS_LOGGED:
            return {
                ...state,
                isLogged: action.payload,
            };
        // is Login in
        case IS_LOGGED_IN:
            return {
                ...state,
                isLoggedStatus: action.payload,
            };

        //filter id
        case FILTER_ID:
            return {
                ...state,
                idFilter: action.payload,
            };


        //active main form
        case ACTIVE_MAIN_FORM:
            return {
                ...state,
                activeMainForm: action.payload,
            };
        case ACTIVE_REG_FORM:
            return {
                ...state,
                activeRegForm: action.payload,
            };

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
          console.log(action.payload)
          if(action.payload) {
            
          } else {
            return {
              ...state,
              featuresArr: action.payload,
            };
          }
            
        case SET_TYPETRANSACTION:
          if (action.payload) {
            return {
              ...state,
              // typeTransaction: action.payload,
              typeTransaction: {
                ...state.typeTransaction,
                ...action.payload,
              }
            };
          } else {
            return {
              ...state,
              typeTransaction: action.payload,
            }
          }
            



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
                filterCategoryNews: '',
                activeCategoryNews: '',
                featuresArr: false,
                typeTransaction: false,
                idFilter: '',
                sort_date: 'false'
            };


        default:
            return state;
    }
}