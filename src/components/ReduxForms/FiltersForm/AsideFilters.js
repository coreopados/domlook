import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withSizes from 'react-sizes';
import './AsideFilters.scss';
import { NavLink } from 'react-router-dom';

import { TypeDropdown } from '../HomeFiltersForm/DropdownsForm/TypeDropdown';
import { StatusDropdown } from '../HomeFiltersForm/DropdownsForm/StatusDropdown';
import { TotalAreaDropdown } from '../HomeFiltersForm/DropdownsForm/TotalAreaDropdown';
import { FloorDropdown } from '../HomeFiltersForm/DropdownsForm/FloorDropdown';
import { RoomDropdown } from '../HomeFiltersForm/DropdownsForm/RoomDropdown';
import { WallsDropdown } from '../HomeFiltersForm/DropdownsForm/WallsDropdown';
import { HeatingDropdown } from '../HomeFiltersForm/DropdownsForm/HeatingDropdown';
import { OfferDropdown } from '../HomeFiltersForm/DropdownsForm/OfferDropdown';
import { BuildingDropdown } from '../HomeFiltersForm/DropdownsForm/BuildingDropdown';
import { CeilingHeightDropdown } from '../HomeFiltersForm/DropdownsForm/CeilingHeightDropdown';
import { SelectRegionDropdown } from '../HomeFiltersForm/DropdownsForm/SelectRegionDropdown';
import { SelectCityDropdown } from '../HomeFiltersForm/DropdownsForm/SelectCityDropdown';
import { SelectDistrictDropdown } from '../HomeFiltersForm/DropdownsForm/SelectDistrictDropdown';
import { PriceFromTo } from '../HomeFiltersForm/DropdownsForm/PriceFromTo';
import { Facilities } from '../HomeFiltersForm/Facilities/Facilities';
import { TypeTransaction } from '../HomeFiltersForm/TypeTransaction/TypeTransaction';
import { FilterById } from '../HomeFiltersForm/DropdownsForm/FilterById';
import { setFilterCloseCreator } from '../../../redux/actionCreators';

const AsideFilters = ({
  isLoaded,
  typeFilter,
  statusFilter,
  match,
  priceFrom,
  priceTo,
  regionFilter,
  cityFilter,
  districtFilter,
  features,
  transaction,
  idFilter,
  onCloseFilters,
  isMobile,
  isAsideFormOpen,

  wallsFilter,
  heatingFilter,
  ceilingHeightFilter,
  buildingFilter,
  offerFilter,
  roomFilter,
  floorFilter,
  totalAreaFilter
}) => {

  const [filterById, setFilterById] = useState(false)
  const [addInfo, setStatusAddInfo] = useState(false)

  console.log(isMobile, isAsideFormOpen);

  return (
    <aside className={`common-filters ${(isMobile && isAsideFormOpen) ? 'common-filters--show' : ''}`}>
      <button
        type="button"
        className="common-filters__close-btn"
        onClick={() => onCloseFilters()}
      >
        x
      </button>
      <form className="common-filters-form">

        <div className="topFilter filter-section">

          {/* фильтр по типу */}
          <div className="block">
            <label htmlFor="status-filter">
              <span>Поиск: </span>
              <div className="status-filter-select">

                <StatusDropdown

                  match={match}
                  statusFilter={statusFilter}
                />
              </div>
            </label>


            <p className="search-by-Id-button" onClick={e => setFilterById(true)}>Поиск по ID</p>

            <div className={filterById === false ? "searchById" : "searchById show"}>

              <FilterById idFilter={idFilter} cancel={e => setFilterById(false)} />

            </div>

          </div>

          {/* фильтр по статусу */}
          <div className="block">
            <label htmlFor="type-filter">

              <TypeDropdown
                typeFilter={typeFilter}
                match={match}
              />

            </label>
          </div>
        </div>



        <div className="byRegion filter-section">
          {/* фильтр по области */}
          <div className="block">
            <label htmlFor="region-filter">
              Область
              {isLoaded && <SelectRegionDropdown regionFilter={regionFilter} />}
            </label>
          </div>

          {/* фильтр по городу */}
          <div className="block">
            <label htmlFor="city-filter">
              Город
              {isLoaded && <SelectCityDropdown cityFilter={cityFilter} />}
            </label>
          </div>

          {/* фильтр по району */}
          <div className="block">
            <label htmlFor="select-city-filter">
              Район
              {isLoaded && <SelectDistrictDropdown districtFilter={districtFilter} />}
            </label>
          </div>
        </div>

        <div className="filter-section">
          {/* фильтр по типу стен */}
          <div className="block">
            <label htmlFor="wall-filter">
              Тип стен
                {isLoaded && <WallsDropdown wallsFilter={wallsFilter} />}
            </label>
          </div>

          {/* фильтр по заказчику */}
          <div className="block">
            <label htmlFor="offer-filter">
              Тип предложения
              {isLoaded && <OfferDropdown offerFilter={offerFilter} />}
            </label>
          </div>

          {/* фильтр по площади */}
          <div className="block">
            <label htmlFor="total-area-filter">
              Общая площадь
              {isLoaded && <TotalAreaDropdown totalAreaFilter={totalAreaFilter} />}
            </label>
          </div>

          {/* фильтр по отоплению */}
          <div className="block">
            <label htmlFor="heating-filter">
              Тип отопления
              {isLoaded && <HeatingDropdown heatingFilter={heatingFilter} />}
            </label>
          </div>

          {/* фильтр по этажу */}
          <div className="block">
            <label htmlFor="">
              Этаж
              {isLoaded && <FloorDropdown floorFilter={floorFilter} />}
            </label>
          </div>

          {/* фильтр по типу здания */}
          <div className="block">
            <label htmlFor="building-filter">
              Тип здания
            {isLoaded && <BuildingDropdown buildingFilter={buildingFilter} />}
            </label>
          </div>

          {/* фильтр по высоте потолков */}
          <div className="block">
            <label htmlFor="ceiling-height-filter">
              Высота потолков
            {isLoaded && <CeilingHeightDropdown ceilingHeightFilter={ceilingHeightFilter} />}
            </label>
          </div>

          {/* фильтр по комнатам */}
          <div className="block">
            <label htmlFor="rooms-filter">
              Комнат
              <RoomDropdown roomFilter={roomFilter} />
            </label>
          </div>
        </div>
        <p></p>
        {/* фильтр по цене */}
        <div className="block">
          <label htmlFor="">
            Цена
            <PriceFromTo
              priceFrom={priceFrom}
              priceTo={priceTo}
            />
          </label>
        </div>

        <p className="addition-param-button" onClick={() => setStatusAddInfo(!addInfo)}><i className={addInfo ? 'fa fa-minus-square-o' : 'fa fa-plus-square-o'}></i>Дополнительные параметры</p>
        <div className={addInfo === false ? "additional-param" : "additional-param show"}>
          <div className="block"><TypeTransaction typeTransaction={transaction} /></div>
          <div className="block"><Facilities Features={features} /></div>
        </div>

        <div className="block">
          <NavLink
            to={`/${statusFilter}`}
            replace
            exact
          >
            <button
              type="button"
              className="common-filters-form__submit"
            >
              Найти
            </button>
          </NavLink>
          {/* <input type="Submit" value="Найти" /> */}
        </div>
      </form>
    </aside>
  )
};

const mapStateToProps = state => ({
  isLoaded: state.mainReducer.isLoaded,
  isAsideFormOpen: state.mainReducer.isAsideFormOpen,
});

const mapDispatchToProps = dispatch => ({
  onCloseFilters: () => dispatch(setFilterCloseCreator()),
});

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 1200,
});

const Enhanced = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withSizes(mapSizesToProps),
)(AsideFilters);

export { Enhanced as AsideFilters };