import {
  FILTER_STATUS,
  FILTER_TYPE,

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

  SET_FEATURES,
  SET_TYPETRANSACTION,
} from './constants';


export const propStatusFilterCreator = selectedOption => ({
  type: FILTER_STATUS,
  payload: selectedOption
});

export const typeFilterCreator = selectedOption => ({
  type: FILTER_TYPE,
  payload: selectedOption
})


export const totalAreaCreator = selectedOption => ({
  type: FILTER_TOTAL_AREA,
  payload: selectedOption
})

export const floorFilterCreator = selectedOption => ({
  type: FILTER_FLOOR,
  payload: selectedOption
})
export const roomFilterCreator = selectedOption => ({
  type: FILTER_ROOM,
  payload: selectedOption
})


export const propWallsFilterCreator = selectedOption => ({
  type: FILTER_PROP_WALLS,
  payload: selectedOption
})

export const propHeatingFilterCreator = selectedOption => ({
  type: FILTER_HEATING,
  payload: selectedOption
})
export const propCeilingHeightFilterCreator = selectedOption => ({
  type: FILTER_CEILING_HEIGHT,
  payload: selectedOption
})
export const propBuildingFilterCreator = selectedOption => ({
  type: FILTER_BUILDING,
  payload: selectedOption
})
export const propOfferFilterCreator = selectedOption => ({
  type: FILTER_OFFER,
  payload: selectedOption
})
export const propRegionFilterCreator = selectedOption => ({
  type: FILTER_REGION,
  payload: selectedOption
})
export const propCityFilterCreator = selectedOption => ({
  type: FILTER_CITY,
  payload: selectedOption
})
export const propDistrictFilterCreator = selectedOption => ({
  type: FILTER_DISTRICT,
  payload: selectedOption
})
export const priceFromFilterCreator = selectedOption => ({
  type: FILTER_PRICE_FROM,
  payload: selectedOption
})
export const priceToFilterCreator = selectedOption => ({
  type: FILTER_PRICE_TO,
  payload: selectedOption
})
export const IdFilterCreator = selectedOption => ({
  type: FILTER_ID,
  payload: selectedOption
})

//добавление удобств
export const setFeaturesCreator = ads => ({
  type: SET_FEATURES,
  payload: ads,
});

//добавление типа сделки
export const setTypeTransactionCreator = ads => ({
  type: SET_TYPETRANSACTION,
  payload: ads,
});






