import React, { useEffect, useCallback, useState } from "react";
import { connect } from "react-redux";
import PropTypes, { array } from "prop-types";
import { Link } from 'react-router-dom';
import "./DetailsPage.scss";
import Loader from "react-loader-spinner";
import { handleLoadAds } from "../../redux/actionCreators";
import { Navigation } from "../CommonParts/Navigation/Navigation";
import { DetailsMap } from "../CommonParts/DetailsMap/DetailsMap";
import DetailsFeatures from "./DetailsFeatures/DetailsFeatures.js";
import { users } from "../../api/testUsers.json";
import {
  addFavouriteCreator,
  setFavouritesCreator,
} from "../../redux/actionCreators";

import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';
import ImageGallery from 'react-image-gallery';

const DetailsPage = ({
  ad, 
  ads, 
  loadData, 
  isLoaded, 
  isLoading, 
  id, 
  favourites, 
  addFavourites,
  setFavourites 
}) => {
  useEffect(() => {
    if (ad === null || ad === undefined) {
      loadData();
    }
    const cachedFavourites = localStorage.getItem('favourites');

    if (cachedFavourites) {
      setFavourites(JSON.parse(cachedFavourites));
    }
  }, []);

  useEffect(() => {
    if (favourites && favourites.length !== 0) {
      localStorage.setItem('favourites', JSON.stringify(favourites));
    }
  }, [favourites]);

  const favouriteMatch = favourites.find(item => item.id === ad.id);
  let favouriteChecker;

  if (favouriteMatch) {
    favouriteChecker = favouriteMatch.id === ad.id;
  }

  const handleAddFavourites = (e) => {
    e.preventDefault();
    const hasFavourites = favourites.findIndex((item) => item.id === ad.id);

    if (hasFavourites === -1) {
      addFavourites([...favourites, ad]);
    }
  };

  console.log(favourites)

  const calcPerSquareMeter = useCallback(() => {
    const total_area = Number(ad.total_area);
    const price = Number(ad.price);
    return Math.round(price / total_area);
  });

  const userName = useCallback(() => {
    const userId = ad.id_author
    const user = users.filter((elem) => elem.id === userId)
    const name = user.map((elem) => elem.name)
    const surname = user.map((elem) => elem.surname)
    return (name + " " + surname)
  })

  const userPhone = useCallback(() => {

    const userId = ad.id_author
    const user = users.filter((elem) => elem.id === userId)
    const phone = user.map((elem) => elem.phone)
    return phone
  })
  const images = useCallback(() => {
    const im = ad.images
    const newArr = im.map((elem) => ({ original: elem, thumbnail: elem }))
    return newArr
  })


  const [showTel, setShowTel] = useState(false)

  // if (id && id <= ads.length) {
  return (
    <main className="details-main">
      {isLoaded && (
        <Navigation statusFilter={ad.prop_status} typeFilter={ad.prop_type} regionFilter={ad.prop_region} cityFilter={ad.prop_city} districtFilter={ad.prop_district} />
      )}
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
                  <p className="details-full-info__location">{ad.address}</p>
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
                    {`${userName()}`}
                  </h5>
                  <p className="details-full-info__person-title">Риэлтор</p>
                  <span className="details-full-info__phone-number">

                    {showTel === false ? "+ 380XX-XXX-XX-XX" : <a href={'tel:' + `${userPhone()}`}>{`${userPhone()}`}</a>}

                  </span>
                  <div className="details-full-info__actions-wrapper">
                    <button
                      type="button"
                      className="details-full-info__action tel-button"
                      onClick={e => setShowTel(!showTel)}
                    >
                      {showTel === false ? "Показать телефон" : "Скрыть телефон"}
                    </button>

                    <button
                      type="button"
                      className="details-full-info__action fav-button"
                      onClick={(e) => handleAddFavourites(e)}
                    >
                      {!favouriteChecker ? "Добавить в избранное" : "Добавлено"}
                      {/* {favourites.filter((elem) => elem.id === Number(`${adId()}`)) ? "Добавлено" : "Добавить в избранное"} */}


                    </button>
                    <button
                      type="button"
                      className="details-full-info__action print-button"
                      onClick={() => { javascript: window.print() }}
                    >
                      Распечатать
                      </button>
                    <button
                      type="button"
                      className="details-full-info__action report-button"
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
                        {ad.post_date}
                      </p>
                    </div>
                    <div className="details-full-info__secondary-info-box">
                      <p className="details-full-info__secondary-info-item">
                        ID:
                        </p>
                      <p className="details-full-info__secondary-info-item">
                        {ad.id}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Верстка */}
                <div className="details-full-info__block">

                  <h5 className="details-full-info__similar-ads-title">
                    Похожие предложения
                  </h5>

                  <div className="details-full-info__similar-ads">
                    <Link to={'/' + id}>
                      <article className="vertical-card">

                        <span className="vertical-card__price">100</span>
                        <div className="vertical-card__photo-wrapper">
                          <img
                            src={ad.imgUrl}
                            alt="фото квартиры"
                            className="vertical-card__photo"
                          />
                        </div>
                        <div className="vertical-card__info-wrapper">
                          <h5 className="vertical-card__title">{ad.title}</h5>
                          <p className="vertical-card__description">
                            {ad.description.slice(0, 80)}
                          </p>
                          <div className="vertical-card__specification">
                            <span className="vertical-card__area">
                              {ad.total_area}
                            </span>
                            <span className="vertical-card__floor">{ad.floor}</span>
                            <span className="vertical-card__rooms">{ad.rooms}</span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </div>

                  <div className="details-full-info__similar-ads">
                    <Link to={'/' + id}>
                      <article className="vertical-card">

                        <span className="vertical-card__price">100</span>
                        <div className="vertical-card__photo-wrapper">
                          <img
                            src={ad.imgUrl}
                            alt="фото квартиры"
                            className="vertical-card__photo"
                          />
                        </div>
                        <div className="vertical-card__info-wrapper">
                          <h5 className="vertical-card__title">{ad.title}</h5>
                          <p className="vertical-card__description">
                            {ad.description.slice(0, 80)}
                          </p>
                          <div className="vertical-card__specification">
                            <span className="vertical-card__area">
                              {ad.total_area}
                            </span>
                            <span className="vertical-card__floor">{ad.floor}</span>
                            <span className="vertical-card__rooms">{ad.rooms}</span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </div>

                </div>
              </aside>
              <div className="details-main-content">
                <div className="details-slider">
                  <div className="details-slider__photo-wrapper">
                    {/* <img
                        src={ad.imgUrl}
                        alt="фото"
                        className="details-slider__photo"
                      /> */}

                    {images() !== 0 &&
                      <ImageGallery items={images()} showPlayButton={false} />
                    }
                    {images() == 0 &&
                      <ReactFancyBox
                        thumbnail={ad.imgUrl}
                        image={ad.imgUrl} />
                    }
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
                          {ad.prop_offer}
                        </p>
                        <p className="details-general-info__spec-value">
                          {ad.prop_walls}
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
                {ad.prop_features &&


                  <DetailsFeatures ad={ad} />
                }
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
      )
      }
    </main>
  );
  // }
  //  else {
  //   return <ErrorPage />;
  // }


};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id ? Number(ownProps.match.params.id) : null;

  return {
    id: ownProps.match.params.id ? Number(ownProps.match.params.id) : null,
    isLoaded: state.mainReducer.isLoaded,
    isLoading: state.mainReducer.isLoading,
    typeFilter: state.mainReducer.typeFilter,
    statusFilter: state.mainReducer.statusFilter,
    ads: state.mainReducer.ads,
    favourites: state.mainReducer.favourites,
    ad:
      state.mainReducer.ads && state.mainReducer.ads.length > 0
        ? state.mainReducer.ads.find((ad) => ad.id === id)
        : null,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(handleLoadAds()),
  addFavourites: (ad) => dispatch(addFavouriteCreator(ad)),
  setFavourites: (ads) => dispatch(setFavouritesCreator(ads)),
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
    address: PropTypes.string,
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
    address: PropTypes.string,
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
      address: PropTypes.string.isRequired,
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
