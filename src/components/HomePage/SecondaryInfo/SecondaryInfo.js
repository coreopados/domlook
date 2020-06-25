import React from 'react';
import './SecondaryInfo.scss';

const SecondaryInfo = () => (
  <div className="secondary-info">
    <div className="container">
      <div className="secondary-info__wrapper">
        <article className="secondary-info-card">
          <div className="secondary-info-card__icon-wrapper">
            <img
              src="/domlook/img/home-page/info-icon-1.png"
              alt="здание"
              className="secondary-info-card__icon"
            />
          </div>
          <h5 className="secondary-info-card__title">Большой выбор</h5>
          <p className="secondary-info-card__text">Более 10 000+ объектов недвижимости в нашей базе</p>
        </article>
        <article className="secondary-info-card">
          <div className="secondary-info-card__icon-wrapper">
            <img
              src="/domlook/img/home-page/info-icon-2.png"
              alt="здание"
              className="secondary-info-card__icon"
            />
          </div>
          <h5 className="secondary-info-card__title">Новостройки</h5>
          <p className="secondary-info-card__text">Поиск новых жилых комплексов и коттеджей</p>
        </article>
        <article className="secondary-info-card">
          <div className="secondary-info-card__icon-wrapper">
            <img
              src="/domlook/img/home-page/info-icon-3.png"
              alt="здание"
              className="secondary-info-card__icon"
            />
          </div>
          <h5 className="secondary-info-card__title">Риелторы и агенства</h5>
          <p className="secondary-info-card__text">Помощь специалистов рынка недвижимости</p>
        </article>
      </div>
    </div>
  </div>
);

export default React.memo(SecondaryInfo);
