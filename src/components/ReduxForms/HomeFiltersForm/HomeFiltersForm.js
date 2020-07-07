import React, { useState } from 'react';
import { connect } from 'react-redux';
import './HomeFiltersForm.scss';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import { TypeDropdown } from './DropdownsForm/TypeDropdown';
import { StatusDropdown } from './DropdownsForm/StatusDropdown';
import { TotalAreaDropdown } from './DropdownsForm/TotalAreaDropdown';
import { FloorDropdown } from './DropdownsForm/FloorDropdown';
import { RoomDropdown } from './DropdownsForm/RoomDropdown';
import { WallsDropdown } from './DropdownsForm/WallsDropdown';
import { HeatingDropdown } from './DropdownsForm/HeatingDropdown';
import { OfferDropdown } from './DropdownsForm/OfferDropdown';
import { BuildingDropdown } from './DropdownsForm/BuildingDropdown';
import { CeilingHeightDropdown } from './DropdownsForm/CeilingHeightDropdown';
import { SelectRegionDropdown } from './DropdownsForm/SelectRegionDropdown';
import { SelectCityDropdown } from './DropdownsForm/SelectCityDropdown';

const HomeFiltersForm = ({ adsLength, typeFilter, isLoaded }) => {

  const [count, setStatusAddInfo] = useState(false)

  return (
    <section className="home-filters">
      <div className="container">
        <h1 className="home-filters__title">
          Поиск недвижимости из {adsLength} объявлений
      </h1>
        <div className="wrap-main-filter">
          <form className="home-filters-form">

            {/* фильтр по статусу */}
            <div className="block">
              <label htmlFor="status-filter">
                Раздел
              {isLoaded && <StatusDropdown typeFilter={typeFilter} />}
              </label>
            </div>

            {/* фильтр по типу */}
            <div className="block">
              <label htmlFor="type-filter">
                Тип недвижимости
              {isLoaded && <TypeDropdown />}
              </label>
            </div>

            {/* фильтр по области */}
            <div className="block">
              <label htmlFor="region-filter">
                Область
              <SelectRegionDropdown />
              </label>
            </div>

            {/* фильтр по городу */}
            <div className="block">
              <label htmlFor="city-filter">
                Город
              <SelectCityDropdown />
              </label>
            </div>

            {/* фильтр по району */}
            <div className="block">
              <label htmlFor="district-filter">
                Район
              <select name="" id="district-filter">
                  <option value="">Не выбрано</option>
                </select>
              </label>
            </div>

            {/* фильтр по типу стен */}
            <div className="block">
              <label htmlFor="wall-filter">
                Тип стен
                {isLoaded && <WallsDropdown />}
              </label>
            </div>

            {/* фильтр по заказчику */}
            <div className="block">
              <label htmlFor="offer-filter">
                Тип предложения
              {isLoaded && <OfferDropdown />}
              </label>
            </div>

            {/* фильтр по площади */}
            <div className="block">
              <label htmlFor="total-area-filter">
                Общая площадь
              {isLoaded && <TotalAreaDropdown />}
              </label>
            </div>

            {/* фильтр по отоплению */}
            <div className="block">
              <label htmlFor="heating-filter">
                Тип отопления
              {isLoaded && <HeatingDropdown />}
              </label>
            </div>

            {/* фильтр по этажу */}
            <div className="block">
              <label htmlFor="">
                Этаж
              {isLoaded && <FloorDropdown />}
              </label>
            </div>

            {/* фильтр по типу здания */}
            <div className="block">
              <label htmlFor="building-filter">
                Тип здания
            {isLoaded && <BuildingDropdown />}
              </label>
            </div>

            {/* фильтр по высоте потолков */}
            <div className="block">
              <label htmlFor="ceiling-height-filter">
                Высота потолков
            {isLoaded && <CeilingHeightDropdown />}
              </label>
            </div>

            {/* фильтр по комнатам */}
            <div className="block">
              <label htmlFor="rooms-filter">
                Комнат
              <RoomDropdown />
              </label>
            </div>

            {/* фильтр по цене */}
            <div className="block">
              <label htmlFor="">
                Цена
              <div className="wrap-price">
                  <input type="number" placeholder="От" />
                  <input type="number" placeholder="До" />
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

          <div className='additional-block-wrap'>
            <button onClick={() => setStatusAddInfo(!count)}><i className={count ? 'fa fa-minus-square-o' : 'fa fa-plus-square-o'}></i>Дополнительные параметры</button>

            <div className={clsx('additional-block', (count === true) && 'active')}>
              <div className="parametrs">
                <p>Удобства:</p>
                <div className="facilities">
                  <input type="checkbox" id="wifi-check" />
                  <label htmlFor="wifi-check">
                    Wi-Fi
              </label>

                  <input type="checkbox" id="bath-check" />
                  <label htmlFor="bath-check">
                    Баня
              </label>

                  <input type="checkbox" id="pool-check" />
                  <label htmlFor="pool-check">
                    Бассейн
              </label>

                  <input type="checkbox" id="boiler-check" />
                  <label htmlFor="boiler-check">
                    Бойлер
              </label>

                  <input type="checkbox" id="gas-plate-check" />
                  <label htmlFor="gas-plate-check">
                    Газовая плита
              </label>

                  <input type="checkbox" id="garage-check" />
                  <label htmlFor="garage-check">
                    Гараж
              </label>

                  <input type="checkbox" id="jakoozee-check" />
                  <label htmlFor="jakoozee-check">
                    Джакузи
              </label>

                  <input type="checkbox" id="shower-stall-check" />
                  <label htmlFor="shower-stall-check">
                    Душевая кабинка
              </label>

                  <input type="checkbox" id="internet-check" />
                  <label htmlFor="internet-check">
                    Интернет
              </label>

                  <input type="checkbox" id="cable-tv-check" />
                  <label htmlFor="cable-tv-check">
                    Кабельное ТВ
              </label>

                  <input type="checkbox" id="fireplace-check" />
                  <label htmlFor="fireplace-check">
                    Камин
              </label>

                  <input type="checkbox" id="conditioner-check" />
                  <label htmlFor="conditioner-check">
                    Кондиционер
              </label>

                  <input type="checkbox" id="kitchen-check" />
                  <label htmlFor="kitchen-check">
                    Кухня
              </label>

                  <input type="checkbox" id="elevator-check" />
                  <label htmlFor="elevator-check">
                    Лифт
              </label>

                  <input type="checkbox" id="furniture-check" />
                  <label htmlFor="furniture-check">
                    Мебель
              </label>

                  <input type="checkbox" id="microwave-check" />
                  <label htmlFor="microwave-check">
                    Микроволновая печь
              </label>

                  <input type="checkbox" id="sauna-check" />
                  <label htmlFor="sauna-check">
                    Сауна
              </label>

                  <input type="checkbox" id="wash-check" />
                  <label htmlFor="wash-check">
                    Стиральная машина
              </label>

                  <input type="checkbox" id="tv-check" />
                  <label htmlFor="tv-check">
                    Телевизор
              </label>


                </div>
              </div>

              <div className="terms">
                <p>Тип сделки:</p>

                <input type="checkbox" id="credit-check" />
                <label htmlFor="credit-check">
                  Возможна рассрочка/кредит
              </label>

                <input type="checkbox" id="torg-check" />
                <label htmlFor="torg-check">
                  Возможен торг
              </label>

                <input type="checkbox" id="replace-check" />
                <label htmlFor="replace-check">
                  Возможен обмен
              </label>
              </div>
            </div>
          </div>
        </div >
      </div>
    </section >
  )
};

const mapStateToProps = state => ({
  typeFilter: state.filterReducer.typeFilter,
  isLoaded: state.mainReducer.isLoaded,
})

// const mapDispatchToProps = dispatch => ({
//   typeHouse: () => dispatch(houseTypeCreator()),
//   typeAppartment: () => dispatch(appartmentTypeCreator()),
//   typeCommerce: () => dispatch(commerceTypeCreator())
// });

const Enhanced = connect(mapStateToProps, null)(HomeFiltersForm);

export { Enhanced as HomeFiltersForm };

// export default React.memo(HomeFiltersForm);
