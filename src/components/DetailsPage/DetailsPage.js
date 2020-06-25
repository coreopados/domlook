import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./DetailsPage.scss";
import Loader from "react-loader-spinner";
import { handleLoadAds } from "../../redux/actionCreators";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import { Navigation } from "../CommonParts/Navigation/Navigation";
import { DetailsMap } from "../CommonParts/DetailsMap/DetailsMap";

const DetailsPage = ({ ad, ads, loadData, isLoaded, isLoading, id }) => {
  useEffect(() => {
    if (ad === null || ad === undefined) {
      loadData();
    }

    window.scrollTo(0, 0);
  }, []);

  const calcPerSquareMeter = useCallback(() => {
    const total_area = Number(ad.total_area);
    const price = Number(ad.price);

    return Math.round(price / total_area);
  });

  if (id && id <= ads.length) {
    return (
      <main className="details-main">
        <Navigation />
        {isLoading && (
          <div className="loader-wrapper">
            <Loader type="Puff" color="#313237" height={80} width={80} />
          </div>
        )}
        {isLoaded && (
          <section className="details-page">
            <div className="container">
              <div className="details-page__wrapper">
                <aside className="details-full-info">
                  <div className="details-full-info__block">
                    <h4 className="details-full-info__title">{ad.title}</h4>
                    <p className="details-full-info__location">{ad.location}</p>
                  </div>
                  <div className="details-full-info__block">
                    <div className="details-full-info__price-wrapper">
                      <div className="details-full-info__select-wrapper">
                        <span className="details-full-info__price-word">
                          Стоимость в
                        </span>
                      </div>
                      <span className="details-full-info__price">{`$ ${ad.price}`}</span>
                      <span className="details-full-info__square-meter">{`$ ${calcPerSquareMeter()} за кв. м.`}</span>
                    </div>
                  </div>
                  <div className="details-full-info__block">
                    <div className="details-full-info__specs-box">
                      <span className="details-full-info__word">Комнат: </span>
                      <span className="details-full-info__value">
                        {ad.rooms}
                      </span>
                    </div>
                    <div className="details-full-info__specs-box">
                      <span className="details-full-info__word">Этаж: </span>
                      <span className="details-full-info__value">
                        {ad.floor}
                      </span>
                    </div>
                    <div className="details-full-info__specs-box">
                      <span className="details-full-info__word">Площадь: </span>
                      <span className="details-full-info__value">{`${ad.living_space} м²`}</span>
                    </div>
                  </div>
                  <div className="details-full-info__block">
                    <h5 className="details-full-info__person-name">
                      Ольга Ткаченко
                    </h5>
                    <p className="details-full-info__person-title">Риэлтор</p>
                    <span className="details-full-info__phone-number">
                      +380XX-XXX-XX-XX
                    </span>
                    <div className="details-full-info__actions-wrapper">
                      <button
                        type="button"
                        className="details-full-info__action"
                      >
                        Показать телефон
                      </button>
                      <button
                        type="button"
                        className="details-full-info__action"
                      >
                        Добавить в избранное
                      </button>
                      <button
                        type="button"
                        className="details-full-info__action"
                      >
                        Распечатать
                      </button>
                      <button
                        type="button"
                        className="details-full-info__action"
                      >
                        Пожаловаться
                      </button>
                    </div>
                  </div>
                  <div className="details-full-info__block">
                    <div className="details-full-info__secondary-info-wrapper">
                      <div className="details-full-info__secondary-info-box">
                        <p className="details-full-info__secondary-info-item">
                          Опубликовано:
                        </p>
                        <p className="details-full-info__secondary-info-item">
                          29.05.2020
                        </p>
                      </div>
                      <div className="details-full-info__secondary-info-box">
                        <p className="details-full-info__secondary-info-item">
                          ID:
                        </p>
                        <p className="details-full-info__secondary-info-item">
                          41876
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="details-full-info__block">
                    <h5 className="details-full-info__similar-ads-title">
                      Похожие предложения
                    </h5>
                    <div className="details-full-info__similar-ads"></div>
                  </div>
                </aside>
                <div className="details-main-content">
                  <div className="details-slider">
                    <div className="details-slider__photo-wrapper">
                      <img
                        src={ad.imgUrl}
                        alt="фото"
                        className="details-slider__photo"
                      />
                    </div>
                  </div>
                  <div className="details-infoblock">
                    <div className="details-infoblock__general">
                      <h3 className="details-infoblock__title">Информация</h3>
                      <div className="details-general-info">
                        <div className="details-general-info__box">
                          <p className="details-general-info__spec-name">
                            Общая площадь:
                          </p>
                          <p className="details-general-info__spec-name">
                            Жилая площадь:
                          </p>
                          <p className="details-general-info__spec-name">
                            Площадь кухни:
                          </p>
                          <p className="details-general-info__spec-name">
                            Этаж/Этажность:
                          </p>
                          <p className="details-general-info__spec-name">
                            Тип предложения:
                          </p>
                          <p className="details-general-info__spec-name">
                            Тип стен:
                          </p>
                        </div>
                        <div className="details-general-info__box">
                          <p className="details-general-info__spec-value">{`${ad.total_area}м²`}</p>
                          <p className="details-general-info__spec-value">{`${ad.living_space}м²`}</p>
                          <p className="details-general-info__spec-value">
                            20м²
                          </p>
                          <p className="details-general-info__spec-value">
                            {ad.floor}
                          </p>
                          <p className="details-general-info__spec-value">
                            от посредника
                          </p>
                          <p className="details-general-info__spec-value">
                            кирпич
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="details-infoblock__additional">
                      <h3 className="details-infoblock__title">
                        Дополнительная информация
                      </h3>
                      <div className="details-additional-info"></div>
                    </div>
                  </div>
                  <div className="details-description">
                    <h3 className="details-description__title">Описание</h3>
                    <p className="details-description__text">
                      {ad.description}
                    </p>
                  </div>
                  <div className="details-location">
                    <h3 className="details-location__title">Местоположение</h3>
                    <div className="details-location__map">
                      <DetailsMap
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: "100%" }} />}
                        containerElement={<div style={{ height: "100%" }} />}
                        mapElement={<div style={{ height: "100%" }} />}
                        coordinates={ad.map}
                      />
                    </div>
                  </div>
                  <div className="details-socials">
                    <span className="details-socials__share">Поделиться</span>
                    <ul className="details-socials__list">
                      <li className="details-socials__list-item">
                        <a
                          href="https://www.facebook.com"
                          className="details-socials__list-link"
                        >
                          <i className="fa fa-facebook fa-lg" />
                        </a>
                      </li>
                      <li className="details-socials__list-item">
                        <a
                          href="https://www.vk.com"
                          className="details-socials__list-link"
                        >
                          <i className="fa fa-vk fa-lg" />
                        </a>
                      </li>
                      <li className="details-socials__list-item">
                        <a
                          href="https://www.twitter.com"
                          className="details-socials__list-link"
                        >
                          <i className="fa fa-twitter fa-lg" />
                        </a>
                      </li>
                      <li className="details-socials__list-item">
                        <a
                          href="https://www.google.com"
                          className="details-socials__list-link"
                        >
                          <i className="fa fa-google-plus fa-lg" />
                        </a>
                      </li>
                    </ul>
                  </div>
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
    ads: state.mainReducer.ads,
    ad:
      state.mainReducer.ads && state.mainReducer.ads.length > 0
        ? state.mainReducer.ads.find((ad) => ad.id === id)
        : null,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(handleLoadAds()),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(DetailsPage);

export { Enhanced as DetailsPage };

DetailsPage.defaultProps = {
  ad: PropTypes.shape({
    id: PropTypes.number,
    prop_status: PropTypes.string,
    prop_type: PropTypes.string,
    price: PropTypes.string,
    imgUrl: PropTypes.string,
    title: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
    total_area: PropTypes.string,
    living_space: PropTypes.string,
    floor: PropTypes.string,
    total_floors: PropTypes.string.isRequired,
    rooms: PropTypes.string,
  }),
};

DetailsPage.propTypes = {
  ad: PropTypes.shape({
    id: PropTypes.number,
    prop_status: PropTypes.string,
    prop_type: PropTypes.string,
    price: PropTypes.string,
    imgUrl: PropTypes.string,
    title: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
    total_area: PropTypes.string,
    living_space: PropTypes.string,
    floor: PropTypes.string,
    rooms: PropTypes.string,
  }),
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
    }).isRequired
  ).isRequired,
  isLoaded: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loadData: PropTypes.func.isRequired,
};
