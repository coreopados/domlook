import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NewsAdsCard.scss';

export const NewsAdsCard = ({
  newsItem,
  match,
}) => {

  return (
    <article className="news-card">
      <Link to={`${match.path}/${newsItem.id}`}>
        <h3 className="news-card__title">
          {newsItem.title}
        </h3>
      </Link>
      <span className="news-card__post-date">
        {newsItem.postDate}
      </span>
      <Link to={`${match.path}/${newsItem.id}`}>
        <div className="news-card__photo-wrapper">
          <img
            src={newsItem.imgUrl}
            alt="фото"
            className="news-card__photo"
          />
        </div>
      </Link>
      <p className="news-card__description">
        {newsItem.mainInfo}
        {' '}
        <Link
          to={`${match.path}/${newsItem.id}`}
          className="news-card__link"
        >
          читать далее...
      </Link>
      </p>
    </article>
  )
};

NewsAdsCard.propTypes = {
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
  }).isRequired,
  match: PropTypes.shape().isRequired,
};
