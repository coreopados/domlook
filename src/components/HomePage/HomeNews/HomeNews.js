import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './HomeNews.scss';
import Loader from 'react-loader-spinner';
import { SingleNews } from './SingleNews/SingleNews';

const HomeNews = ({
  news,
  isLoading,
  isLoaded,
}) => (
  <div className="container">
    <div className="home-news">
      <h3 className="home-news__title">
        Новости рынка недвижимости
      </h3>
      <Link to="news" className="home-news__allnews-link">Все новости</Link>
      <div className="home-news__wrapper">
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
          <React.Fragment>
            {news.map(item => (
              <SingleNews key={item.id} singleNews={item} />
            ))}
          </React.Fragment>
        )}
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  isLoaded: state.mainReducer.isLoaded,
  isLoading: state.mainReducer.isLoading,
});

const Enhanced = connect(mapStateToProps)(HomeNews);

export { Enhanced as HomeNews };

HomeNews.propTypes = {
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
  isLoaded: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
