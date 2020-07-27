// import React from 'react';
import React, { useMemo, useRef } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './TopFilters.scss';
import {
  setVerticalOrientationCreator,
  setHorizontalOrientationCreator
} from '../../../redux/actionCreators';
import { DropdownPriceSort } from "./Dropdown/DropdownPrice";
import { DropdownDateSort } from "./Dropdown/DropdownDate";


const TopFilters = ({
  setVerticalOrientation,
  setHorizontalOrientation,
  orientation,
  match,
  totalAdsSale,
  totalAdsRent,
  totalAdsDailyRent,
  totalAdsCommon,

  sortPrice,
  sortDate
}) => {
  console.log(sortPrice, sortDate)


  const pageTitle = useRef(null);

  //количество обьявлений в зависимости от страницы
  const quantityAds = useMemo(() => {
    if (match.path === '/sale') {
      pageTitle.current = "Продажа";
      return (
        totalAdsSale
      )
    } else if (match.path === '/rent') {
      pageTitle.current = "Аренда";
      return (
        totalAdsRent
      )
    } else if (match.path === '/dailyRent') {
      pageTitle.current = "Посуточно";
      return (
        totalAdsDailyRent
      )
    } else if (match.path === '/advertisement') {
      pageTitle.current = "Объявления";
      return (
        totalAdsCommon
      )
    }

  })


  return (

    <div className="common-top-filters">
      <div className="common-top-filters__block">
        <h3 className="common-top-filters__title">{pageTitle.current}</h3>
        <div className="common-top-filters__buttons-wrapper">
          <button
            onClick={setHorizontalOrientation}
            type="button"
            className={clsx('common-top-filters__button',
              'common-top-filters__button--list',
              (orientation === 'horizontal')
              && 'common-top-filters__button--active')}
          >
            Списком
        </button>
          <button
            onClick={setVerticalOrientation}
            type="button"
            className={clsx('common-top-filters__button',
              'common-top-filters__button--grid',
              (orientation === 'vertical')
              && 'common-top-filters__button--active')}
          >
            Плиткой
        </button>
        </div>
      </div>

      <div className="common-top-filters__block">
        <div className="common-top-filters__amount" >Найдено {quantityAds} объявлений</div>
        <div className="common-top-filters__sort">Сортировка

        <div className="select-wrap">
            <DropdownPriceSort sortPrice={sortPrice} />

          </div>
        </div>

        <div className="common-top-filters__post-date">Период подачи
        <div className="select-wrap">
            <DropdownDateSort sortDate={sortDate} />

          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  orientation: state.mainReducer.orientation,
  ads: state.mainReducer.ads

});

const mapDispatchToProps = dispatch => ({
  setHorizontalOrientation: () => dispatch(setHorizontalOrientationCreator()),
  setVerticalOrientation: () => dispatch(setVerticalOrientationCreator()),
});



const Enhanced = connect(mapStateToProps, mapDispatchToProps)(TopFilters);


export { Enhanced as TopFilters };

TopFilters.propTypes = {
  setVerticalOrientation: PropTypes.func.isRequired,
  setHorizontalOrientation: PropTypes.func.isRequired,
  orientation: PropTypes.string.isRequired,
  ads: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      prop_status: PropTypes.string.isRequired,
      prop_type: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      prop_city: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      total_area: PropTypes.string.isRequired,
      living_space: PropTypes.string.isRequired,
      floor: PropTypes.string.isRequired,
      total_floors: PropTypes.string.isRequired,
      rooms: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,


};
