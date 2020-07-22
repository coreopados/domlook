import React, { useState, useEffect, useCallback } from 'react';
import { connect } from "react-redux";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {
  NavLink,
} from 'react-router-dom';

import { filterCategoryNewsCreator, activeMainFormCreator, activeRegFormCreator, handleLoadNewsAds, } from "../../redux/actionCreators";
import { resetFilters } from "../../redux/actionFilterCreators";
import './Header.scss';
import { propStatusFilterCreator } from '../../redux/actionHomeFilterCreators';
import { LoginForm } from './Form/LoginForm'
import RegFormPrivate from './Form/RegFormPrivate'
import RegFormRielter from './Form/RegFormRielter'
import RepairForm from './Form/RepairForm'



const Header = ({ statusFilterFunc, resetFilters, isLogged, activeMainFormFunc, activeRegFormFunc, mainform, regform, isLoaded, loadData, }) => {
  useEffect(() => {
    loadData();
  }, []);



  const [activeLink, setActiveLink] = useState(mainform)
  const [activeReg, setActiveReg] = useState(regform)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isLoggedd, setIsLoggedd] = useState(isLogged)

  console.log(isOpenModal)
  activeMainFormFunc(activeLink);
  activeRegFormFunc(activeReg);


  return (
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

          {isLoggedd === false &&
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
                  onClick={e => { setIsOpenModal(true) }}
                  type="button"
                  className="header-top-section__button
              header-top-section__button--sign-in-up"
                >
                  Вход/Регистрация
            </button>
              </div>
            </div>
          }

          {isLoggedd === true &&
            <div className="header-top-section">
              <div className="header-top-section__wrapper-logged">
                {/* <NavLink
                  to="/"
                  className="header-top-section__link"
                > */}
                <button
                  type="button"
                  className="header-top-section__button header-top-section__button--spriel "
                >
                  {/* <i class="fa fa-user"></i> */}
                  Список риелтеров
                  </button>
                {/* </NavLink>
                <NavLink> */}
                <button

                  type="button"
                  className="header-top-section__button  header-top-section__button--s-ch"
                >
                  {/* <i class="fa fa-plus-circle"></i> */}
                  Список частников
                  </button>
                {/* </NavLink>*/}
                {/* <NavLink to="/"> */}
                <button

                  type="button"
                  className="header-top-section__button header-top-section__button--dob"
                >
                  {/* <i class="fa fa-plus-circle"></i> */}
                  Добавить объявление
                  </button>
                {/* </NavLink> */}
                {/* <NavLink> */}
                <button

                  type="button"
                  className="header-top-section__button header-top-section__button--mo"
                >
                  {/* <i class="fa fa-th-list"></i> */}
                  Мои объекты
                  </button>
                {/* </NavLink>*/}
                <NavLink to="/favourites">
                  <button

                    type="button"
                    className="header-top-section__button header-top-section__button--favourites"
                  >
                    {/* <i class="fa fa-plus-circle"></i> */}
                  Избранное
                  </button>
                </NavLink>
                {/* <NavLink> */}
                <button

                  type="button"
                  className="header-top-section__button header-top-section__button--profile"
                >
                  {/* <i class="fa fa-plus-circle"></i> */}
                  Профиль
                  </button>
                {/* </NavLink> */}
                <button
                  onClick={e => setIsLoggedd(false)}
                  type="button"
                  className="header-top-section__button header-top-section__button--exit"
                >
                  <i className="fa fa-sign-out"></i>
                  Выйти
                  </button>
              </div>
            </div>
          }


          <div className="header-nav">
            <NavLink
              to="/"
              // to={`${process.env.PUBLIC_URL}/`}
              className="header-nav__logo-wrapper"
            >
              <div onClick={resetFilters}>
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
                  > <button onClick={resetFilters}>Продажа</button>
                  </NavLink>

                </li>
                <li className="navigation__item">
                  <NavLink
                    to="/rent"
                    // to={`${process.env.PUBLIC_URL}/rent`}
                    className="navigation__link"
                    activeClassName="navigation__link--active"
                  ><button onClick={() => (resetFilters(), statusFilterFunc("rent"))}> Аренда</button>

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
              onClick={e => { setIsOpenModal(true) }}
            >
              + Добавить объявление
          </button>
          </div>
        </div>
      </div>

      {isLoggedd === false &&
        <div>
          <div className={isOpenModal ? "layerForm" : "layerForm hidden"} onClick={e => setIsOpenModal(false)}>
          </div>

          <div className={isOpenModal ? "hidden-wrap" : "hidden-wrap hidden"}>
            <div className="wrapForm" >
              <div className="top-form">
                <label onClick={e => { setActiveLink("loginForm") }} htmlFor="loginFormButton" className={activeLink === "loginForm" ? "active-link" : ""}>
                  Логин
            </label>
                <label onClick={e => { setActiveLink("regForm") }} htmlFor="regFormButton" className={activeLink === "regForm" ? "active-link" : ""}>
                  Регистрация
            </label>
              </div>
              <div className="body-form">

                {/* форма входа */}

                {(activeLink === "loginForm") && (isLoaded) &&
                  <div>
                    <LoginForm isopen={e => setIsOpenModal(false)} isLogged={e => setIsLoggedd(true)} />

                    <label htmlFor="repairFormButton" onClick={e => { setActiveLink("repairForm") }}>
                      Забыли пароль?
               </label>

                    <div className="soc-block">
                      <p>Нажимая на кнопку «Регистрация»,<br />
      я соглашаюсь с <a href="#">правилами сервиса</a></p>
                      <p><span>или войдите через: </span></p>

                      <div className="soc-icons">
                        <a href="facebook.com"><i className="fab fa-facebook-f"></i></a>
                        <a href="google.com"><i className="fab fa-google-plus-g"></i></a>
                        <a href="twitter.com"><i className="fab fa-twitter"></i></a>
                        <a href="vk.com"><i className="fab fa-vk"></i></a>

                      </div>
                    </div>
                  </div>
                }

                {/* форма регистрации */}
                {
                  (activeLink === "regForm") && (isLoaded) &&
                  <div id="registrationForm" className="wrapper-form">
                    <div className="top-form reg">
                      <label onClick={e => { setActiveReg("privateReg") }} className={activeReg === "privateReg" ? "private-link active-link" : ""} htmlFor="privateRegForm">Я частник</label>
                      <label onClick={e => { setActiveReg("rieltorReg") }} className={activeReg === "rieltorReg" ? "rieltor-link active-link" : ""} htmlFor="rielterRegForm">Я риэлтор</label>
                    </div>

                    {
                      (activeReg === "privateReg") && (isLoaded) &&
                      <RegFormPrivate isopen={e => setIsOpenModal(false)} defaultactiveLink={e => setActiveLink('loginForm')} />
                    }

                    {/* регистрация риелтор */}
                    {
                      (activeReg === "rieltorReg") && (isLoaded) &&
                      <RegFormRielter isopen={e => setIsOpenModal(false)} defaultactiveLink={e => setActiveLink('loginForm')} />
                    }
                  </div>
                }


                {/* форма восстановления */}
                {(activeLink === "repairForm") && (isLoaded) &&
                  <RepairForm isopen={e => setIsOpenModal(false)} defaultactiveLink={e => setActiveLink('loginForm')} />
                }
              </div>

            </div>
          </div>
        </div>
      }
    </header >

  )
};


// const mapStateToProps = (state) => ({
//   filterCategoryNews: state.mainReducer.filterCategoryNews,
// });
const mapStateToProps = (state) => ({

  isLogged: state.filterReducer.isLogged,
  isLoaded: state.mainReducer.isLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  activeMainFormFunc: (active) => dispatch(activeMainFormCreator(active)),
  activeRegFormFunc: (activeReg) => dispatch(activeRegFormCreator(activeReg)),
  filterCategoryNews: (number) => dispatch(filterCategoryNewsCreator(number)),
  statusFilterFunc: (number) => dispatch(propStatusFilterCreator(number)),

  resetFilters: () => dispatch(resetFilters()),
  loadData: () => dispatch(handleLoadNewsAds()),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(Header);

export { Enhanced as Header };