import React from "react";
import PropTypes from 'prop-types';
import './NewsAdsList.scss';
import { NewsAdsCard } from './NewsAdsCard/NewsAdsCard';

export const NewsAdsList = ({
  category,
  news,
  match,

}) => {
  return (
    <div className="news-ads-list">
      {news.map(newsItem => (
        <NewsAdsCard category={category} key={newsItem.id} newsItem={newsItem} match={match} />
      ))}
    </div>
  )
};

NewsAdsList.propTypes = {
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
  match: PropTypes.shape().isRequired,
};
