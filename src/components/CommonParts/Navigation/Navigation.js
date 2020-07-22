import React from 'react';
import { connect } from 'react-redux';
import {
  Link,
} from 'react-router-dom';
import './Navigation.scss';
import { propStatusFilterCreator, typeFilterCreator, propRegionFilterCreator } from '../../../redux/actionHomeFilterCreators'

const Navigation = ({ statusFilterFunc, regionFilterFunc, typeFilterFunc, pageName, titleNew, typeFilter, statusFilter, resetFilters, regionFilter, cityFilter, districtFilter }) => {


  // console.log(regionFilter, typeFilter)

  return (

    <div className="common-nav">
      <div className="container">
        <div className="common-nav__wrapper">
          <Link to="/" className="common-nav__link">Domlook</Link>
          {pageName === "Продажа" && !statusFilter && <Link to="/sale" className="common-nav__link">Продажа</Link>}
          {pageName === "Объявления" && <Link Link to="/advertisement" className="common-nav__link">Объявления</Link>}
          {pageName === "Аренда" && !statusFilter && <Link to="/rent" className="common-nav__link">Аренда</Link>}
          {pageName === "Посуточно" && !statusFilter && <Link to="/dailyRent" className="common-nav__link">Посуточно</Link>}
          {pageName === "Новости" && <Link Link to="/news" className="common-nav__link">Новости</Link>}
          {titleNew && <span className="common-nav__link">{titleNew}</span>}
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
                onClick={() => (statusFilterFunc(statusFilter), typeFilterFunc(''))}>
                Аренда
                  </button>
            </Link>}
          {statusFilter === "dailyrent" &&
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

          {/* <span className="common-nav__page-name">{pageName}</span> */}
        </div >
      </div >
    </div >
  )
};
const mapDispatchToProps = dispatch => ({
  typeFilterFunc: selectedOption => dispatch(typeFilterCreator(selectedOption)),
  statusFilterFunc: selectedOption => dispatch(propStatusFilterCreator(selectedOption)),
  regionFilterFunc: selectedOption => dispatch(propRegionFilterCreator(selectedOption))
});

const Enhanced = connect(null, mapDispatchToProps)(Navigation);

export { Enhanced as Navigation };
