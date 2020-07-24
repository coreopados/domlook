import React, { useMemo } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../CommonSection.scss";
import Loader from "react-loader-spinner";
import { Navigation } from "../CommonParts/Navigation/Navigation";
import { TopFilters } from "../CommonParts/TopFilters/TopFilters";
import { AdsGrid } from "../CommonParts/AdsListLooks/AdsGrid/AdsGrid";
import { AdsList } from "../CommonParts/AdsListLooks/AdsList/AdsList";
import { PaginationDailyRent } from "../CommonParts/Pagination/PaginationDailyRentPage";
import { AsideFilters } from "../../components/ReduxForms/FiltersForm/AsideFilters";
import About from "../CommonParts/About/About";
const DailyRentPage = ({
  ads,
  isLoaded,
  isLoading,
  orientation,
  match,
  currentPageDailyRent,
  itemsPerPage,
  sort_price,
  sort_date,

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

  let dailyRentAds = useMemo(() => ads.filter((ad) => ad.prop_status === "dailyrent"), [ads]);
  const List = orientation === "vertical" ? AdsGrid : AdsList;

  console.log(dailyRentAds)

  //по id
  if (idFilter) {
    dailyRentAds = dailyRentAds.filter((ad) => ad.id === Number(idFilter))
  }

  //по типу
  if (typeFilter) {
    dailyRentAds = dailyRentAds.filter((ad) => ad.prop_type === typeFilter)
  }

  //по статусу
  if (statusFilter) {
    dailyRentAds = dailyRentAds.filter((ad) => ad.prop_status === statusFilter)
  }

  //по городу
  if (cityFilter === "Kiev") {
    dailyRentAds = dailyRentAds.filter((ad) => ad.prop_city === ('Киев'))
  } else if (cityFilter === "Kharkov") {
    dailyRentAds = dailyRentAds.filter((ad) => ad.prop_city === ('Харьков'))
  } else if (cityFilter === "Odessa") {
    dailyRentAds = dailyRentAds.filter((ad) => ad.prop_city === ('Одесса'))
  } else if (cityFilter === "Dnepr") {
    dailyRentAds = dailyRentAds.filter((ad) => ad.prop_city === ('Днепр'))
  } else if (cityFilter === "Lvov") {
    dailyRentAds = dailyRentAds.filter((ad) => ad.prop_city === ('Львов'))
  }

  //по площади
  if (totalAreaFilter !== "") {
    dailyRentAds = dailyRentAds.filter((ad) => Math.floor(ad.total_area) > Math.floor(totalAreaFilter))
  }

  //по этажу
  if (floorFilter !== "") {
    dailyRentAds = dailyRentAds.filter((ad) => Math.floor(ad.floor) < Math.floor(floorFilter))
  }

  //по количеству комнат
  if (roomsFilter !== "") {
    dailyRentAds = dailyRentAds.filter((ad) => ad.rooms === roomsFilter)
  }

  //по типу стен
  if (propWallsFilter !== '') {
    dailyRentAds = dailyRentAds.filter((ad) => ad.prop_walls === propWallsFilter)
  }

  //по типу предложения
  if (propOfferFilter !== '') {
    dailyRentAds = dailyRentAds.filter((ad) => ad.prop_offer === propOfferFilter)
  }

  //по типу отопления
  if (propHeatingFilter !== '') {
    dailyRentAds = dailyRentAds.filter((ad) => ad.prop_heating === propHeatingFilter)
  }

  //по типу здания
  if (propBuildingFilter !== "") {
    dailyRentAds = dailyRentAds.filter((ad) => ad.prop_building === propBuildingFilter)
  }

  //по типу высоте потолков
  if (propCeilingHeightFilter !== "") {
    dailyRentAds = dailyRentAds.filter((ad) => Math.floor(ad.ceiling_height) <= Math.floor(propCeilingHeightFilter))
  }

  //по области
  if (propRegionFilter) {
    dailyRentAds = dailyRentAds.filter((ad) => ad.prop_region === propRegionFilter)
  }

  //по городу
  if (propCityFilter) {
    dailyRentAds = dailyRentAds.filter((ad) => ad.prop_city === propCityFilter)
  }

  //по району
  if (propDistrictFilter) {
    dailyRentAds = dailyRentAds.filter((ad) => ad.prop_district === propDistrictFilter)
  }

  //по цене от
  if (priceFromFilter !== "") {
    dailyRentAds = dailyRentAds.filter((ad) => Math.floor(ad.price) >= Math.floor(priceFromFilter))
  }

  //по цене до
  if (priceToFilter !== "") {
    dailyRentAds = dailyRentAds.filter((ad) => Math.floor(ad.price) <= Math.floor(priceToFilter))
  }

  //по удобствам
  if (featuresArr !== false) {
    var keys = [];
    for (var key in featuresArr) {
      keys.push(key)
    }
    dailyRentAds = dailyRentAds.filter((ad) => ad.prop_features)
    dailyRentAds = dailyRentAds.filter(item => item.prop_features.some(i => (keys).includes(i)))
  }

  //по типу сделки
  if (typeTransaction !== false) {
    var keys = [];
    for (var key in typeTransaction) {
      keys.push(key)
    }
    dailyRentAds = dailyRentAds.filter((ad) => ad.prop_features_add)
    dailyRentAds = dailyRentAds.filter(item => item.prop_features_add.some(i => (keys).includes(i)))
  }


  //фильтр цен по низкой/по высокой
  sort_price === 'low-price' ? dailyRentAds = dailyRentAds.sort((prev, next) => prev.price - next.price) : dailyRentAds = dailyRentAds.sort((prev, next) => next.price - prev.price);


  //фильтр по дате 0/7/30
  const lastMonth = new Date().getTime() - 86400000 * 30;
  const lastWeek = new Date().getTime() - 86400000 * 7;
  const today = new Date().getTime() - 86400000;


  if (Number(sort_date) === 31) {
    dailyRentAds = dailyRentAds.filter((ad) => Date.parse(ad.post_date) >= lastMonth)
  } else if (Number(sort_date) === 7) {
    dailyRentAds = dailyRentAds.filter((ad) => Date.parse(ad.post_date) >= lastWeek)
  } else if (Number(sort_date) === 0) {
    dailyRentAds = dailyRentAds.filter((ad) => Date.parse(ad.post_date) >= today)
  }


  const indexOfLastAd = currentPageDailyRent * itemsPerPage;
  const indexOfFirstAd = indexOfLastAd - itemsPerPage;
  const currentAds = dailyRentAds.slice(indexOfFirstAd, indexOfLastAd);

  console.log(currentPageDailyRent)




  return (
    <main className="common-main">
      <Navigation pageName="Посуточно" statusFilter={statusFilter} typeFilter={typeFilter} regionFilter={propRegionFilter} cityFilter={propCityFilter} districtFilter={propDistrictFilter} />
      <section className="common-section">
        <div className="container">
          <div className="common-section__wrapper">
            <AsideFilters
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
            <div className="common-section__block">

              {isLoading && (
                <div className="loader-wrapper">
                  <Loader type="Puff" color="#313237" height={80} width={80} />
                </div>
              )}
              {isLoaded && <TopFilters match={match} totalAdsDailyRent={dailyRentAds.length} />}
              {isLoaded && <List ads={currentAds} match={match} sortPrice={sort_price} />}
              {(dailyRentAds.length > 9) && <PaginationDailyRent totalItems={dailyRentAds.length} />}

              <About title="Посуточная аренда недвижимости">
                <p className="common-about__description">
                  Возникла потребность в аренде жилья посуточно? Загляните на
                  сайт DomLook.com! Здесь представлен максимально широкий спектр
                  предложений посуточной аренды квартир, домов или отдельных
                  комнат. Вам остается только полистать странички и выбрать то,
                  что отвечает вашим требованиям.
                </p>
                <p className="common-about__description">
                  Услуга аренды квартир посуточно в различных городах
                  развивается не случайно. В наше динамичное время, тысячи людей
                  каждый день отправляются в другую точку страны, а то и мира,
                  для того, чтобы решить бизнес-вопросы, устроиться на новую
                  работу, пройти тренинги, посетить выставки, встретиться с
                  друзьями или в отпуск – посмотреть достопримечательности и
                  исторические памятники нашей страны.
                </p>
                <p className="common-about__description">
                  Чтобы поиск необходимого для посуточной аренды жилья был
                  лёгким, удобным и точечным, все возможные требования
                  пользователей сайта DomLook.com были учтены и рассортированы
                  по категориям (город, район, метраж, ценовой диапазон,
                  посуточная аренда квартир без посредников или через агентства
                  и т.д.). Следовательно, приступая к поиску, вам надо просто
                  определиться, где, сколько дней и в каких условиях вы
                  хотели-бы жить. В нашей базе можно найти и арендовать
                  посуточно шикарные квартиры с дорогим ремонтом, мебелью и
                  современной техникой в центре города. Стоимость аренды такой
                  квартиры будет достаточно высокой, но и проживание в реально
                  комфортных условиях, да еще и в центре города, уже само по
                  себе станет отдыхом.
                </p>
                <p className="common-about__description">
                  В то же время, если вы, например, студент-заочник, приехавший
                  на сессию, то вполне можно ограничиться и более бюджетным
                  вариантом, арендовав жильё в районах, прилегающих к центру,
                  или на окраине города без посредников. Скорее всего, в данном
                  случае, оптимальным будет вариант, когда несколько человек,
                  объединившись, договариваются о посуточной аренде большой
                  квартиры. Тогда и жить веселее, и сессию сдавать легче, и
                  оплата жилья будет менее дорогой. При этом, учитывая
                  транспортную инфраструктуру современных городов, ежедневные
                  поездки к месту работы, учебы или экскурсий не составят труда.
                </p>
                <p className="common-about__description">
                  Если вы отправляетесь в путешествие летом, то очень хорошим
                  вариантом будет посуточная аренда не квартиры, а частного
                  дома. В данном случае, днем вы будете работать или гулять (в
                  зависимости от цели поездки), а вечером – удобно
                  расположившись в саду – можно устроить пикник и провести
                  действительно чудесный вечер.
                </p>
                <p className="common-about__description">
                  Таким образом, для посуточной аренды квартиры или дома, вам
                  уже не нужно искать друзей или знакомых, проживающих в том или
                  ином городе. Все, что нужно – это посетить сайт DomLook.com,
                  найти и прочитать информацию о заинтересовавшем жилье,
                  посмотреть фото или видеоматериалы, подобрать подходящий для
                  вас вариант и осуществить сделку напрямую с владельцем.
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
  currentPageDailyRent: state.paginationReducer.currentPageDailyRent,
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

const Enhanced = connect(mapStateToProps, null)(DailyRentPage);

export { Enhanced as DailyRentPage };

DailyRentPage.propTypes = {
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
      rooms: PropTypes.string.isRequired,
      total_floors: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  isLoaded: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  // loadData: PropTypes.func.isRequired,
  orientation: PropTypes.string.isRequired,
  match: PropTypes.shape().isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPageDailyRent: PropTypes.number.isRequired,
  statusFilter: PropTypes.string.isRequired,
  cityFilter: PropTypes.string.isRequired,
  totalAreaFilter: PropTypes.string.isRequired,
  propWallsFilter: PropTypes.string.isRequired,
  propOfferFilter: PropTypes.string.isRequired,
  propHeatingFilter: PropTypes.string.isRequired,
  propBuildingFilter: PropTypes.string.isRequired,
  propCeilingHeightFilter: PropTypes.string.isRequired,
};
