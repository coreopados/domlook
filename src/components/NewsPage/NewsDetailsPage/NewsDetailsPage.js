import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './NewsDetailsPage.scss';
import Loader from 'react-loader-spinner';
import { ErrorPage } from '../../ErrorPage/ErrorPage';
import { Navigation } from '../../CommonParts/Navigation/Navigation';
import { NewsHeadingsFilters } from '../../ReduxForms/NewsFiltersForm/NewsHeadingsFilters/NewsHeadingsFilters';

const NewsDetailsPage = ({
  news,
  newsItem,
  isLoading,
  isLoaded,
  id,
}) => {


  if (id && id <= news.length) {
    return (
      <main className="news-details-main">
        <Navigation pageName="Новости" category={newsItem.category} titleNew={newsItem.title} />
        {isLoading
          && (
            <div className="loader-wrapper">
              <Loader
                type="Puff"
                color="#313237"
                height={80}
                width={80}
              />
            </div>
          )}
        {(isLoaded) && (
          <section className="news-details-page">
            <div className="container">
              <div className="news-details-page__wrapper">
                <aside className="news-details-block-1">
                  <NewsHeadingsFilters />
                  <div className="news-details-block-1__popular">
                    <h4 className="news-details-block-1__title">
                      Популярные новости
                    </h4>
                    <div className="news-details-block-1__news-block">
                      <p className="news-details-block-1__no-data-message">
                        Sorry. No data so far.
                      </p>
                    </div>
                  </div>
                </aside>
                <div className="news-details-block-2">
                  <h3 className="news-details-block-2__title">
                    {newsItem.title}
                  </h3>
                  <p className="news-details-block-2__post-date">
                    Опубликовано
                    {' '}
                    {newsItem.postDate}
                  </p>
                  <div className="news-details-block-2__photo-wrapper">
                    <img
                      src={newsItem.imgUrl}
                      className="news-details-block-2__photo"
                      alt="фото"
                    />
                  </div>
                  <p className="news-details-block-2__important-info">
                    {newsItem.mainInfo}
                  </p>
                  {newsItem.description.map(item => (
                    <p
                      key={item.paragraph[0]
                        + item.paragraph[3]
                        + item.paragraph[5]}
                      className="news-details-block-2__text"
                    >
                      {item.paragraph}
                    </p>
                  ))}
                  <p className="news-details-block-2__important-info">
                    {newsItem.message1}
                  </p>
                  <p className="news-details-block-2__important-info">
                    {newsItem.message2}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    );
  }

  return <ErrorPage />;
};

const mapStateToProps = (state, ownProps) => {

  const id = ownProps.match.params.id ? Number(ownProps.match.params.id) : null;

  return {
    id: ownProps.match.params.id ? Number(ownProps.match.params.id) : null,
    isLoaded: state.mainReducer.isLoaded,
    isLoading: state.mainReducer.isLoading,
    news: state.mainReducer.news,
    newsItem: (state.mainReducer.news && state.mainReducer.news.length > 0)
      ? state.mainReducer.news.find(ad => ad.id === id)
      : null,
  };
};


const Enhanced = connect(mapStateToProps, null)(NewsDetailsPage);

export { Enhanced as NewsDetailsPage };

NewsDetailsPage.defaultProps = {
  newsItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    postDate: PropTypes.string.isRequired,
    mainInfo: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(
      PropTypes.shape().isRequired,
    ),
    message1: PropTypes.string.isRequired,
    message2: PropTypes.string.isRequired,
  })
};

NewsDetailsPage.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imgUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      postDate: PropTypes.string.isRequired,
      mainInfo: PropTypes.string.isRequired,
      description: PropTypes.arrayOf(
        PropTypes.shape().isRequired,
      ),
      message1: PropTypes.string.isRequired,
      message2: PropTypes.string.isRequired,
    }),
  ).isRequired,
  newsItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    postDate: PropTypes.string.isRequired,
    mainInfo: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(
      PropTypes.shape().isRequired,
    ),
    message1: PropTypes.string.isRequired,
    message2: PropTypes.string.isRequired,
  }),
  isLoaded: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  // loadData: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
