import React, { useEffect, useMemo } from "react";
import PropTypes from 'prop-types';
import './NewsAdsList.scss';
import { NewsAdsCard } from './NewsAdsCard/NewsAdsCard';

export const NewsAdsList = ({
  filterCategoryNews,
  news,
  match,
}) => {
  // useEffect(() => {
  //   loadData();
  // }, []);
  // if (filterCategoryNews === 'Новости рынка') {
  //   news = news.filter((newPost) => newPost.category === "Новости рынка")
  // } else if (filterCategoryNews === 'Аналитика') {
  //   news = news.filter((newPost) => newPost.category === "Аналитика")
  // } else if (filterCategoryNews === 'Новости') {
  //   news = news.filter((newPost) => newPost.category === "Новости")
  // } else if (filterCategoryNews === 'Новости и советы ЖКХ') {
  //   news = news.filter((newPost) => newPost.category === "Новости и советы ЖКХ")
  // } else if (filterCategoryNews === 'Новости новостроек') {
  //   news = news.filter((newPost) => newPost.category === "Новости новостроек")
  // } else if (filterCategoryNews === 'Советы по обустройству') {
  //   news = news.filter((newPost) => newPost.category === "Советы по обустройству")
  // } else if (filterCategoryNews === 'Финансы') {
  //   news = news.filter((newPost) => newPost.category === "Финансы")
  // }



  return (
    <div className="news-ads-list">
      {news.map(newsItem => (
        <NewsAdsCard key={newsItem.id} newsItem={newsItem} match={match} />
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
