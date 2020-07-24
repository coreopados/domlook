import React, { useMemo } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../CommonSection.scss";
import Loader from "react-loader-spinner";
import { Navigation } from "../CommonParts/Navigation/Navigation";
import { AsideFilters } from "../../components/ReduxForms/FiltersForm/AsideFilters";
import { TopFilters } from "../CommonParts/TopFilters/TopFilters";
import { AdsGrid } from "../CommonParts/AdsListLooks/AdsGrid/AdsGrid";
import { AdsList } from "../CommonParts/AdsListLooks/AdsList/AdsList";
import { PaginationCommon } from "../CommonParts/Pagination/PaginationCommonPage";
import About from "../CommonParts/About/About";


const CommonAds = ({
  ads,
  isLoaded,
  isLoading,
  orientation,
  match,
  currentPageCommon,
  itemsPerPage,
  sort_price,
  sort_date,

  idFilter,
  typeFilter,
  totalAreaFilter,
  statusFilter,
  cityFilter,
  floorFilter,
  roomsFilter,
  propWallsFilter,
  propOfferFilter,
  propHeatingFilter,
  propBuildingFilter,
  propCeilingHeightFilter,
  propRegionFilter,
  propCityFilter,
  propDistrictFilter,
  priceFromFilter,
  priceToFilter,
  featuresArr,
  typeTransaction
}) => {
  console.log(propRegionFilter)
  let commonAds = useMemo(() => ads.filter((ad) => ad), [ads]);
  const List = orientation === "vertical" ? AdsGrid : AdsList;



  //по id
  if (idFilter) {
    commonAds = commonAds.filter((ad) => ad.id === Number(idFilter))
  }
  //по id
  if (idFilter) {
    commonAds = commonAds.filter((ad) => ad.id === Number(idFilter))
  }

  //по статусу
  if (statusFilter) {
    commonAds = commonAds.filter((ad) => ad.prop_status === statusFilter)
  }
  //по площади
  if (totalAreaFilter !== "") {
    commonAds = commonAds.filter((ad) => Math.floor(ad.total_area) >= Math.floor(totalAreaFilter))
  }
  //по этажу
  if (floorFilter !== "") {
    commonAds = commonAds.filter((ad) => Math.floor(ad.floor) <= Math.floor(floorFilter))
  }
  //по количеству комнат
  if (roomsFilter !== "") {
    commonAds = commonAds.filter((ad) => ad.rooms === roomsFilter)
  }
  //по типу стен
  if (propWallsFilter !== '') {
    commonAds = commonAds.filter((ad) => ad.prop_walls === propWallsFilter)
  }
  //по типу предложения
  if (propOfferFilter !== '') {
    commonAds = commonAds.filter((ad) => ad.prop_offer === propOfferFilter)
  }
  //по типу отопления
  if (propHeatingFilter !== '') {
    commonAds = commonAds.filter((ad) => ad.prop_heating === propHeatingFilter)
  }

  //по типу здания
  if (propBuildingFilter !== "") {
    commonAds = commonAds.filter((ad) => ad.prop_building === propBuildingFilter)
  }

  //по высоте потолков
  if (propCeilingHeightFilter !== "") {
    commonAds = commonAds.filter((ad) => Math.floor(ad.ceiling_height) <= Math.floor(propCeilingHeightFilter))
  }
  //по области
  if (propRegionFilter) {
    commonAds = commonAds.filter((ad) => ad.prop_region === propRegionFilter)
  }

  //по городу
  if (propCityFilter) {
    commonAds = commonAds.filter((ad) => ad.prop_city === propCityFilter)
  }
  //по району
  if (propDistrictFilter) {
    commonAds = commonAds.filter((ad) => ad.prop_district === propDistrictFilter)
  }
  //по цене от
  if (priceFromFilter !== "") {
    commonAds = commonAds.filter((ad) => Math.floor(ad.price) >= Math.floor(priceFromFilter))
  }
  //по цене до
  if (priceToFilter !== "") {
    commonAds = commonAds.filter((ad) => Math.floor(ad.price) <= Math.floor(priceToFilter))
  }

  //по удобствам
  if (featuresArr !== false) {
    var keys = [];
    for (var key in featuresArr) {
      keys.push(key)
    }
    commonAds = commonAds.filter((ad) => ad.prop_features)
    commonAds = commonAds.filter(item => item.prop_features.some(i => (keys).includes(i)))
  }

  //по типу сделки
  if (typeTransaction !== false) {
    var keys = [];
    for (var key in typeTransaction) {
      keys.push(key)
    }
    commonAds = commonAds.filter((ad) => ad.prop_features_add)
    commonAds = commonAds.filter(item => item.prop_features_add.some(i => (keys).includes(i)))
  }

  // по цене
  sort_price === 'low-price' ? commonAds = commonAds.sort((prev, next) => prev.price - next.price) : commonAds = commonAds.sort((prev, next) => next.price - prev.price);

  //фильтр по дате 0/7/30
  const lastMonth = new Date().getTime() - 86400000 * 30;
  const lastWeek = new Date().getTime() - 86400000 * 7;
  const today = new Date().getTime() - 86400000;


  if (Number(sort_date) === 31) {
    commonAds = commonAds.filter((ad) => Date.parse(ad.post_date) >= lastMonth)
  } else if (Number(sort_date) === 7) {
    commonAds = commonAds.filter((ad) => Date.parse(ad.post_date) >= lastWeek)
  } else if (Number(sort_date) === 0) {
    commonAds = commonAds.filter((ad) => Date.parse(ad.post_date) >= today)
  }

  const indexOfLastAd = currentPageCommon * itemsPerPage;
  const indexOfFirstAd = indexOfLastAd - itemsPerPage;
  const currentAds = commonAds.slice(indexOfFirstAd, indexOfLastAd);

  console.log(propRegionFilter)


  return (
    <main className="common-main" >
      <Navigation pageName="Объявления" />
      <section className="common-section" >
        <div className="container" >
          <div className="common-section__wrapper" >
            <AsideFilters
              idFilter={idFilter}
              typeFilter={typeFilter}
              priceFrom={priceFromFilter}
              priceTo={priceToFilter}
              match={match}
              statusFilter={statusFilter}
              // regionFilter={propRegionFilter}
              features={featuresArr}
              transaction={typeTransaction}

              wallsFilter={propWallsFilter}
              heatingFilter={propHeatingFilter}
              ceilingHeightFilter={propCeilingHeightFilter}
              buildingFilter={propBuildingFilter}
              offerFilter={propOfferFilter}
              roomFilter={roomsFilter}
              floorFilter={floorFilter}
              totalAreaFilter={totalAreaFilter}
            />
            {console.log(propRegionFilter)}
            <div className="common-section__block" >

              {isLoading && (<div className="loader-wrapper" >
                <Loader type="Puff" color="#313237" height={80} width={80} /> </div>)
              }
              {isLoaded && < TopFilters match={match} totalAdsCommon={commonAds.length} />}
              {isLoaded && < List ads={currentAds} match={match} sortPrice={sort_price} sortDate={sort_date} />}
              { /* {isLoaded && <List ads={commonAds} match={match} sortPrice={sort_price} sortDate={sort_by_date} />} */}
              {(commonAds.length > 9) && < PaginationCommon totalItems={commonAds.length} />}
              < About title="Продажа жилья в Украине" >
                <p className="about__text" >
                  Покупка или продажа всех видов недвижимости произойдет
                  максимально быстро, если вы воспользуетесь базой объявлений,
                  размещенных на сайте DomLook.com.Здесь представлен широкий
                  выбор объявлений о продаже и покупке домов, квартир, гаражей,
                  дач, офисов и магазинов. </p>
                <p className="about__text" >
                  Вся информация очень удобно структурирована.Поэтому, в
                  зависимости от предпочтений, вы можете разместить предложение,
                  либо же осуществить поиск недвижимости на первичном или
                  вторичном рынке;
                  в центре города или на окраине;
                  купить
                  скромную квартиру без посредников, или продать элитный дом
                  через агентство. </p>
                < p className="about__text" >
                  Для того, чтобы зря не терять время на просмотр тех вариантов,
                  которые вам не подходят, заранее определитесь с районом, типом
                  дома, высотой потолков, этажом, количеством комнат и их
                  площадью.Чем более точную информацию о покупке или продаже
                  недвижимости вы введете в поисковую систему сайта DomLook, тем
                  в большей степени полученные варианты будут соответствовать
                  вашим ожиданиям.Кроме того, самостоятельный поиск и покупка
                  недвижимости, без услуг посредников, позволит вам сэкономить
                  немалую сумму денег.Если же вы располагаете достаточными
                  денежными средствами, а времени у вас, наоборот, мало, то
                  стоит поручить все хлопоты по продаже или покупке недвижимости
                  опытному риелтору, который самостоятельно проанализирует
                  рынок, выберет подходящие варианты, предварительно встретится
                  с хозяевами, проверит документы и договорится о встречи в
                  удобное для вас время.Естественно, за такую услугу следует
                  заплатить, однако она значительно облегчает реализацию
                  поставленных задач. </p>
                < p className="about__text" >
                  Если при покупке недвижимости вам сложно сориентироваться и
                  понять, где конкретно находится выставленная на продажу
                  квартира или дом, то следует воспользоваться поиском
                  недвижимости на карте.Тогда вы сразу увидите, где находится
                  метро, магазины, рынки и какова общая транспортная и
                  социальная инфраструктура района.
                </p>
                < p className="about__text" >
                  Рассматривая те или иные варианты, не забывайте анализировать
                  и просчитывать все возможные плюсы и минусы приобретаемого
                  жилья.Посмотрите, в каком оно состоянии, требуется ли
                  проведение ремонта или даже перепланировки.Взвесьте свои силы
                  и финансовые возможности.
                </p>
                <p className="about__text" >
                  В случае необходимости продажи любого типа недвижимости, мы
                  также к вашим услугам.Вам потребуется только поместить
                  объявление о продаже в каталоге сайта DomLook.com.и ждать
                  звонки потенциальных покупателей.
                </p>
              </About>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const mapStateToProps = (state) => ({
  ads: state.mainReducer.ads,
  isLoaded: state.mainReducer.isLoaded,
  isLoading: state.mainReducer.isLoading,
  orientation: state.mainReducer.orientation,
  sort_price: state.filterReducer.sort_price,
  sort_date: state.filterReducer.sort_date,
  itemsPerPage: state.paginationReducer.itemsPerPage,
  currentPageCommon: state.paginationReducer.currentPageCommon,


  idFilter: state.filterReducer.idFilter,
  typeFilter: state.filterReducer.typeFilter,
  statusFilter: state.filterReducer.statusFilter,
  cityFilter: state.filterReducer.cityFilter,
  totalAreaFilter: state.filterReducer.totalAreaFilter,
  floorFilter: state.filterReducer.floorFilter,
  roomsFilter: state.filterReducer.roomsFilter,
  propWallsFilter: state.filterReducer.propWallsFilter,
  propOfferFilter: state.filterReducer.propOfferFilter,
  propHeatingFilter: state.filterReducer.propHeatingFilter,
  propBuildingFilter: state.filterReducer.propBuildingFilter,
  propCeilingHeightFilter: state.filterReducer.propCeilingHeightFilter,
  propRegionFilter: state.filterReducer.propRegionFilter,
  propCityFilter: state.filterReducer.propCityFilter,
  propDistrictFilter: state.filterReducer.propDistrictFilter,
  priceFromFilter: state.filterReducer.priceFromFilter,
  priceToFilter: state.filterReducer.priceToFilter,
  featuresArr: state.filterReducer.featuresArr,
  typeTransaction: state.filterReducer.typeTransaction,
});


const Enhanced = connect(mapStateToProps, null)(CommonAds);

export { Enhanced as CommonAds };

CommonAds.propTypes = {
  ads: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      prop_status: PropTypes.string.isRequired,
      prop_type: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      prop_city: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      total_area: PropTypes.string.isRequired,
      living_space: PropTypes.string.isRequired,
      floor: PropTypes.string.isRequired,
      total_floors: PropTypes.string.isRequired,
      rooms: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  isLoaded: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  orientation: PropTypes.string.isRequired,
  match: PropTypes.shape().isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPageCommon: PropTypes.number.isRequired,
  statusFilter: PropTypes.string.isRequired,
  cityFilter: PropTypes.string.isRequired,
  totalAreaFilter: PropTypes.string.isRequired,
  propWallsFilter: PropTypes.string.isRequired,
  propOfferFilter: PropTypes.string.isRequired,
  propHeatingFilter: PropTypes.string.isRequired,
  propBuildingFilter: PropTypes.string.isRequired,
  propCeilingHeightFilter: PropTypes.string.isRequired,
};