import React from "react";
import { connect } from "react-redux";
import './NewsHeadingsFilters.scss';
import clsx from 'clsx';
import PropTypes from "prop-types";
import {
  filterCategoryByNews,
  filterCategoryByAnalitic,
  filterCategoryByTips,
  filterCategoryByNewBuild,
  filterCategoryByMarket,
  filterCategoryByTipsArrangement,
  filterCategoryByFinance,
  paginateNewsCreator,
}
  from "../../../../redux/actionCreators";


const NewsHeadingsFilters = ({
  filterCategoryNews,
  filterByNews,
  filterByAnalitic,
  filterByTips,
  filterByNewBuild,
  filterByMarket,
  filterByTipsArrangement,
  filterByFinance,
}) => {


  return (
    <div className="heading-filters">
      <h3>Рубрики</h3>
      <ul>
        <li>
          <button
            type="button"
            onClick={filterByAnalitic}
            className={clsx((filterCategoryNews === 'Аналитика') && 'active')}
          >
            Аналитика
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={filterByNews}
            className={clsx((filterCategoryNews === 'Новости') && 'active')}
          >
            Новости
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={filterByTips}
            className={clsx((filterCategoryNews === 'Новости и советы ЖКХ') && 'active')}
          >
            Новости и советы ЖКХ
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={filterByNewBuild}
            className={clsx((filterCategoryNews === 'Новости новостроек') && 'active')}
          >
            Новости новостроек
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={filterByMarket}
            className={clsx((filterCategoryNews === 'Новости рынка') && 'active')}
          >
            Новости рынка
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={filterByTipsArrangement}
            className={clsx((filterCategoryNews === 'Советы по обустройству') && 'active')}
          >
            Советы по обустройству
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={filterByFinance}
            className={clsx((filterCategoryNews === 'Финансы') && 'active')}
          >
            Финансы
          </button>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  filterCategoryNews: state.filterCategoryReducer.filterCategoryNews,
  currentPageNews: state.paginationReducer.currentPageNews,
});

const mapDispatchToProps = dispatch => ({
  filterByNews: () => dispatch(filterCategoryByNews()),
  filterByAnalitic: () => dispatch(filterCategoryByAnalitic()),
  filterByTips: () => dispatch(filterCategoryByTips()),
  filterByNewBuild: () => dispatch(filterCategoryByNewBuild()),
  filterByMarket: () => dispatch(filterCategoryByMarket()),
  filterByTipsArrangement: () => dispatch(filterCategoryByTipsArrangement()),
  filterByFinance: () => dispatch(filterCategoryByFinance()),
  paginateNews: () => dispatch(paginateNewsCreator()),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(NewsHeadingsFilters);

export { Enhanced as NewsHeadingsFilters };

NewsHeadingsFilters.propTypes = {
  filterByNews: PropTypes.func.isRequired,
  filterByAnalitic: PropTypes.func.isRequired,
  filterByTips: PropTypes.func.isRequired,
  filterByNewBuild: PropTypes.func.isRequired,
  filterByTipsArrangement: PropTypes.func.isRequired,
  filterByMarket: PropTypes.func.isRequired,
  filterByFinance: PropTypes.func.isRequired,
}