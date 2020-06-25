import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './SingleNews.scss';

export const SingleNews = ({ singleNews }) => (
  <article className="home-news-card">
    <span className="home-news-card__post-date">
      {singleNews.postDate}
    </span>
    <Link to={`news/${singleNews.id}`} key={singleNews.id}>
      <div className="home-news-card__photo-wrapper">
        <img
          src={singleNews.imgUrl}
          alt="новость"
          className="home-news-card__photo"
        />
      </div>
    </Link>
    <div className="home-news-card__text-wrapper">
      <Link to={`news/${singleNews.id}`} key={singleNews.id}>
        <h4 className="home-news-card__title">
          {singleNews.title}
        </h4>
      </Link>
      <LinesEllipsis
        className="home-news-card__description"
        text={singleNews.mainInfo}
        max-line="10"
        ellipsis="..."
        trimRight
        basedOn="words"
        component="p"
      />
    </div>
  </article>
);

SingleNews.propTypes = {
  singleNews:
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
    }).isRequired,
};
