import React, { useEffect, useMemo } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  NavLink,
} from 'react-router-dom';
import "./HomePage.scss";
import Loader from "react-loader-spinner";
import { HomeFiltersForm } from "../ReduxForms/HomeFiltersForm/HomeFiltersForm";
import SecondaryInfo from "./SecondaryInfo/SecondaryInfo";
import { HomeNews } from "./HomeNews/HomeNews";
import About from "../CommonParts/About/About";
import { HomePageCities } from "./HomePageCities/HomePageCities";
import { HomeAdsList } from "./HomeAdsList/HomeAdsList";
import {
  handleLoadNewsAds,
  setFavouritesCreator
} from "../../redux/actionCreators";
import { filterStatusRentCreator, filterStatusSellCreator, filterTypeApartmentCreator, filterTypeHouseCreator } from "../../redux/actionFilterCreators";


const HomePage = ({
  priceFromFilter,
  priceToFilter,
  ads,
  news,
  isLoaded,
  isLoading,
  loadData,
  match,
  filterTypeApartment,
  filterTypeHouse,
  statusFilter,
  typeFilter,
  featuresArr,
  propRegionFilter,
  setFavourites,
  typeTransaction,

  totalAreaFilter,
  propWallsFilter,
  floorFilter,
  roomsFilter,
  propOfferFilter,
  propHeatingFilter,
  propBuildingFilter,
  propCeilingHeightFilter
}) => {
  useEffect(() => {
    loadData();
  }, []);



  useEffect(() => {
    const cachedFavourites = localStorage.getItem('favourites');

    if (cachedFavourites) {
      setFavourites(JSON.parse(cachedFavourites));
    }
  }, []);

  const aptsAds = useMemo(
    () =>
      ads.filter(
        (ad) => ad.prop_type === "apartment"
      ),
    [ads]
  );


  const housesAds = useMemo(
    () =>
      ads.filter((ad) => ad.prop_type === "house"),
    [ads]
  );

  const homeNews = useMemo(() => news.filter((item) => item.id <= 3));
  const adsLength = ads.length


  return (
    <main>
      <HomeFiltersForm
        priceFrom={priceFromFilter}
        priceTo={priceToFilter}
        match={match}
        adsLength={adsLength}
        statusFilter={statusFilter}
        typeFilter={typeFilter}
        regionFilter={propRegionFilter}
        features={featuresArr}
        typeTransaction={typeTransaction}

        wallsFilter={propWallsFilter}
        floorFilter={floorFilter}
        roomsFilter={roomsFilter}
        offerFilter={propOfferFilter}
        heatingFilter={propHeatingFilter}
        buildingFilter={propBuildingFilter}
        ceilingHeightFilter={propCeilingHeightFilter}
        totalAreaFilter={totalAreaFilter}
      />
      <HomePageCities />
      {isLoading && (
        <div className="loader-wrapper">
          <Loader type="Puff" color="#313237" height={80} width={80} />
        </div>
      )}

      {isLoaded && (
        <React.Fragment>
          <HomeAdsList ads={aptsAds} match={match}>
            <h2 className="home-ads-list__title">
              Последние объявления &nbsp;
              <button onClick={filterTypeApartment} >
                <NavLink
                  to="/sale"
                  // to={`${process.env.PUBLIC_URL}/sale`}
                  className="navigation__link"
                  activeClassName="navigation__link--active"
                >продажи
                </NavLink>
              </button>
                &nbsp;
                и&nbsp;
              <button onClick={filterTypeApartment}>
                <NavLink
                  to="/rent"
                  // to={`${process.env.PUBLIC_URL}/sale`}
                  className="navigation__link"
                  activeClassName="navigation__link--active"
                > аренды
                </NavLink>
              </button> квартир
            </h2>
          </HomeAdsList>
          <HomeAdsList ads={housesAds} match={match}>
            <h2 className="home-ads-list__title">
              Последние объявления &nbsp;
              <button onClick={filterTypeHouse}>
                <NavLink
                  to="/sale"
                  // to={`${process.env.PUBLIC_URL}/sale`}
                  className="navigation__link"
                  activeClassName="navigation__link--active"
                > продажи
                </NavLink>
              </button>
                 &nbsp;
                и&nbsp;
                <button onClick={filterTypeHouse}>
                <NavLink
                  to="/rent"
                  // to={`${process.env.PUBLIC_URL}/sale`}
                  className="navigation__link"
                  activeClassName="navigation__link--active"
                > аренды&nbsp;
                </NavLink>
              </button>
                домов
            </h2>
            <p className="home-ads-list__text">
              Посмотрите последние добавленные объявления, возможно Вас
              заинтересуют именно они!
            </p>
          </HomeAdsList>
          <SecondaryInfo />
          <HomeNews news={homeNews} />
          <About title="Приветствуем Вас на портале недвижимости Domlook">
            <p className="about__text">
              Портал недвижимости DomLook – это современный и эффективный
              информационный ресурс, позволяющий частным лицам и компаниям
              быстро и выгодно продать или купить все виды недвижимости в
              Украине, а также арендовать дом или квартиру на длительный срок
              или посуточно. В нашей базе, которая ежедневно обновляется,
              пользователь с легкостью подберет любой интересующий его вариант
              покупки дома, дачи, квартиры исходя из собственных предпочтений и
              финансовых возможностей.
            </p>
            <p className="about__text">
              Значительным преимуществом сайта DomLook.com является максимальная
              простота и удобство пользования данным ресурсом. Для того, чтобы
              не утонуть в море постоянно поступающих все новых объявлений об
              аренде, продаже и покупке недвижимости, вам стоит всего лишь
              внести соответствующие требования (стоимость, метраж, этажность
              дома, район города и т.д.) и система сама найдет и покажет именно
              то, что вам надо. Поэтому пользоваться данным порталом
              недвижимости может не только высокообразованный интеллектуал, но
              любой человек, у которого есть доступ к интернету.
            </p>
            <p className="about__text">
              Значительную помощь при подборе объектов недвижимости для
              последующей покупки или аренды вам окажет интерактивная карта, на
              которой будет точно указано расположение частного дома или
              многоэтажки, в которой продается либо же сдается квартира. При
              таком подходе, даже не выезжая на место, вы сможете оценить,
              подходит ли вам данное жилье с точки зрения транспортных развязок,
              наличия детских садов и школ, магазинов и рынков, удобства поездок
              на работу или учебу.
            </p>
            <p className="about__text">
              Если же вы хотите подать собственное объявление о продаже объекта
              недвижимости или об аренде квартиры, то укажите, пожалуйста, как
              можно больше информации. Это значительно облегчит поиск клиента,
              готового купить вашу недвижимость и ускорит процесс подбора
              нужного варианта для аренды.
            </p>
            <p className="about__text">
              Если же вы хотите подать собственное объявление о Для тех людей,
              которые еще только думают об улучшении своих жилищных условий и не
              определились с направлением поиска, на сайте DomLook.com.
              постоянно размещаются и обновляются новости о состоянии и
              перспективах развития рынка недвижимости в Украине и в других
              странах мира, аналитические материалы, прогнозы, а также
              интересная информация о новых тенденциях в сфере архитектуры и
              дизайна. Возможно, ознакомившись с одной из таких статей, вы
              окончательно решите, что стоит купить квартиру в новостройке, или,
              наоборот, приобрести частный дом. В любом случае, выбор всегда за
              вами!
            </p>
          </About>
        </React.Fragment>
      )}

    </main>
  );
};

const mapStateToProps = (state) => ({
  ads: state.mainReducer.ads,
  news: state.mainReducer.news,
  isLoaded: state.mainReducer.isLoaded,
  isLoading: state.mainReducer.isLoading,
  typeFilter: state.filterReducer.typeFilter,
  statusFilter: state.filterReducer.statusFilter,
  propRegionFilter: state.filterReducer.propRegionFilter,
  cityFilter: state.filterReducer.cityFilter,
  priceFromFilter: state.filterReducer.priceFromFilter,
  priceToFilter: state.filterReducer.priceToFilter,
  featuresArr: state.filterReducer.featuresArr,
  typeTransaction: state.filterReducer.typeTransaction,


  totalAreaFilter: state.filterReducer.totalAreaFilter,
  floorFilter: state.filterReducer.floorFilter,
  roomsFilter: state.filterReducer.roomsFilter,
  propWallsFilter: state.filterReducer.propWallsFilter,
  propOfferFilter: state.filterReducer.propOfferFilter,
  propHeatingFilter: state.filterReducer.propHeatingFilter,
  propBuildingFilter: state.filterReducer.propBuildingFilter,
  propCeilingHeightFilter: state.filterReducer.propCeilingHeightFilter,
});

const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(handleLoadNewsAds()),
  filterStatusRent: () => dispatch(filterStatusRentCreator()),
  filterStatusSell: () => dispatch(filterStatusSellCreator()),
  filterTypeApartment: () => dispatch(filterTypeApartmentCreator()),
  filterTypeHouse: () => dispatch(filterTypeHouseCreator()),
  setFavourites: (ads) => dispatch(setFavouritesCreator(ads)),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export { Enhanced as HomePage };

HomePage.propTypes = {
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
  news: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imgUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      postDate: PropTypes.string.isRequired,
      mainInfo: PropTypes.string.isRequired,
      description: PropTypes.arrayOf(PropTypes.shape().isRequired),
      message1: PropTypes.string.isRequired,
      message2: PropTypes.string.isRequired,
    })
  ).isRequired,
  isLoaded: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loadData: PropTypes.func.isRequired,
  match: PropTypes.shape().isRequired,
};
