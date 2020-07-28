import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../CommonSection.scss";
import { Navigation } from "../CommonParts/Navigation/Navigation";
import { NewsFiltersForm } from "../ReduxForms/NewsFiltersForm/NewsFiltersForm";
import { NewsAdsList } from "./NewsAdsList/NewsAdsList";
import { PaginationNews } from "../CommonParts/Pagination/PaginationNewsPage";
import { Pagination } from "../CommonParts/Pagination/Pagination";
import { handleLoadNewsAds } from "../../redux/actionCreators";
import About from "../CommonParts/About/About";
import { resetPaginationCreator } from "../../redux/actionCreators";

const NewsPage = ({
  news,
  match,
  itemsPerPage,
  currentPageNews,
  currentPage,
  filterCategoryNews,
  loadData,
  resetPagination,
}) => {

  useEffect(() => { 
    loadData();
  }, []);

  const location = useLocation();

  useEffect(() => {
    resetPagination();
  }, [location]);

  if (filterCategoryNews !== '') {
    news = news.filter((post) => post.category === filterCategoryNews)
  }

  // const indexOfLastAd = currentPageNews * itemsPerPage;
  // const indexOfFirstAd = indexOfLastAd - itemsPerPage;
  // const currentNewsPosts = news.slice(indexOfFirstAd, indexOfLastAd);

  const indexOfLastAd = currentPage * itemsPerPage;
  const indexOfFirstAd = indexOfLastAd - itemsPerPage;
  const currentNewsPosts = news.slice(indexOfFirstAd, indexOfLastAd);

  return (
    <main className="common-main">
      <Navigation pageName="Новости" category={filterCategoryNews} />
      <section className="common-section">
        <div className="container">
          <div className="common-section__wrapper">
            <NewsFiltersForm news={news} activeCategory={filterCategoryNews} />
            <div className="common-section__block">
              <NewsAdsList category={filterCategoryNews} filterCategoryNews={news} news={currentNewsPosts} match={match} />
              {/* (news.length > 9) && <PaginationNews currentPageNews={currentPageNews} totalItems={news.length} /> */}
              {(news.length > 9) && <Pagination totalItems={news.length} />}
              <About title="Новости рынка недвижимости">
                <p className="about__text">
                  На сайте DomLook.com вы можете ознакомиться с новостями рынка
                  недвижимости Украины и всего мира; найти познавательную
                  информацию о новостройках; полезные советы по обустройству
                  своего жилья и приусадебного участка; узнать последние
                  тенденции в области жилищно-коммунального строительства;
                  получить полезную информацию об изменениях цен на покупку или
                  аренду различных видов как жилой, так и нежилой недвижимости:
                  складов, офисов, магазинов.
                </p>
                <p className="about__text">
                  Познавательными будут и аналитические обзоры всех сфер
                  жилищно-коммунального строительства, а также прогнозы развития
                  рынка и нововведения в области законодательства.
                </p>
                <p className="about__text">
                  В зависимости от ваших интересов и предпочтений, можно больше
                  внимания обратить на новости и тенденции изменения спроса и
                  предложения на рынке как первичного, так и вторичного жилья,
                  либо же проанализировать тренды развития коммерческой
                  недвижимости.
                </p>
                <p className="about__text">
                  Также, на сайте DomLook публикуется актуальная информация от
                  застройщиков: акции, советы, специальные предложения и т.д.
                  Кроме того, значительное внимание уделяется проблеме субсидий,
                  новых тарифов на жилье и тому, как можно существенно снизить
                  затраты на коммунальные услуги. Для более точных прогнозов
                  развития рынка и оценки всех значимых событий, публикуются
                  советы признанных экспертов и специалистов в отрасли
                  эксплуатации и строительства недвижимости.
                </p>
                <p className="about__text">
                  Надеемся, что представленная сайте DomLook в рубрике «Новости»
                  информация будет полезной как для продавцов, так и для
                  покупателей недвижимости, как для представителей серьезных
                  риэлтерских агентств, так и для частных лиц.
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
  news: state.mainReducer.news,
  isLoaded: state.mainReducer.isLoaded,
  isLoading: state.mainReducer.isLoading,
  itemsPerPage: state.paginationReducer.itemsPerPage,
  currentPageNews: state.paginationReducer.currentPageNews,
  currentPage: state.paginationReducer.currentPage,
  filterCategoryNews: state.filterReducer.filterCategoryNews,
  state: state.filterCategoryReducer,
});

const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(handleLoadNewsAds()),
  resetPagination: () => dispatch(resetPaginationCreator()),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(NewsPage);

export { Enhanced as NewsPage };

NewsPage.propTypes = {
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
  // loadData: PropTypes.func.isRequired,
  match: PropTypes.shape().isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPageNews: PropTypes.number.isRequired,
  filterCategoryNews: PropTypes.string.isRequired,
};
