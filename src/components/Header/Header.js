import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {
  NavLink,
} from 'react-router-dom';

import InputField from './Form/InputField'
import { filterCategoryNewsCreator, activeMainFormCreator, activeRegFormCreator, handleLoadNewsAds, } from "../../redux/actionCreators";
import { resetFilters } from "../../redux/actionFilterCreators";
import './Header.scss';
import { propStatusFilterCreator } from '../../redux/actionHomeFilterCreators';

const Header = ({ resetFilters, activeMainFormFunc, activeRegFormFunc, mainform, regform, isLoaded, loadData, }) => {
  useEffect(() => {
    loadData();
  }, []);

  const inputRefs = React.useRef([
    React.createRef(), React.createRef(),
  ]);

  const inputRefs2 = React.useRef([
    React.createRef(), React.createRef(),
  ]);
  const inputRefs3 = React.useRef([
    React.createRef(), React.createRef(),
    React.createRef(), React.createRef(),
    React.createRef(), React.createRef(),
  ]);
  const inputRefs4 = React.useRef([
    React.createRef()
  ]);

  const [activeLink, setActiveLink] = useState(mainform)
  const [activeReg, setActiveReg] = useState(regform)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isLogged, setIsLogged] = useState(false)

  const [data, setData] = useState({})


  const handleChange = (name, value) => {
    setData(prev => ({ ...prev, [value]: name }))
  }

  activeMainFormFunc(activeLink);
  activeRegFormFunc(activeReg);


  const submitForm = (e) => {
    e.preventDefault()
    let isValid = true;

    let Refs = '';
    if (e.target.id === 'loginForm') {
      Refs = inputRefs
    } else if (e.target.id === 'registrationForm_1') {
      Refs = inputRefs2
    } else if (e.target.id === 'registrationForm_2') {
      Refs = inputRefs3
    } else if (e.target.id === 'repairForm') {
      Refs = inputRefs4
    }

    for (let i = 0; i < Refs.current.length; i++) {

      const valid = Refs.current[i].current.validate();

      if (!valid) {
        isValid = false;
        // break;
      }

      if (!isValid) {
        return
      }

    }

    setIsLogged(true)
    setIsOpenModal(false);
  }


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

          {isLogged === false &&
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

          {isLogged === true &&
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
                {/* </NavLink>
                <NavLink> */}
                <button

                  type="button"
                  className="header-top-section__button header-top-section__button--dob"
                >
                  {/* <i class="fa fa-plus-circle"></i> */}
                  Добавить объявление
                  </button>
                {/* </NavLink>
                <NavLink> */}
                <button

                  type="button"
                  className="header-top-section__button header-top-section__button--mo"
                >
                  {/* <i class="fa fa-th-list"></i> */}
                  Мои объекты
                  </button>
                {/* </NavLink>
                <NavLink> */}
                <button

                  type="button"
                  className="header-top-section__button header-top-section__button--favourites"
                >
                  {/* <i class="fa fa-plus-circle"></i> */}
                  Избранное
                  </button>
                {/* </NavLink>
                <NavLink> */}
                <button

                  type="button"
                  className="header-top-section__button header-top-section__button--profile"
                >
                  {/* <i class="fa fa-plus-circle"></i> */}
                  Профиль
                  </button>
                {/* </NavLink> */}
                <button
                  onClick={e => setIsLogged(false)}
                  type="button"
                  className="header-top-section__button header-top-section__button--exit"
                >
                  <i class="fa fa-sign-out"></i>
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

            {/* форма входа */}

            {(activeLink === "loginForm") && (isLoaded) &&
              <div className="wrap-login wrapper-form">
                <form onSubmit={submitForm} id="loginForm">

                  <InputField
                    ref={inputRefs.current[0]}
                    type="text"
                    placeholder="Имя пользователя"
                    name="name"
                    onChange={handleChange}
                    // clear={clear}
                    validation={"required"}
                  />
                  <InputField
                    ref={inputRefs.current[1]}
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    onChange={handleChange}
                    // clear={clear}
                    validation={"required"}
                  />

                  <input type="submit" value="Войти" />
                </form>

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
                  <div className="wrapper-form">

                    <form onSubmit={submitForm} id="registrationForm_1">
                      <InputField
                        ref={inputRefs2.current[0]}
                        type="text"
                        placeholder="Имя пользователя"
                        name="name"
                        onChange={handleChange}
                        validation={"required|"}
                      />
                      <InputField
                        ref={inputRefs2.current[1]}
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        onChange={handleChange}
                        validation={"required|"}
                      />
                      <input type="submit" value="Регистрация" />
                    </form>
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

                {/* регистрация риелтор */}
                {
                  (activeReg === "rieltorReg") && (isLoaded) &&
                  <div className="wrapper-form">

                    <form onSubmit={submitForm} id="registrationForm_2">
                      <InputField
                        ref={inputRefs3.current[0]}
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        onChange={handleChange}
                        validation={"required"}
                      />

                      <div className="field-wrap">
                        <InputField
                          ref={inputRefs3.current[1]}
                          type="password"
                          placeholder="Пароль"
                          name="password"
                          onChange={handleChange}
                          validation={"required"}
                        />
                        <InputField
                          ref={inputRefs3.current[2]}
                          type="password"
                          placeholder="Повторите пароль"
                          name="password"
                          onChange={handleChange}
                          validation={"required"}
                        />

                      </div>
                      <div className="field-wrap">
                        <InputField
                          ref={inputRefs3.current[3]}
                          type="text"
                          placeholder="Название агенства"
                          name="agenstvo"
                          onChange={handleChange}
                          validation={"required"}
                        />
                        <InputField
                          ref={inputRefs3.current[4]}
                          type="number"
                          placeholder="№ свидетельства АСНУ"
                          name="number_certificate"
                          onChange={handleChange}
                          validation={"required"}
                        />

                      </div>
                      <div className="field-wrap">
                        <InputField
                          ref={inputRefs3.current[5]}
                          type="text"
                          placeholder="Город"
                          name="сшен"
                          onChange={handleChange}
                          validation={"required"}
                        />
                        <InputField
                          ref={inputRefs3.current[6]}
                          type="text"
                          placeholder="Адрес"
                          name="adress"
                          onChange={handleChange}
                          validation={"required"}
                        />


                      </div>

                      <PhoneInput
                        inputProps={{
                          name: 'phone',
                          required: true,
                          autoFocus: true,
                        }}
                        countryCodeEditable={false}
                        country='ua'
                        regions={'europe'}

                        onChange={handleChange}

                      />

                      <input type="submit" value="Регистрация" />
                    </form>
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
              </div>
            }


            {/* форма восстановления */}
            {(activeLink === "repairForm") && (isLoaded) &&
              <div className="wrap-repair wrapper-form">
                <form onSubmit={submitForm} id="repairForm">
                  <InputField
                    ref={inputRefs4.current[0]}
                    type="text"
                    placeholder="Имя пользователя или логин"
                    name="name_login"
                    onChange={handleChange}
                    validation={"required"}
                  />
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