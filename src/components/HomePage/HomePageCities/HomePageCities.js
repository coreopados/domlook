import React from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  NavLink,
} from 'react-router-dom';
import './HomePageCities.scss';
import {
  filterLocationLvovCreator,
  filterLocationKievCreator,
  filterLocationKharkovCreator,
  filterLocationDneprCreator,
  filterLocationOdessaCreator
} from "../../../redux/actionFilterCreators.js";

const HomePageCities = ({ filterLocationLvov,
  filterLocationKiev,
  filterLocationKharkov,
  filterLocationDnepr,
  filterLocationOdessa }) => (
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
                <button onClick={filterLocationKiev} className="cities-card__link">
                  <NavLink to="/rent" >Аренда</NavLink >
                </button>
                <button onClick={filterLocationKiev} className="cities-card__link">
                  <NavLink to="/sale" >Продажа</NavLink >
                </button>
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
                <button onClick={filterLocationDnepr} className="cities-card__link">
                  <NavLink to="/rent" >Аренда</NavLink >
                </button>
                <button onClick={filterLocationDnepr} className="cities-card__link">
                  <NavLink to="/sale" >Продажа</NavLink >
                </button>
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
                <button onClick={filterLocationKharkov} className="cities-card__link">
                  <NavLink to="/rent" >Аренда</NavLink >
                </button>
                <button onClick={filterLocationKharkov} className="cities-card__link">
                  <NavLink to="/sale" >Продажа</NavLink >
                </button>
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
                <button onClick={filterLocationOdessa} className="cities-card__link">
                  <NavLink to="/rent" >Аренда</NavLink >
                </button>
                <button onClick={filterLocationOdessa} className="cities-card__link">
                  <NavLink to="/sale" >Продажа</NavLink >
                </button>
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
                <button onClick={filterLocationLvov} className="cities-card__link">
                  <NavLink to="/rent" >Аренда</NavLink >
                </button>
                <button onClick={filterLocationLvov} className="cities-card__link">
                  <NavLink to="/sale" >Продажа</NavLink >
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );


const mapStateToProps = (state) => ({
  locationFilter: state.filterReducer.locationFilter
});

const mapDispatchToProps = (dispatch) => ({
  filterLocationLvov: () => dispatch(filterLocationLvovCreator()),
  filterLocationKiev: () => dispatch(filterLocationKievCreator()),
  filterLocationKharkov: () => dispatch(filterLocationKharkovCreator()),
  filterLocationDnepr: () => dispatch(filterLocationDneprCreator()),
  filterLocationOdessa: () => dispatch(filterLocationOdessaCreator()),

});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(HomePageCities);

export { Enhanced as HomePageCities };

HomePageCities.propTypes = {
  filterLocationLvov: PropTypes.func.isRequired,
  filterLocationKiev: PropTypes.func.isRequired,
  filterLocationKharkov: PropTypes.func.isRequired,
  filterLocationDnepr: PropTypes.func.isRequired,
  filterLocationOdessa: PropTypes.func.isRequired,
};