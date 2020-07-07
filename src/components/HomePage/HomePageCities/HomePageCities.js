import React from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  NavLink,
} from 'react-router-dom';
import './HomePageCities.scss';
import {
  filterCityLvovCreator,
  filterCityKievCreator,
  filterCityKharkovCreator,
  filterCityDneprCreator,
  filterCityOdessaCreator,
} from "../../../redux/actionFilterCreators.js";

const HomePageCities = ({
  filterCityLvov,
  filterCityKiev,
  filterCityKharkov,
  filterCityDnepr,
  filterCityOdessa
}) => (
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
                <button
                  type="button"
                  onClick={filterCityKiev}
                  className="cities-card__link"
                >
                  <NavLink to="/rent">
                    Аренда
                </NavLink>
                </button>
                <button
                  type="button"
                  onClick={filterCityKiev}
                  className="cities-card__link"
                >
                  <NavLink to="/sale">
                    Продажа
                </NavLink>
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
                <button
                  type="button"
                  onClick={filterCityDnepr}
                  className="cities-card__link"
                >
                  <NavLink to="/rent">
                    Аренда
                </NavLink>
                </button>
                <button
                  type="button"
                  onClick={filterCityDnepr}
                  className="cities-card__link"
                >
                  <NavLink to="/sale">
                    Продажа
                </NavLink>
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
                <button
                  type="button"
                  onClick={filterCityKharkov}
                  className="cities-card__link"
                >
                  <NavLink to="/rent">
                    Аренда
                </NavLink>
                </button>
                <button
                  type="button"
                  onClick={filterCityKharkov}
                  className="cities-card__link"
                >
                  <NavLink to="/sale">
                    Продажа
                </NavLink>
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
                <button
                  type="button"
                  onClick={filterCityOdessa}
                  className="cities-card__link"
                >
                  <NavLink to="/rent">
                    Аренда
                </NavLink>
                </button>
                <button
                  type="button"
                  onClick={filterCityOdessa}
                  className="cities-card__link"
                >
                  <NavLink to="/sale">
                    Продажа
                </NavLink>
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
                <button
                  type="button"
                  onClick={filterCityLvov}
                  className="cities-card__link"
                >
                  <NavLink to="/rent">
                    Аренда
                </NavLink>
                </button>
                <button
                  type="button"
                  onClick={filterCityLvov}
                  className="cities-card__link"
                >
                  <NavLink to="/sale">
                    Продажа
                </NavLink>
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );

const mapStateToProps = state => ({
  cityFilter: state.filterReducer.cityFilter
});

const mapDispatchToProps = dispatch => ({
  filterCityLvov: () => dispatch(filterCityLvovCreator()),
  filterCityKiev: () => dispatch(filterCityKievCreator()),
  filterCityKharkov: () => dispatch(filterCityKharkovCreator()),
  filterCityDnepr: () => dispatch(filterCityDneprCreator()),
  filterCityOdessa: () => dispatch(filterCityOdessaCreator()),

});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(HomePageCities);

export { Enhanced as HomePageCities };

HomePageCities.propTypes = {
  filterCityLvov: PropTypes.func.isRequired,
  filterCityKiev: PropTypes.func.isRequired,
  filterCityKharkov: PropTypes.func.isRequired,
  filterCityDnepr: PropTypes.func.isRequired,
  filterCityOdessa: PropTypes.func.isRequired,
};