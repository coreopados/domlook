import React, { useEffect, useMemo } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../CommonSection.scss";
import Loader from "react-loader-spinner";
import { Navigation } from "../CommonParts/Navigation/Navigation";
import { FiltersForm } from "../ReduxForms/FiltersForm/FiltersForm";
import { TopFilters } from "../CommonParts/TopFilters/TopFilters";
import { AdsGrid } from "../CommonParts/AdsListLooks/AdsGrid/AdsGrid";
import { AdsList } from "../CommonParts/AdsListLooks/AdsList/AdsList";
import { PaginationRent } from "../CommonParts/Pagination/PaginationRentPage";
import About from "../CommonParts/About/About";
import { handleLoadAds } from "../../redux/actionCreators";

const RentPage = ({
  ads,
  isLoaded,
  isLoading,
  loadData,
  orientation,
  match,
  itemsPerPage,
  currentPageRent,
  sort_price,

  typeFilter,
  statusFilter,
  locationFilter
}) => {
  useEffect(() => {
    loadData();

  }, []);

  let rentAds = useMemo(() => ads.filter((ad) => ad.prop_status === "rent"));
  const List = orientation === "vertical" ? AdsGrid : AdsList;

  if (statusFilter === 'apartment') {
    rentAds = rentAds.filter((ad) => ad.prop_type === "apartment")
  } else if (statusFilter === 'house') {
    rentAds = rentAds.filter((ad) => ad.prop_type === "house")
  }


  if (locationFilter === "Kiev") {
    rentAds = rentAds.filter((ad) => ad.location.match('Киев'))
  } else if (locationFilter === "Kharkov") {
    rentAds = rentAds.filter((ad) => ad.location.match('Харьков'))
  } else if (locationFilter === "Odessa") {
    rentAds = rentAds.filter((ad) => ad.location.match('Одесса'))
  } else if (locationFilter === "Dnepr") {
    rentAds = rentAds.filter((ad) => ad.location.match('Днепр'))
  } else if (locationFilter === "Lvov") {
    rentAds = rentAds.filter((ad) => ad.location.match('Львов'))
  }

  const indexOfLastAd = currentPageRent * itemsPerPage;
  const indexOfFirstAd = indexOfLastAd - itemsPerPage;
  const currentAds = rentAds.slice(indexOfFirstAd, indexOfLastAd);



  return (
    <main className="common-main">
      <Navigation pageName="Аренда" />
      <section className="common-section">
        <div className="container">
          <div className="common-section__wrapper">
            <FiltersForm />
            <div className="common-section__block">
              <TopFilters match={match} totalAdsRent={rentAds.length} />
              {isLoading && (
                <div className="loader-wrapper">
                  <Loader type="Puff" color="#313237" height={80} width={80} />
                </div>
              )}
              {isLoaded && <List ads={currentAds} match={match} sortPrice={sort_price} />}

              {(rentAds.length > 9) && <PaginationRent currentPage={currentPageRent} totalItems={rentAds.length} />}
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
  sort_price: state.filterByPriceReducer.sort_price,
  sort_by_date: state.filterByDateReducer.sort_by_date,
  itemsPerPage: state.paginationReducer.itemsPerPage,
  currentPageRent: state.paginationReducer.currentPageRent,

  typeFilter: state.filterReducer.typeFilter,
  statusFilter: state.filterReducer.statusFilter,
  locationFilter: state.filterReducer.locationFilter,
});

const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(handleLoadAds()),
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
      location: PropTypes.string.isRequired,
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
  loadData: PropTypes.func.isRequired,
  orientation: PropTypes.string.isRequired,
  match: PropTypes.shape().isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPageRent: PropTypes.number.isRequired,
};
