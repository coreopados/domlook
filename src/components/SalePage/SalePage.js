import React, { useMemo } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../CommonSection.scss";
import Loader from "react-loader-spinner";
import { Navigation } from "../CommonParts/Navigation/Navigation";
import { TopFilters } from "../CommonParts/TopFilters/TopFilters";
import { AdsGrid } from "../CommonParts/AdsListLooks/AdsGrid/AdsGrid";
import { AdsList } from "../CommonParts/AdsListLooks/AdsList/AdsList";
import { PaginationSale } from "../CommonParts/Pagination/PaginationSalePage";
import { AsideFilters } from "../../components/ReduxForms/FiltersForm/AsideFilters";
// import { handleLoadAds } from "../../redux/actionCreators";
import About from "../CommonParts/About/About";

const SalePage = ({
  ads,
  isLoaded,
  isLoading,
  orientation,
  match,
  currentPageSale,
  itemsPerPage,
  sort_price,
  sort_date,

  // loadData,
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

  let saleAds = useMemo(() => ads.filter((ad) => ad.prop_status === "sale"), [ads]);
  const List = orientation === "vertical" ? AdsGrid : AdsList;

  console.log(propRegionFilter,
    propCityFilter,
    propDistrictFilter)

  //по id
  if (idFilter) {
    saleAds = saleAds.filter((ad) => ad.id === Number(idFilter))
  }

  //по типу
  if (typeFilter) {
    saleAds = saleAds.filter((ad) => ad.prop_type === typeFilter)
  }

  //по статусу
  if (statusFilter) {
    saleAds = saleAds.filter((ad) => ad.prop_status === statusFilter)
  }

  // по городу
  if (cityFilter === "Kiev") {
    saleAds = saleAds.filter((ad) => ad.prop_city === 'Киев')
  } else if (cityFilter === "Kharkov") {
    saleAds = saleAds.filter((ad) => ad.prop_city === 'Харьков')
  } else if (cityFilter === "Odessa") {
    saleAds = saleAds.filter((ad) => ad.prop_city === 'Одесса')
  } else if (cityFilter === "Dnepr") {
    saleAds = saleAds.filter((ad) => ad.prop_city === 'Днепр')
  } else if (cityFilter === "Lvov") {
    saleAds = saleAds.filter((ad) => ad.prop_city === 'Львов')
  }

  //по площади
  if (totalAreaFilter !== "") {
    saleAds = saleAds.filter((ad) => Math.floor(ad.total_area) >= Math.floor(totalAreaFilter))
  }

  //по этажу
  if (floorFilter !== "") {
    saleAds = saleAds.filter((ad) => Math.floor(ad.floor) <= Math.floor(floorFilter))
  }

  //по количеству комнат
  if (roomsFilter !== "") {
    saleAds = saleAds.filter((ad) => ad.rooms === roomsFilter)
  }

  //по типу стен
  if (propWallsFilter !== '') {
    saleAds = saleAds.filter((ad) => ad.prop_walls === propWallsFilter)
  }

  //по типу предложения
  if (propOfferFilter !== '') {
    saleAds = saleAds.filter((ad) => ad.prop_offer === propOfferFilter)
  }

  //по типу отопления
  if (propHeatingFilter !== '') {
    saleAds = saleAds.filter((ad) => ad.prop_heating === propHeatingFilter)
  }

  //по типу здания
  if (propBuildingFilter !== "") {
    saleAds = saleAds.filter((ad) => ad.prop_building === propBuildingFilter)
  }

  //по высоте потолков
  if (propCeilingHeightFilter !== "") {
    saleAds = saleAds.filter((ad) => Math.floor(ad.ceiling_height) <= Math.floor(propCeilingHeightFilter))
  }

  //по области
  if (propRegionFilter) {
    saleAds = saleAds.filter((ad) => ad.prop_region === propRegionFilter)
  }
  //по городу
  if (propCityFilter) {
    saleAds = saleAds.filter((ad) => ad.prop_city === propCityFilter)
  }
  //по району
  if (propDistrictFilter) {
    saleAds = saleAds.filter((ad) => ad.prop_district === propDistrictFilter)
  }
  //по цене от
  if (priceFromFilter !== "") {
    saleAds = saleAds.filter((ad) => Math.floor(ad.price) >= Math.floor(priceFromFilter))
  }
  //по цене до
  if (priceToFilter !== "") {
    saleAds = saleAds.filter((ad) => Math.floor(ad.price) <= Math.floor(priceToFilter))
  }



  //по удобствам
  if (featuresArr !== false) {
    var keys1 = [];
    for (var key1 in featuresArr) {
      keys1.push(key1)
    }
    saleAds = saleAds.filter((ad) => ad.prop_features)
    saleAds = saleAds.filter(item => item.prop_features.some(i => (keys1).includes(i)))
  }

  //по типу сделки
  if (typeTransaction !== false) {
    var keys2 = [];
    for (var key2 in typeTransaction) {
      keys2.push(key2)
    }
    saleAds = saleAds.filter((ad) => ad.prop_features_add)
    saleAds = saleAds.filter(item => item.prop_features_add.some(i => (keys2).includes(i)))
  }

  //фильтр цен по низкой/по высокой
  sort_price === 'low-price' ? saleAds = saleAds.sort((prev, next) => prev.price - next.price) : saleAds = saleAds.sort((prev, next) => next.price - prev.price);


  //фильтр по дате 0/7/30
  const lastMonth = new Date().getTime() - 86400000 * 30;
  const lastWeek = new Date().getTime() - 86400000 * 7;
  const today = new Date().getTime() - 86400000;


  if (Number(sort_date) === 31) {
    saleAds = saleAds.filter((ad) => Date.parse(ad.post_date) >= lastMonth)
  } else if (Number(sort_date) === 7) {
    saleAds = saleAds.filter((ad) => Date.parse(ad.post_date) >= lastWeek)
  } else if (Number(sort_date) === 0) {
    saleAds = saleAds.filter((ad) => Date.parse(ad.post_date) >= today)
  } else if (sort_date === 'false') {
    saleAds = saleAds.filter((ad) => ad)
  }


  const indexOfLastAd = currentPageSale * itemsPerPage;
  const indexOfFirstAd = indexOfLastAd - itemsPerPage;
  const currentAds = saleAds.slice(indexOfFirstAd, indexOfLastAd);

  return (
    <main className="common-main" >
      <Navigation pageName="Продажа" regionFilter={propRegionFilter} cityFilter={propCityFilter} districtFilter={propDistrictFilter} typeFilter={typeFilter} statusFilter={statusFilter} />
      <section className="common-section" >
        <div className="container" >
          <div className="common-section__wrapper" >
            <AsideFilters
              typeFilter={typeFilter}
              priceFrom={priceFromFilter}
              priceTo={priceToFilter}
              match={match}
              statusFilter={statusFilter}
              regionFilter={propRegionFilter}
              cityFilter={propCityFilter}
              districtFilter={propDistrictFilter}
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
            <div className="common-section__block" >

              {isLoading && (<div className="loader-wrapper" >
                <Loader type="Puff" color="#313237" height={80} width={80} /> </div>)
              }
              < TopFilters match={match} totalAdsSale={saleAds.length} sortPrice={sort_price} sortDate={sort_date} />
              < List ads={currentAds} match={match} />
              { /* {isLoaded && <List ads={saleAds} match={match} sortPrice={sort_price} sortDate={sort_by_date} />} */}
              {(saleAds.length > 9) && < PaginationSale totalItems={saleAds.length} />}
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
  currentPageSale: state.paginationReducer.currentPageSale,
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

// const mapDispatchToProps = (dispatch) => ({
//   loadData: () => dispatch(handleLoadAds())
// })

const Enhanced = connect(mapStateToProps, null)(SalePage);

export { Enhanced as SalePage };

SalePage.propTypes = {
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
  // loadData: PropTypes.func.isRequired,
  orientation: PropTypes.string.isRequired,
  match: PropTypes.shape().isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPageSale: PropTypes.number.isRequired,
  statusFilter: PropTypes.string.isRequired,
  cityFilter: PropTypes.string.isRequired,
  totalAreaFilter: PropTypes.string.isRequired,
  propWallsFilter: PropTypes.string.isRequired,
  propOfferFilter: PropTypes.string.isRequired,
  propHeatingFilter: PropTypes.string.isRequired,
  propBuildingFilter: PropTypes.string.isRequired,
  propCeilingHeightFilter: PropTypes.string.isRequired,
};