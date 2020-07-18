import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {
  NavLink,
} from 'react-router-dom';
import { filterCategoryNewsCreator, activeMainFormCreator, activeRegFormCreator, handleLoadNewsAds, } from "../../redux/actionCreators";
import { resetFilters } from "../../redux/actionFilterCreators";
import './Header.scss';

const Header = ({ resetFilters, activeMainFormFunc, activeRegFormFunc, mainform, regform, isLoaded, loadData, }) => {
  useEffect(() => {
    loadData();
  }, []);


  const [activeLink, setActiveLink] = useState(mainform)
  const [activeReg, setActiveReg] = useState(regform)
  const [isOpenModal, setIsOpenModal] = useState(false)

  //   cosnt[data, setData]=useState({})
  // const handleChange = (name, value)=>{
  //   setData(prev=>({...prev, [name]:value}))
  // }

  activeMainFormFunc(activeLink)
  activeRegFormFunc(activeReg)

  // const handleSubmit = (event) => {
  //   alert('Отправленное имя: ' + this.state.value)
  //   event.preventDefault()
  // }

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
              onClick={e => { setIsOpenModal(true) }}
            >
              + Добавить объявление
          </button>
          </div>
        </div>
      </div>


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

            {/* <input type="radio" id="loginFormButton" checked name="Form" /> */}
            {(activeLink === "loginForm") && (isLoaded) &&
              <div className="wrap-login wrapper-form">
                <form id="loginForm">
                  <input type="text" placeholder="Имя пользователя" />

                  <input type="email" placeholder="E-mail" />
                  <input type="submit" value="Войти" />
                </form>

                <label htmlFor="repairFormButton" onClick={e => { setActiveLink("repairForm") }}>
                  Забыли пароль?
                {/* Забыли пароль? */}
                </label>
                <div className="soc-block">
                  <p>Нажимая на кнопку «Регистрация»,<br />
                        я соглашаюсь с <a href="#">правилами сервиса</a></p>
                  <p><span>или войдите через: </span></p>

                  <div className="soc-icons">
                    <a href="facebook.com"><i class="fab fa-facebook-f"></i></a>
                    <a href="google.com"><i class="fab fa-google-plus-g"></i></a>
                    <a href="twitter.com"><i class="fab fa-twitter"></i></a>
                    <a href="vk.com"><i class="fab fa-vk"></i></a>

                  </div>
                </div>
              </div>
            }

            {/* <input type="radio" id="regFormButton" name="Form" /> */}

            {
              (activeLink === "regForm") && (isLoaded) &&
              <div id="registrationForm" className="wrapper-form">
                <div className="top-form reg">
                  <label onClick={e => { setActiveReg("privateReg") }} className={activeReg === "privateReg" ? "private-link active-link" : ""} htmlFor="privateRegForm">Я частник</label>
                  <label onClick={e => { setActiveReg("rieltorReg") }} className={activeReg === "rieltorReg" ? "rieltor-link active-link" : ""} htmlFor="rielterRegForm">Я риэлтор</label>
                </div>

                {
                  (activeReg === "privateReg") && (isLoaded) &&
                  <div className="wrapper-form">

                    <form id="registrationForm1">
                      <input type="text" placeholder="Имя пользователя" />
                      <input type="email" placeholder="E-mail" />
                      <input type="submit" value="Регистрация" />
                    </form>
                    <div className="soc-block">
                      <p>Нажимая на кнопку «Регистрация»,<br />
                        я соглашаюсь с <a href="#">правилами сервиса</a></p>
                      <p><span>или войдите через: </span></p>

                      <div className="soc-icons">
                        <a href="facebook.com"><i class="fab fa-facebook-f"></i></a>
                        <a href="google.com"><i class="fab fa-google-plus-g"></i></a>
                        <a href="twitter.com"><i class="fab fa-twitter"></i></a>
                        <a href="vk.com"><i class="fab fa-vk"></i></a>

                      </div>
                    </div>
                  </div>
                }


                {
                  (activeReg === "rieltorReg") && (isLoaded) &&
                  <div className="wrapper-form">

                    <form id="registrationForm2">

                      <input type="email" placeholder="E-mail" />
                      <div className="field-wrap">
                        <input type="text" placeholder="Пароль" />
                        <input type="text" placeholder="Повторите пароль" />
                      </div>
                      <div className="field-wrap">
                        <input type="text" placeholder="Название агенства" />
                        <input type="text" placeholder="№ свидетельства АСНУ" />
                      </div>
                      <div className="field-wrap">
                        <input type="text" placeholder="Город" />
                        <input type="text" placeholder="Адрес" />
                      </div>

                      <PhoneInput
                        country='ua'
                        regions={'europe'}
                      />

                      <input type="submit" value="Регистрация" />
                    </form>
                    <div className="soc-block">
                      <p>Нажимая на кнопку «Регистрация»,<br />
                        я соглашаюсь с <a href="#">правилами сервиса</a></p>
                      <p><span>или войдите через: </span></p>

                      <div className="soc-icons">
                        <a href="facebook.com"><i class="fab fa-facebook-f"></i></a>
                        <a href="google.com"><i class="fab fa-google-plus-g"></i></a>
                        <a href="twitter.com"><i class="fab fa-twitter"></i></a>
                        <a href="vk.com"><i class="fab fa-vk"></i></a>

                      </div>
                    </div>
                  </div>

                }
              </div>
            }

            {(activeLink === "repairForm") && (isLoaded) &&
              // <input type="radio" name="Form" id="repairFormButton" />
              <div className="wrap-repair wrapper-form">
                <form id="repairForm">
                  <input type="text" placeholder="Имя пользователя или логин" />
                  <p className="error-field">*Это поле обязательно</p>
                  <input type="submit" value="Восстановить" />
                </form>

              </div>
            }
          </div>

        </div>
      </div>

    </header >
  )
};


// const mapStateToProps = (state) => ({
//   filterCategoryNews: state.mainReducer.filterCategoryNews,
// });
const mapStateToProps = (state) => ({

  isLoaded: state.mainReducer.isLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  activeMainFormFunc: (active) => dispatch(activeMainFormCreator(active)),
  activeRegFormFunc: (activeReg) => dispatch(activeRegFormCreator(activeReg)),
  filterCategoryNews: (number) => dispatch(filterCategoryNewsCreator(number)),
  resetFilters: () => dispatch(resetFilters()),
  loadData: () => dispatch(handleLoadNewsAds()),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(Header);

export { Enhanced as Header };