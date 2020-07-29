
import React, { useMemo, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../CommonSection.scss";
import Loader from "react-loader-spinner";
import { Navigation } from "../CommonParts/Navigation/Navigation";
import { TopFilters } from "../CommonParts/TopFilters/TopFilters";
import { AdsGrid } from "../CommonParts/AdsListLooks/AdsGrid/AdsGrid";
import { AdsList } from "../CommonParts/AdsListLooks/AdsList/AdsList";
// import { PaginationRent } from "../CommonParts/Pagination/PaginationRentPage";
import { Pagination } from "../CommonParts/Pagination/Pagination";
import { AsideFilters } from "../../components/ReduxForms/FiltersForm/AsideFilters";
import About from "../CommonParts/About/About";
import { resetPaginationCreator } from "../../redux/actionCreators";

const RentPage = ({
  ads,
  isLoaded,
  isLoading,
  orientation,
  match,
  itemsPerPage,
  currentPageRent,
  currentPage,
  sort_price,
  sort_date,
  resetPagination,

  idFilter,
  typeFilter,
  statusFilter,
  cityFilter,
  totalAreaFilter,
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

  const location = useLocation();

  useEffect(() => {
    resetPagination();
  }, [
    location,
    typeFilter,
    typeFilter,
    statusFilter,
    cityFilter,
    totalAreaFilter,
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
    typeTransaction,
    sort_price
  ]);

  let rentAds = useMemo(() => ads.filter((ad) => ad.prop_status === "rent"), [ads]);
  const List = orientation === "vertical" ? AdsGrid : AdsList;



  //по id
  if (idFilter) {
    rentAds = rentAds.filter((ad) => ad.id === Number(idFilter))
  }


  //по типу
  if (typeFilter) {
    rentAds = rentAds.filter((ad) => ad.prop_type === typeFilter)
  }
  //по статусу
  if (statusFilter) {
    rentAds = rentAds.filter((ad) => ad.prop_status === statusFilter)
  }


  //по городу
  if (cityFilter === "Kiev") {
    rentAds = rentAds.filter((ad) => ad.prop_city === 'Киев')
  } else if (cityFilter === "Kharkov") {
    rentAds = rentAds.filter((ad) => ad.prop_city === 'Харьков')
  } else if (cityFilter === "Odessa") {
    rentAds = rentAds.filter((ad) => ad.prop_city === 'Одесса')
  } else if (cityFilter === "Dnepr") {
    rentAds = rentAds.filter((ad) => ad.prop_city === 'Днепр')
  } else if (cityFilter === "Lvov") {
    rentAds = rentAds.filter((ad) => ad.prop_city === 'Львов')
  }

  //по площади
  if (totalAreaFilter !== "") {
    rentAds = rentAds.filter((ad) => Math.floor(ad.total_area) > Math.floor(totalAreaFilter))
  }

  //по этажу
  if (floorFilter !== "") {
    rentAds = rentAds.filter((ad) => Math.floor(ad.floor) < Math.floor(floorFilter))
  }

  //по количеству комнат
  if (roomsFilter !== "") {
    rentAds = rentAds.filter((ad) => ad.rooms === roomsFilter)
  }

  //по типу стен
  if (propWallsFilter !== '') {
    rentAds = rentAds.filter((ad) => ad.prop_walls === propWallsFilter)
  }

  //по типу предложения
  if (propOfferFilter !== '') {
    rentAds = rentAds.filter((ad) => ad.prop_offer === propOfferFilter)
  }

  //по типу отопления
  if (propHeatingFilter !== '') {
    rentAds = rentAds.filter((ad) => ad.prop_heating === propHeatingFilter)
  }


  //по типу здания
  if (propBuildingFilter !== "") {
    rentAds = rentAds.filter((ad) => ad.prop_building === propBuildingFilter)
  }

  //по высоте потолков
  if (propCeilingHeightFilter !== "") {
    rentAds = rentAds.filter((ad) => Math.floor(ad.ceiling_height) <= Math.floor(propCeilingHeightFilter))
  }

  //по области
  if (propRegionFilter) {
    rentAds = rentAds.filter((ad) => ad.prop_region === propRegionFilter)
  }
  //по городу
  if (propCityFilter) {
    rentAds = rentAds.filter((ad) => ad.prop_city === propCityFilter)
  }
  //по району
  if (propDistrictFilter) {
    rentAds = rentAds.filter((ad) => ad.prop_district === propDistrictFilter)
  }

  //по цене от
  if (priceFromFilter !== "") {
    rentAds = rentAds.filter((ad) => Math.floor(ad.price) >= Math.floor(priceFromFilter))
  }
  //по цене до
  if (priceToFilter !== "") {
    rentAds = rentAds.filter((ad) => Math.floor(ad.price) <= Math.floor(priceToFilter))
  }


  // const isEmpty = (featuresArr) => {

  //   for (let key in featuresArr) {
  //     // если тело цикла начнет выполняться - значит в объекте есть свойства
  //     return false;
  //   }
  //   return true;
  // }



  //по удобствам
  if (featuresArr !== false) {
    var keys1 = [];
    for (var key1 in featuresArr) {
      keys1.push(key1)
    }
    rentAds = rentAds.filter((ad) => ad.prop_features)
    rentAds = rentAds.filter(item => item.prop_features.some(i => (keys1).includes(i)))
  }

  // console.log(featuresArr)
  // console.log(typeTransaction)

  //по типу сделки
  if (typeTransaction !== false) {
    var keys2 = [];
    for (var key2 in typeTransaction) {
      keys2.push(key2)
    }
    rentAds = rentAds.filter((ad) => ad.prop_features_add)
    rentAds = rentAds.filter(item => item.prop_features_add.some(i => (keys2).includes(i)))
  }

  //фильтр цен по низкой/по высокой
  sort_price === 'low-price' ? rentAds = rentAds.sort((prev, next) => prev.price - next.price) : rentAds = rentAds.sort((prev, next) => next.price - prev.price);

  //фильтр по дате 0/7/30
  const lastMonth = new Date().getTime() - 86400000 * 30;
  const lastWeek = new Date().getTime() - 86400000 * 7;
  const today = new Date().getTime() - 86400000;


  if (Number(sort_date) === 31) {
    rentAds = rentAds.filter((ad) => Date.parse(ad.post_date) >= lastMonth)
  } else if (Number(sort_date) === 7) {
    rentAds = rentAds.filter((ad) => Date.parse(ad.post_date) >= lastWeek)
  } else if (Number(sort_date) === 0) {
    rentAds = rentAds.filter((ad) => Date.parse(ad.post_date) >= today)
  } else if (sort_date === 'false') {
    rentAds = rentAds.filter((ad) => ad)
  }

  // const indexOfLastAd = currentPageRent * itemsPerPage;
  // const indexOfFirstAd = indexOfLastAd - itemsPerPage;
  // const currentAds = rentAds.slice(indexOfFirstAd, indexOfLastAd);

  const indexOfLastAd = currentPage * itemsPerPage;
  const indexOfFirstAd = indexOfLastAd - itemsPerPage;
  const currentAds = rentAds.slice(indexOfFirstAd, indexOfLastAd);


  return (
    <main className="common-main">
      <Navigation pageName="Аренда" regionFilter={propRegionFilter} cityFilter={propCityFilter} districtFilter={propDistrictFilter} typeFilter={typeFilter} statusFilter={statusFilter} />
      <section className="common-section">
        <div className="container">
          <div className="common-section__wrapper">
            {isLoaded && (
              <AsideFilters
                idFilter={idFilter}
                typeFilter={typeFilter}
                priceFrom={priceFromFilter}
                priceTo={priceToFilter}
                match={match}
                statusFilter={statusFilter}
                regionFilter={propRegionFilter}
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
            )}

            <div className="common-section__block">
              <TopFilters match={match} totalAdsRent={rentAds.length} sortPrice={sort_price} sortDate={sort_date} />
              {isLoading && (
                <div className="loader-wrapper">
                  <Loader type="Puff" color="#313237" height={80} width={80} />
                </div>
              )}
              {isLoaded && <List ads={currentAds} match={match} sortPrice={sort_price} />}

              {/* (rentAds.length > 9) && <PaginationRent currentPage={currentPageRent} totalItems={rentAds.length} /> */}
              {(rentAds.length > 9) && <Pagination currentPage={currentPageRent} totalItems={rentAds.length} />}
              <About title="Аренда недвижимости в Украине">
                <p className="about__text">
                  Несмотря на то, что сегодня на рынке недвижимости существует
                  довольно большое количество предложений по длительной аренде
                  жилья, выбрать подходящий именно вам вариант оказывается не
                  таким простым делом. Упростить и ускорить поиск вам поможет
                  четко разработанная и структурированная база данных аренды
                  недвижимости, представленная на сайте DomLook.com.
                </p>
                <p className="about__text">
                  Благодаря эффективной системе поиска, вам не придется
                  просматривать неактуальные для вас предложения, например, по
                  аренде частного жилья или аренде дорогостоящих квартир в
                  новостройках. Четко продумав и задав системе нужные параметры,
                  вы в самые короткие сроки и без лишней волокиты выберите
                  именно то, что необходимо вам в настоящее время.
                </p>
                <p className="about__text">
                  Важным моментом является и то, что вся новая информация,
                  особенно о длительной аренде жилья без посредников,
                  подвергается детальной проверке. Такой подход нацелен на то,
                  чтобы оградить пользователей сайта DomLook.com. от
                  разочарований, когда предлагаемое для аренды жилье уже сдано,
                  или его описание вовсе не соответствует действительности.
                </p>
                <p className="about__text">
                  Воспользоваться услугами сайта DomLook.com. будет выгодно и
                  тем людям, которые хотят сдать жилье в долгосрочную аренду.
                  Исходя из того, что в условиях нестабильной финансовой
                  ситуации, многие граждане вложили свободные денежные средства
                  в покупку домов и квартир, рынок долгосрочной аренды жилья,
                  которое непосредственно предлагается хозяевами, стремительно
                  развивается. В то же время, и количество людей, не желающих
                  переплачивать деньги и стремящихся договариваться об аренде
                  жилья непосредственно с хозяевами, постоянно увеличивается.
                  Следовательно, если вы поместите свое объявление о
                  долгосрочной аренде квартиры, дома или дачи на страницах сайта
                  DomLook.com., то можете быть уверены, что в самое ближайшее
                  время им обязательно заинтересуются.
                </p>
                <p className="about__text">
                  В общем, если вы стали студентом или приехали в большой город
                  для того, чтобы найти перспективную, высокооплачиваемую
                  работу; устали от нотаций родителей и хотите
                  самостоятельности; приобрели новую квартиру, но там предстоит
                  длительный ремонт; хотите на весь весенне-летний период
                  перебраться за город, пожить в тишине и в окружении природы –
                  во всех этих, или других случаях, связанных потребностью в
                  аренде жилья на длительный срок, откройте сайт DomLook.com!
                  Множество представленных здесь вариантов аренды как бизнес,
                  так и жилой недвижимости, которые предлагают агентства и
                  частные лица, позволят вам выбрать то, что соответствует вашим
                  запросам.
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
  // sort_by_date: state.filterByDateReducer.sort_by_date,
  itemsPerPage: state.paginationReducer.itemsPerPage,
  currentPageRent: state.paginationReducer.currentPageRent,
  currentPage: state.paginationReducer.currentPage,

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

const mapDispatchToProps = dispatch => ({
  resetPagination: () => dispatch(resetPaginationCreator()),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(RentPage);

export { Enhanced as RentPage };

RentPage.propTypes = {
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
  currentPageRent: PropTypes.number.isRequired,
  statusFilter: PropTypes.string.isRequired,
  cityFilter: PropTypes.string.isRequired,
  totalAreaFilter: PropTypes.string.isRequired,
  propWallsFilter: PropTypes.string.isRequired,
  propHeatingFilter: PropTypes.string.isRequired,
  propBuildingFilter: PropTypes.string.isRequired,
  propCeilingHeightFilter: PropTypes.string.isRequired,
};
