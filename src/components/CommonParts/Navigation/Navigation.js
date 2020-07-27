import React from 'react';
import { connect } from 'react-redux';
import {
  Link,
} from 'react-router-dom';
import './Navigation.scss';
import { propStatusFilterCreator, typeFilterCreator, propRegionFilterCreator, propCityFilterCreator, propDistrictFilterCreator, resetFilters } from '../../../redux/actionHomeFilterCreators';
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

  regionFilterFunc,
  cityFilterFunc,
  districtFilterFunc,
  regionFilter,
  cityFilter,
  districtFilter
}) => {
  console.log(statusFilter, typeFilter)

  return (

    <div className="common-nav">
      <div className="container">
        <div className="common-nav__wrapper">
          <Link to="/" className="common-nav__link">
            <button onClick={() => (resetFiltersFunc())}>
              Domlook
            </button>
          </Link>
          {/* status */}
          {pageName === "Продажа" && !statusFilter && <Link to="/sale" className="common-nav__link">Продажа</Link>}
          {pageName === "Аренда" && !statusFilter && <Link to="/rent" className="common-nav__link">Аренда</Link>}
          {pageName === "Посуточно" && !statusFilter && <Link to="/dailyrent" className="common-nav__link">Посуточно</Link>}
          {pageName === "Избранное" && <Link to="/favourites" className="common-nav__link">Избранное</Link>}


          {pageName === "Объявления" && !statusFilter && regionFilter &&
            <span className="common-nav__link">
              {regionFilter}
            </span>
          }

          {/* news */}
          {pageName === "Новости" &&
            <Link Link to="/news" className="common-nav__link">
              <button onClick={() => (resetFiltersFunc(), categoryFilterFunc(''))}>
                Новости
            </button>
            </Link>
          }



          {category &&
            <Link to="/news" className="common-nav__link">
              <button onClick={() => (resetFiltersFunc(), categoryFilterFunc(category))}>
                {category}
              </button>
            </Link>}

          {category && titleNew && <span className="common-nav__link">{titleNew}</span>}

          {/* sale */}
          {statusFilter === "sale" && pageName !== "Объявления" &&
            <Link to={"/" + statusFilter} className="common-nav__link">
              <button
                onClick={() => (resetFiltersFunc(), statusFilterFunc(statusFilter), typeFilterFunc(''), regionFilterFunc(''))}>
                Продажа
                  </button>
            </Link>}


          {/* rent */}
          {statusFilter === "rent" && pageName !== "Объявления" &&
            <Link to={"/" + statusFilter} className="common-nav__link">
              <button
                onClick={() => (resetFiltersFunc(), statusFilterFunc(statusFilter), typeFilterFunc(''), regionFilterFunc(''))}>
                Аренда
                  </button>
            </Link>}



          {/* dailyrent */}
          {statusFilter === "dailyRent" && pageName !== "Объявления" &&
            <Link to={"/" + statusFilter} className="common-nav__link">
              <button
                onClick={() => (resetFiltersFunc(), statusFilterFunc(statusFilter), typeFilterFunc(''), regionFilterFunc(''))}
              >
                Посуточно
                  </button>
            </Link>}

          {typeFilter === "apartment" && pageName !== "Объявления" &&
            <Link to={"/" + statusFilter} className="common-nav__link">
              <button
                onClick={() => (resetFiltersFunc(), statusFilterFunc(statusFilter), typeFilterFunc(typeFilter), regionFilterFunc(''))}
              >
                Квартиры
                  </button>
            </Link>}

          {typeFilter === "house" && pageName !== "Объявления" &&
            <Link to={"/" + statusFilter} className="common-nav__link">
              <button
                onClick={() => (resetFiltersFunc(), statusFilterFunc(statusFilter), typeFilterFunc(typeFilter), regionFilterFunc(''))}
              >
                Дома
                </button>
            </Link>}

          {typeFilter === "commerce" && pageName !== "Объявления" &&
            <Link to={"/" + statusFilter} className="common-nav__link">
              <button
                onClick={() => (resetFiltersFunc(), statusFilterFunc(statusFilter), typeFilterFunc(typeFilter), regionFilterFunc(''))}
              >
                Коммерческая недвижимость
                  </button>
            </Link>}

          {regionFilter && pageName !== "Объявления" &&
            <Link to={"/" + statusFilter} className="common-nav__link">
              <button
                onClick={() => (resetFiltersFunc(), typeFilterFunc(typeFilter), statusFilterFunc(statusFilter), regionFilterFunc(regionFilter), cityFilterFunc(''), districtFilterFunc(''))}
              >
                {regionFilter}
              </button>
            </Link>}

          {cityFilter && pageName !== "Объявления" &&
            <Link to={"/" + statusFilter} className="common-nav__link">
              <button className="common-nav__link" onClick={() => (typeFilterFunc(typeFilter), statusFilterFunc(statusFilter), regionFilterFunc(regionFilter), cityFilterFunc(cityFilter), districtFilterFunc(''))}>{cityFilter}</button>
            </Link>}

          {districtFilter && pageName !== "Объявления" &&
            // <span className="common-nav__link">{districtFilter}</span>
            <Link to={"/" + statusFilter} className="common-nav__link">
              <button className="common-nav__link" onClick={() => (typeFilterFunc(typeFilter), statusFilterFunc(statusFilter), regionFilterFunc(regionFilter), cityFilterFunc(cityFilter), districtFilterFunc(districtFilter))}>{districtFilter}</button>
            </Link>}



        </div >
      </div >
    </div >
  )
};

const mapDispatchToProps = dispatch => ({
  typeFilterFunc: selectedOption => dispatch(typeFilterCreator(selectedOption)),
  statusFilterFunc: selectedOption => dispatch(propStatusFilterCreator(selectedOption)),
  regionFilterFunc: selectedOption => dispatch(propRegionFilterCreator(selectedOption)),
  cityFilterFunc: selectedOption => dispatch(propCityFilterCreator(selectedOption)),
  districtFilterFunc: selectedOption => dispatch(propDistrictFilterCreator(selectedOption)),
  categoryFilterFunc: selectedOption => dispatch(filterCategoryNewsCreator(selectedOption)),

  resetFiltersFunc: () => dispatch(resetFilters())
});

const Enhanced = connect(null, mapDispatchToProps)(Navigation);

export { Enhanced as Navigation };
