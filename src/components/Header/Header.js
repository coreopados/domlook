import React from 'react';
import { connect } from "react-redux";
import {
  NavLink,
} from 'react-router-dom';
import { filterCategoryNewsCreator } from "../../redux/actionCreators";
import { resetFilters } from "../../redux/actionFilterCreators";
import './Header.scss';

const Header = ({ resetFilters }) => (
  <header className="header">
    <div className="header__background-wrapper">
      <img
        src="/domlook/img/header/main-bg.png"
        alt="фон"
        className="header__main-bg"
      />
      <div className="header__overlay-1" />
      <div className="header__overlay-2" />
    </div>
    <div className="container">
      <div className="header__wrapper">
        <div className="header-top-section">
          <div className="header-top-section__wrapper">
            <NavLink
              to="/favourites"
              className="header-top-section__link"
            >
              <button
                type="button"
                className="header-top-section__button
                header-top-section__button--favourites"
              >
                Избранное
              </button>
            </NavLink>
            <button
              type="button"
              className="header-top-section__button
              header-top-section__button--sign-in-up"
            >
              Вход/Регистрация
            </button>
          </div>
        </div>
        <div className="header-nav">
          <NavLink
            to="/"
            // to={`${process.env.PUBLIC_URL}/`}
            className="header-nav__logo-wrapper"
          ><div onClick={resetFilters}>
              <img
                src="/domlook/img/header/logo-header-1.png"
                alt="логотип"
                className="header-nav__logo-1"
              />
              <img
                src="/domlook/img/header/logo-header-2.png"
                alt="логотип"
                className="header-nav__logo-2"
              />
            </div>
          </NavLink>
          <nav className="navigation">
            <ul className="navigation__list">
              <li className="navigation__item">
                <NavLink
                  to="/sale"
                  // to={`${process.env.PUBLIC_URL}/sale`}
                  className="navigation__link"
                  activeClassName="navigation__link--active"
                ><button onClick={resetFilters}>Продажа</button>
                </NavLink>
              </li>
              <li className="navigation__item">
                <NavLink
                  to="/rent"
                  // to={`${process.env.PUBLIC_URL}/rent`}
                  className="navigation__link"
                  activeClassName="navigation__link--active"
                ><button onClick={resetFilters}> Аренда</button>

                </NavLink>
              </li>
              <li className="navigation__item">
                <NavLink
                  to="/dailyRent"
                  // to={`${process.env.PUBLIC_URL}/dailyRent`}
                  className="navigation__link"
                  activeClassName="navigation__link--active"
                ><button onClick={resetFilters}> Посуточно</button>

                </NavLink>
              </li>
              <li className="navigation__item">
                <NavLink
                  to="/news"
                  // to={`${process.env.PUBLIC_URL}/news`}
                  className="navigation__link"
                  activeClassName="navigation__link--active"
                  onClick={resetFilters}
                >
                  Новости рынка
                </NavLink>
              </li>
            </ul>
          </nav>
          <button
            type="button"
            className="header-nav__button"
          >
            + Добавить объявление
          </button>
        </div>
      </div>
    </div>
  </header>
);


// const mapStateToProps = (state) => ({
//   filterCategoryNews: state.mainReducer.filterCategoryNews,
// });

const mapDispatchToProps = (dispatch) => ({
  filterCategoryNews: (number) => dispatch(filterCategoryNewsCreator()),
  resetFilters: () => dispatch(resetFilters()),
});

const Enhanced = connect(null, mapDispatchToProps)(Header);

export { Enhanced as Header };