import React from 'react';
import { connect } from 'react-redux';
import './HomeFiltersForm.scss';
import { NavLink } from 'react-router-dom';

import { TypeDropdown } from './DropdownsForm/TypeDropdown';
import { StatusDropdown } from './DropdownsForm/StatusDropdown';

const HomeFiltersForm = ({ adsLength, typeFilter }) => {

  return (
    <section className="home-filters">
      <div className="container">
        <h1 className="home-filters__title">
          Поиск недвижимости из {adsLength} объявлений
      </h1>
        <form className="home-filters-form">

          <div className="block">
            <label htmlFor="">
              Тип недвижимости
              <TypeDropdown />
            </label>
          </div>

          <div className="block">
            <label htmlFor="">
              Раздел
              <StatusDropdown typeFilter={typeFilter} />
            </label>
          </div>

          <div className="block">
            <label htmlFor="">
              Область
              <select name="" id="">
                <option value="">Не выбрано</option>
              </select>
            </label>
          </div>

          <div className="block">
            <label htmlFor="">
              Город
            <select name="" id="">
                <option value="">Не выбрано</option>
              </select>
            </label>
          </div>

          <div className="block">
            <label htmlFor="">
              Район
              <select name="" id="">
                <option value="">Не выбрано</option>
              </select>
            </label>
          </div>

          <div className="block">
            <label htmlFor="">
              Тип стен
            <select name="" id="">
                <option value="">Не выбрано</option>
                <option value="">силикатный кирпич</option>
                <option value="">ракушечник</option>
                <option value="">пеноблок</option>
                <option value="">панель</option>
                <option value="">монолит</option>
                <option value="">кирпич</option>
                <option value="">бутовый камень</option>
              </select>
            </label>
          </div>

          <div className="block">
            <label htmlFor="">
              Тип предложения
            <select name="" id="">
                <option value="">Не выбрано</option>
                <option value="">От хозяина</option>
                <option value="">От собственника</option>
                <option value="">От представителя застройщика</option>
                <option value="">От посредника</option>
                <option value="">От застройщика</option>
              </select>
            </label>
          </div>

          <div className="block">
            <label htmlFor="">
              Общая площадь
            <select name="" id="">
                <option value="">Не выбрано</option>
                <option value="">От 25м</option>
                <option value="">От 45м</option>
                <option value="">От 65м</option>
                <option value="">От 100м</option>

              </select>
            </label>
          </div>

          <div className="block">
            <label htmlFor="">
              Тип отопления
            <select name="" id="">
                <option value="">Не выбрано</option>
                <option value="">Централизованное</option>
                <option value="">Индивидуальное</option>
                <option value="">Автономное</option>
              </select>
            </label>
          </div>

          <div className="block">
            <label htmlFor="">
              Этаж
            <select name="" id="">
                <option value="">Не выбрано</option>
                <option value="">до 6 эт.</option>
                <option value="">до 10 эт.</option>
                <option value="">до 17 эт.</option>
                <option value="">до 25 эт.</option>
              </select>
            </label>
          </div>
          <div className="block">
            <label htmlFor="">
            Тип здания
              
            <select name="" id="">
                <option value="">Чешский проект</option>
                <option value="">Хрущевка</option>
                <option value="">Сталинка</option>
              </select>
            </label>
          </div>

          <div className="block">
            <label htmlFor="">
            Высота потолков
            <select name="" id="">
                <option value="">Не выбрано</option>
                <option value="">до 2.6</option>
                <option value="">до 2.8</option>
                <option value="">до 3</option>
                <option value="">до 3.2</option>
                <option value="">до 3.4</option>
              </select>
            </label>
          </div>

 

          <div className="block">
            <label htmlFor="">
              Комнат
            <select name="" id="">
                <option value="">Не выбрано</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
              </select>
            </label>
          </div>

          <div className="block">
            <label htmlFor="">
              Цена
              <div className="wrap-price">
                <input type="number" placeholder="От"/>
                <input type="number" placeholder="До"/>
                <select name="" id="">
                  <option value="hrn">грн.</option>
                  <option value="dollar">$</option>
                  <option value="euro">€</option>
                </select>
              </div>
            
            </label>
          </div>

          <div className="block">
            <NavLink
              to={`/${typeFilter}`}
              replace
              exact
            >
              <button>Найти</button>
            </NavLink>
            {/* <input type="Submit" value="Найти" /> */}
          </div>
        </form>
      </div >
    </section >
  )
};

const mapStateToProps = state => ({
  typeFilter: state.filterReducer.typeFilter,
})

// const mapDispatchToProps = dispatch => ({
//   typeHouse: () => dispatch(houseTypeCreator()),
//   typeAppartment: () => dispatch(appartmentTypeCreator()),
//   typeCommerce: () => dispatch(commerceTypeCreator())
// });

const Enhanced = connect(mapStateToProps, null)(HomeFiltersForm);

export { Enhanced as HomeFiltersForm };

// export default React.memo(HomeFiltersForm);
