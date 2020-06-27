import {
  SORT_TYPE_RENT,
  SORT_TYPE_SELL,
  SORT_STATUS_HOUSE,
  SORT_STATUS_APARTMENT,
  SORT_LOCATION_KIEV,
  SORT_LOCATION_KHARKOV,
  SORT_LOCATION_DNEPR,
  SORT_LOCATION_LVOV,
  SORT_LOCATION_ODESSA,
  RESET_FILTERS
} from './constants';


//покзать объявление "аренды"
export const filterTypeRentCreator = () => ({
  type: SORT_TYPE_RENT,
});
//покзать объявление "продажи"
export const filterTypeSellCreator = () => ({
  type: SORT_TYPE_SELL,
});
//покзать объявление "квартиры"
export const filterStatusApartmentCreator = () => ({
  type: SORT_STATUS_APARTMENT,
});
//покзать объявление "дома"
export const filterStatusHouseCreator = () => ({
  type: SORT_STATUS_HOUSE,
});

//покзать объявление "киев"
export const filterLocationKievCreator = () => ({
  type: SORT_LOCATION_KIEV,
});
//покзать объявление "харьков"
export const filterLocationKharkovCreator = () => ({
  type: SORT_LOCATION_KHARKOV,
});
//покзать объявление "днепр"
export const filterLocationDneprCreator = () => ({
  type: SORT_LOCATION_DNEPR,
});
//покзать объявление "львов"
export const filterLocationLvovCreator = () => ({
  type: SORT_LOCATION_LVOV,
});
//покзать объявление "одесса"
export const filterLocationOdessaCreator = () => ({
  type: SORT_LOCATION_ODESSA,
});


//сбросить фильтры
export const resetFilters = () => ({
  type: RESET_FILTERS,
})







