import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Link,
} from 'react-router-dom';
import './Navigation.scss';
import { propStatusFilterCreator, typeFilterCreator, propRegionFilterCreator, resetFilters } from '../../../redux/actionHomeFilterCreators';
import { filterCategoryNewsCreator } from '../../../redux/actionCreators'

const Navigation = ({
  category,
  categoryFilterFunc,
  titleNew,
  statusFilterFunc,
  typeFilterFunc,
  pageName,
  typeFilter,
  statusFilter,
  resetFiltersFunc,
  regionFilter,
  regionFilterFunc,
  cityFilter,
  districtFilter
}) => {


  return (

    <div className="common-nav">
      <div className="container">
        <div className="common-nav__wrapper">
          <Link to="/" className="common-nav__link">Domlook</Link>
          {/* status */}
          {pageName === "Продажа" && !statusFilter && <Link to="/sale" className="common-nav__link">Продажа</Link>}
          {pageName === "Объявления" && <Link to="/advertisement" className="common-nav__link">Объявления</Link>}
          {pageName === "Аренда" && !statusFilter && <Link to="/rent" className="common-nav__link">Аренда</Link>}
          {pageName === "Посуточно" && !statusFilter && <Link to="/dailyRent" className="common-nav__link">Посуточно</Link>}
          {pageName === "Избранное" && <Link to="/favourites" className="common-nav__link">Избранное</Link>}

          {/* news */}
          {pageName === "Новости" &&
            <Link Link to="/news" className="common-nav__link">
              <button onClick={() => (resetFiltersFunc(), categoryFilterFunc(''))}>
                Новости
              </button>
            </Link>}

          {category &&
            <Link to="/news" className="common-nav__link">
              <button onClick={() => (resetFiltersFunc(), categoryFilterFunc(category))}>
                {category}
              </button>
            </Link>}

          {category && titleNew && <span className="common-nav__link">{titleNew}</span>}


          {/* sale */}
          {statusFilter === "sale" &&
            <Link to={"/" + statusFilter} className="common-nav__link">
              <button
                onClick={() => (statusFilterFunc(statusFilter), typeFilterFunc(''))}>
                Продажа
                  </button>
            </Link>}
          {statusFilter === "rent" &&
            <Link to={"/" + statusFilter} className="common-nav__link">
              <button
                onClick={() => (resetFiltersFunc(), statusFilterFunc(statusFilter), typeFilterFunc(''))}>
                Аренда
                  </button>
            </Link>}
          {statusFilter === "dailyRent" &&
            <Link to={"/" + statusFilter} className="common-nav__link">
              <button
                onClick={() => (statusFilterFunc(statusFilter), typeFilterFunc(''))}
              >
                Посуточно
                  </button>
            </Link>}
          {typeFilter === "apartment" &&
            <Link to={"/" + statusFilter} className="common-nav__link">
              <button
                onClick={() => (typeFilterFunc(typeFilter), regionFilterFunc(''), statusFilterFunc(statusFilter))}
              >
                Квартиры
                  </button>
            </Link>}
          {typeFilter === "house" &&
            <Link to={"/" + statusFilter} className="common-nav__link">
              <button
                onClick={() => (typeFilterFunc(typeFilter), regionFilterFunc(''), statusFilterFunc(statusFilter))}
              >
                Дома
                </button>
            </Link>}
          {typeFilter === "commerce" &&
            <Link to={"/" + statusFilter} className="common-nav__link">
              <button
                onClick={() => (typeFilterFunc(typeFilter), regionFilterFunc(''), statusFilterFunc(statusFilter))}
              >
                Коммерческая недвижимость
                  </button>
            </Link>}
          {regionFilter &&
            <Link to={"/" + statusFilter} className="common-nav__link">
              <button
                onClick={() => (typeFilterFunc(typeFilter), statusFilterFunc(statusFilter), regionFilterFunc(regionFilter))}
              >
                {regionFilter}
              </button>
            </Link>}
          {cityFilter &&
            <span className="common-nav__link">{cityFilter}</span>}
          {districtFilter &&
            <span className="common-nav__link">{districtFilter}</span>}

        </div >
      </div >
    </div >
  )
};
const mapDispatchToProps = dispatch => ({
  typeFilterFunc: selectedOption => dispatch(typeFilterCreator(selectedOption)),
  statusFilterFunc: selectedOption => dispatch(propStatusFilterCreator(selectedOption)),
  regionFilterFunc: selectedOption => dispatch(propRegionFilterCreator(selectedOption)),
  categoryFilterFunc: selectedOption => dispatch(filterCategoryNewsCreator(selectedOption)),

  resetFiltersFunc: () => dispatch(resetFilters())
});

const Enhanced = connect(null, mapDispatchToProps)(Navigation);

export { Enhanced as Navigation };
