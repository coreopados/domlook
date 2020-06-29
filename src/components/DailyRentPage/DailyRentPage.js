import React, { useEffect, useMemo } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../CommonSection.scss";
import Loader from "react-loader-spinner";
import { Navigation } from "../CommonParts/Navigation/Navigation";
import { FiltersForm } from "../ReduxForms/FiltersForm/FiltersForm";
import About from "../CommonParts/About/About";
import { TopFilters } from "../CommonParts/TopFilters/TopFilters";
import { AdsGrid } from "../CommonParts/AdsListLooks/AdsGrid/AdsGrid";
import { AdsList } from "../CommonParts/AdsListLooks/AdsList/AdsList";
import { PaginationDailyRent } from "../CommonParts/Pagination/PaginationDailyRentPage";
import { handleLoadAds } from "../../redux/actionCreators";

const DailyRentPage = ({
  ads,
  isLoaded,
  isLoading,
  loadData,
  orientation,
  match,
  itemsPerPage,
  currentPageDailyRent,
  sort_price,
  statusFilter
}) => {
  useEffect(() => {
    loadData();
  }, []);

  let dailyRentAds = useMemo(() =>
    ads.filter((ad) => ad.prop_status === "rent")
  );
  const List = orientation === "vertical" ? AdsGrid : AdsList;

  if (statusFilter === 'apartment') {
    dailyRentAds = dailyRentAds.filter((ad) => ad.prop_type === "apartment")
  } else if (statusFilter === 'house') {
    dailyRentAds = dailyRentAds.filter((ad) => ad.prop_type === "house")
  }



  sort_price === 'low-price' ? dailyRentAds = dailyRentAds.sort((prev, next) => prev.price - next.price) : dailyRentAds = dailyRentAds.sort((prev, next) => next.price - prev.price);



  const indexOfLastAd = currentPageDailyRent * itemsPerPage;
  const indexOfFirstAd = indexOfLastAd - itemsPerPage;
  const currentAds = dailyRentAds.slice(indexOfFirstAd, indexOfLastAd);




  return (
    <main className="common-main">
      <Navigation pageName="Посуточно" />
      <section className="common-section">
        <div className="container">
          <div className="common-section__wrapper">
            <FiltersForm />
            <div className="common-section__block">
              <TopFilters match={match} totalAdsDailyRent={dailyRentAds.length} />
              {isLoading && (
                <div className="loader-wrapper">
                  <Loader type="Puff" color="#313237" height={80} width={80} />
                </div>
              )}
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
  sort_price: state.filterByPriceReducer.sort_price,
  sort_by_date: state.filterByDateReducer.sort_by_date,
  itemsPerPage: state.paginationReducer.itemsPerPage,
  currentPageDailyRent: state.paginationReducer.currentPageDailyRent,
  statusFilter: state.filterReducer.statusFilter,
});

const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(handleLoadAds()),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(DailyRentPage);

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
      location: PropTypes.string.isRequired,
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
  loadData: PropTypes.func.isRequired,
  orientation: PropTypes.string.isRequired,
  match: PropTypes.shape().isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPageDailyRent: PropTypes.number.isRequired,
};
