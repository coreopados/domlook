import {
  SET_ADS,
  SET_IS_LOADED,
  SET_IS_LOADING,
  SET_VERTICAL_ORIENTATION,
  SET_HORIZONTAL_ORIENTATION,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  SET_ABOUT_TEXT,
  SET_NEWS,

  // FINDED_ADS_LENGTH,

  // PAGINATE,
  PAGINATE_SALE,
  PAGINATE_RENT,
  PAGINATE_DAILYRENT,
  PAGINATE_NEWS,

  CURRENT_CATEGORY_NEWS,

  SORT_LOW_PRICE,
  SORT_HIGHT_PRICE,
  // SET_SELECTED_PRICE,

  SORT_BY_TODAY,
  SORT_BY_WEEK,
  SORT_BY_MOUNTH,
  ACTIVE_TOP_FILTER_PRICE,
  ACTIVE_TOP_FILTER_DATE,
  FILTER_CATEGORY_NEWS,
  FILTER_CATEGORY_NEWS_BY_NEWS,
  FILTER_CATEGORY_NEWS_BY_TIPSGKH,
  FILTER_CATEGORY_NEWS_BY_NEWBUILD,
  FILTER_CATEGORY_NEWS_BY_MARKET,
  FILTER_CATEGORY_NEWS_BY_ANLITIC,
  FILTER_CATEGORY_NEWS_BY_TIPS_ARRANGEMENT,
  FILTER_CATEGORY_NEWS_BY_FINANCE,

} from './constants';
// import { loadAds } from '../api/loadAds';
import adsData from '../api/testData.json';
import newsData from '../api/testNewsData.json';

export const setAdsCreator = ads => ({
  type: SET_ADS,
  payload: ads,
});

export const startLoadingCreator = () => ({
  type: SET_IS_LOADING,
  payload: true,
});

export const stopLoadingCreator = () => ({
  type: SET_IS_LOADING,
  payload: false,
});

export const setIsLoadedCreator = () => ({
  type: SET_IS_LOADED,
  payload: true,
});

//покзать вид плиткой 
export const setVerticalOrientationCreator = () => ({
  type: SET_VERTICAL_ORIENTATION,
});
//покзать вид списком
export const setHorizontalOrientationCreator = () => ({
  type: SET_HORIZONTAL_ORIENTATION,
});

//сортировка по низкой цене
export const sortLowPriceCreator = () => ({
  type: SORT_LOW_PRICE,
});

//сортировка по высокой цене
export const sortHightPriceCreator = () => ({
  type: SORT_HIGHT_PRICE,
});

//сортировка за сегодня 
export const sortByTodayCreator = () => ({
  type: SORT_BY_TODAY,
})

//сортировка за неделю
export const sortByWeekCreator = () => ({
  type: SORT_BY_WEEK,
})

//сортировка за месяц
export const sortByMounthCreator = () => ({
  type: SORT_BY_MOUNTH,
})

// export const setSelectedOptionCreator = option => ({
//   type: SET_SELECTED_PRICE,
//   payload: option,
// })

//активный фильтр "по цене"
export const activeTopFilterPriceCreator = () => ({
  type: ACTIVE_TOP_FILTER_PRICE,
})
//активный фильтр "по дате"
export const activeTopFilterDateCreator = () => ({
  type: ACTIVE_TOP_FILTER_DATE,
})


// длинна найденных обьявлений
// export const findedAdsLength = () => ({
//   type: FINDED_ADS_LENGTH,
// })




////новости

//фильтры по категориям
export const filterCategoryNews = () => ({
  type: FILTER_CATEGORY_NEWS,
})
export const filterCategoryByNews = () => ({
  type: FILTER_CATEGORY_NEWS_BY_NEWS,
})
export const filterCategoryByTips = () => ({
  type: FILTER_CATEGORY_NEWS_BY_TIPSGKH,
})
export const filterCategoryByNewBuild = () => ({
  type: FILTER_CATEGORY_NEWS_BY_NEWBUILD,
})
export const filterCategoryByMarket = () => ({
  type: FILTER_CATEGORY_NEWS_BY_MARKET,
})
export const filterCategoryByAnalitic = () => ({
  type: FILTER_CATEGORY_NEWS_BY_ANLITIC,
})
export const filterCategoryByTipsArrangement = () => ({
  type: FILTER_CATEGORY_NEWS_BY_TIPS_ARRANGEMENT,
})
export const filterCategoryByFinance = () => ({
  type: FILTER_CATEGORY_NEWS_BY_FINANCE,
})





//добавление в избранное
export const addFavouriteCreator = ad => ({
  type: ADD_FAVOURITE,
  payload: ad,
});

//удаление из избранного
export const removeFavouriteCreator = ad => ({
  type: REMOVE_FAVOURITE,
  payload: ad,
});


export const setAboutTextCreator = () => ({
  type: SET_ABOUT_TEXT,
});

export const setNewsCreator = news => ({
  type: SET_NEWS,
  payload: news,
});

//пагинация
export const paginateSaleCreator = number => ({
  type: PAGINATE_SALE,
  payload: number,
});
export const paginateRentCreator = number => ({
  type: PAGINATE_RENT,
  payload: number,
});
export const paginateDailyRentCreator = number => ({
  type: PAGINATE_DAILYRENT,
  payload: number,
});
export const paginateNewsCreator = number => ({
  type: PAGINATE_NEWS,
  payload: number,
});

// export const handleLoad = () => {
//   return (dispatch) => {
//     dispatch(startLoadingCreator());
//     loadAds(info).then((ads) => {
//       console.log(info)
//       dispatch(setAdsCreator(ads));
//       dispatch(setIsLoadedCreator());
//       dispatch(stopLoadingCreator());
//     });
//   };
// };

export const handleLoadAds = () => {
  return (dispatch) => {
    dispatch(startLoadingCreator());
    // fetch(info).then((ads) => {
    //   console.log(info)
    //   dispatch(setAdsCreator(ads));
    //   dispatch(setIsLoadedCreator());
    //   dispatch(stopLoadingCreator());
    // });
    dispatch(setAdsCreator(adsData));
    dispatch(setIsLoadedCreator());
    dispatch(stopLoadingCreator());
  };
};

export const handleLoadNews = () => {
  return (dispatch) => {
    dispatch(startLoadingCreator());
    // fetch(info).then((ads) => {
    //   console.log(info)
    //   dispatch(setAdsCreator(ads));
    //   dispatch(setIsLoadedCreator());
    //   dispatch(stopLoadingCreator());
    // });
    dispatch(setNewsCreator(newsData));
    dispatch(setIsLoadedCreator());
    dispatch(stopLoadingCreator());
  };
};

export const handleLoadNewsAds = () => {
  return (dispatch) => {
    dispatch(startLoadingCreator());
    // fetch(info).then((ads) => {
    //   console.log(info)
    //   dispatch(setAdsCreator(ads));
    //   dispatch(setIsLoadedCreator());
    //   dispatch(stopLoadingCreator());
    // });
    dispatch(setNewsCreator(newsData));
    dispatch(setAdsCreator(adsData));
    dispatch(setIsLoadedCreator());
    dispatch(stopLoadingCreator());
  };
};

// export const loadSingleAd = (id) => {

//   return (dispatch) => {
//     dispatch(startLoadingCreator());
//     loadAds('http://localhost:5000/testData').then((ads) => {
//       const ad = ads.find(item => item.id === id);

//       dispatch(setAdsCreator(ad));
//       dispatch(setIsLoadedCreator());
//       dispatch(stopLoadingCreator());
//     });
//   };
// }


