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
import { SelectDistrictDropdown } from './DropdownsForm/SelectDistrictDropdown';
import { PriceFromTo } from './DropdownsForm/PriceFromTo';
import { Facilities } from './Facilities/Facilities';

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
              <label htmlFor="select-city-filter">
                Район
         <SelectDistrictDropdown />
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
                <PriceFromTo />
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
              <Facilities />

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
