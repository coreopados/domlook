import {
  SORT_TYPE_RENT,
  SORT_TYPE_SELL,
  SORT_STATUS_HOUSE,
  SORT_STATUS_APARTMENT,
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

//сбросить фильтры
export const resetFilters = () => ({
  type: RESET_FILTERS,
})







