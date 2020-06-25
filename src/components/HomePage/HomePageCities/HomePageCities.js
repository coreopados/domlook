import React from 'react';
import './HomePageCities.scss';

const HomePageCities = () => (
  <div className="homepage-cities">
    <div className="container">
      <div className="homepage-cities__wrapper">
        <h3 className="homepage-cities__title">
          Топ объявлений по городам
        </h3>
        <div className="homepage-cities__block">
          <article className="cities-card">
            <div className="cities-card__icon-wrapper">
              <img
                src="/domlook/img/home-page/building-icon-1.png"
                alt="здание"
                className="cities-card__icon"
              />
            </div>
            <h5 className="cities-card__title">Киев</h5>
            <div className="cities-card__link-wrapper">
              <a href="#1" className="cities-card__link">Аренда</a>
              <a href="#1" className="cities-card__link">Продажа</a>
            </div>
          </article>
          <article className="cities-card">
            <div className="cities-card__icon-wrapper">
              <img
                src="/domlook/img/home-page/building-icon-2.png"
                alt="здание"
                className="cities-card__icon"
              />
            </div>
            <h5 className="cities-card__title">Днепр</h5>
            <div className="cities-card__link-wrapper">
              <a href="#1" className="cities-card__link">Аренда</a>
              <a href="#1" className="cities-card__link">Продажа</a>
            </div>
          </article>
          <article className="cities-card">
            <div className="cities-card__icon-wrapper">
              <img
                src="/domlook/img/home-page/building-icon-3.png"
                alt="здание"
                className="cities-card__icon"
              />
            </div>
            <h5 className="cities-card__title">Харьков</h5>
            <div className="cities-card__link-wrapper">
              <a href="#1" className="cities-card__link">Аренда</a>
              <a href="#1" className="cities-card__link">Продажа</a>
            </div>
          </article>
          <article className="cities-card">
            <div className="cities-card__icon-wrapper">
              <img
                src="/domlook/img/home-page/building-icon-4.png"
                alt="здание"
                className="cities-card__icon"
              />
            </div>
            <h5 className="cities-card__title">Одесса</h5>
            <div className="cities-card__link-wrapper">
              <a href="#1" className="cities-card__link">Аренда</a>
              <a href="#1" className="cities-card__link">Продажа</a>
            </div>
          </article>
          <article className="cities-card">
            <div className="cities-card__icon-wrapper">
              <img
                src="/domlook/img/home-page/building-icon-5.png"
                alt="здание"
                className="cities-card__icon"
              />
            </div>
            <h5 className="cities-card__title">Львов</h5>
            <div className="cities-card__link-wrapper">
              <a href="#1" className="cities-card__link">Аренда</a>
              <a href="#1" className="cities-card__link">Продажа</a>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
);

export default React.memo(HomePageCities);
