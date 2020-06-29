import {
  FILTER_TYPE_HOUSE,
  FILTER_TYPE_APPARTMENT,
  FILTER_TYPE_COMMERCE,
  FILTER_STATUS_RENT,
  FILTER_STATUS_SALE,
  FILTER_STATUS_DAILYRENT,
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







