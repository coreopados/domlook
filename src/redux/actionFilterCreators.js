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

} from './constants';


//покзать объявление "аренды"
export const filterStatusRentCreator = () => ({
  type: SORT_STATUS_RENT,
});
//покзать объявление "продажи"
export const filterStatusSellCreator = () => ({
  type: SORT_STATUS_SALE,
});
//покзать объявление "квартиры"
export const filterTypeApartmentCreator = () => ({
  type: SORT_TYPE_APARTMENT,
});
//покзать объявление "дома"
export const filterTypeHouseCreator = () => ({
  type: SORT_TYPE_HOUSE,
});

//покзать объявление "киев"
export const filterCityKievCreator = () => ({
  type: SORT_CITY_KIEV,
});
//покзать объявление "харьков"
export const filterCityKharkovCreator = () => ({
  type: SORT_CITY_KHARKOV,
});
//покзать объявление "днепр"
export const filterCityDneprCreator = () => ({
  type: SORT_CITY_DNEPR,
});
//покзать объявление "львов"
export const filterCityLvovCreator = () => ({
  type: SORT_CITY_LVOV,
});
//покзать объявление "одесса"
export const filterCityOdessaCreator = () => ({
  type: SORT_CITY_ODESSA,
});










