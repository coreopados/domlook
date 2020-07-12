import {
  FILTER_TYPE_HOUSE,
  FILTER_TYPE_APPARTMENT,
  FILTER_TYPE_COMMERCE,

  FILTER_STATUS_RENT,
  FILTER_STATUS_SALE,
  FILTER_STATUS_DAILYRENT,

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

  ADD_FEATURES,
  REMOVE_FEATURES,
  SET_FEATURES,
} from './constants';



export const houseStatusCreator = () => ({
  type: FILTER_TYPE_HOUSE,
});
export const appartmentStatusCreator = () => ({
  type: FILTER_TYPE_APPARTMENT,
});
export const commerceStatusCreator = () => ({
  type: FILTER_TYPE_COMMERCE,
});

export const rentTypeCreator = () => ({
  type: FILTER_STATUS_RENT,
})
export const saleTypeCreator = () => ({
  type: FILTER_STATUS_SALE,
})
export const dailyRentTypeCreator = () => ({
  type: FILTER_STATUS_DAILYRENT,
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


// export const featuresArrCreator = selectedOption => ({
//   type: FEATURES,
//   payload: selectedOption
// })

//добавление в избранное
export const addFeaturesCreator = ad => ({
  type: ADD_FEATURES,
  payload: ad,
});

//удаление из избранного
export const removeFeaturesCreator = ad => ({
  type: REMOVE_FEATURES,
  payload: ad,
});

export const setFeaturesCreator = ads => ({
  type: SET_FEATURES,
  payload: ads,
});






