import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Link,
} from 'react-router-dom';
import './Navigation.scss';
import { typeFilterCreator, propRegionFilterCreator } from '../../../redux/actionHomeFilterCreators'

const Navigation = ({ regionFilterFunc, typeFilterFunc, pageName, titleNew, typeFilter, statusFilter, resetFilters, regionFilter, cityFilter, districtFilter }) => {


  console.log(regionFilter, typeFilter)

  return (

    <div className="common-nav">
      <div className="container">
        <div className="common-nav__wrapper">
          <Link to="/" className="common-nav__link">Domlook</Link>
          {pageName === "Продажа" && <Link to="/sale" className="common-nav__link">Продажа</Link>}
          {pageName === "Объявления" && <Link to="/advertisement" className="common-nav__link">Объявления</Link>}
          {pageName === "Аренда" && <Link to="/rent" className="common-nav__link">Аренда</Link>}
          {pageName === "Посуточно" && <Link to="/dailyRent" className="common-nav__link">Посуточно</Link>}
          {pageName === "Новости" && <Link to="/news" className="common-nav__link">Новости</Link>}
          {titleNew && <span className="common-nav__link">{titleNew}</span>}
          {statusFilter === "sale" && <Link to={"/" + statusFilter} className="common-nav__link">Продажа</Link>}
          {statusFilter === "rent" && <Link to={"/" + statusFilter} className="common-nav__link">Аренда</Link>}
          {statusFilter === "dailyrent" && <Link to={"/" + statusFilter} className="common-nav__link">Посуточно</Link>}
          {typeFilter === "apartment" && <Link to={"/" + statusFilter} className="common-nav__link"><button onClick={() => typeFilterFunc(typeFilter)}>Квартиры</button></Link>}
          {typeFilter === "house" && <Link to={"/" + statusFilter} className="common-nav__link"><button onClick={() => typeFilterFunc(typeFilter)}>Дома</button></Link>}
          {regionFilter && <Link to={"/" + statusFilter} className="common-nav__link"><button onClick={() => regionFilterFunc(regionFilter)}>{regionFilter}</button></Link>}
          {cityFilter && <span className="common-nav__link">{cityFilter}</span>}
          {districtFilter && <span className="common-nav__link">{districtFilter}</span>}

          {/* <span className="common-nav__page-name">{pageName}</span> */}
        </div>
      </div>
    </div>
  )
};
const mapDispatchToProps = dispatch => ({
  typeFilterFunc: selectedOption => dispatch(typeFilterCreator(selectedOption)),
  regionFilterFunc: selectedOption => dispatch(propRegionFilterCreator(selectedOption))
});

const Enhanced = connect(null, mapDispatchToProps)(Navigation);

export { Enhanced as Navigation };
