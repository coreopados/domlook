import React from 'react';
import {
  Link,
} from 'react-router-dom';
import './Navigation.scss';

export const Navigation = ({ pageName, typeFilter, resetFilters }) => {
  // console.log(typeFilter)
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
          {typeFilter && <Link>`{typeFilter}`</Link>}
          {/* <span className="common-nav__page-name">{pageName}</span> */}
        </div>
      </div>
    </div>
  )
};
