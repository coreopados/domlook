import React, { useEffect } from "react";
import { connect } from "react-redux";
import './NewsHeadingsFilters.scss';
import clsx from 'clsx';
import PropTypes from "prop-types";
import { filterCategoryByNews, filterCategoryByAnalitic, filterCategoryByTips, filterCategoryByNewBuild, filterCategoryByMarket, filterCategoryByTipsArrangement, filterCategoryByFinance } from "../../../../redux/actionCreators";

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
        <li><a onClick={filterByAnalitic} className={clsx((filterCategoryNews === 'Аналитика') && 'active')}> Аналитика</a></li>
        <li><a onClick={filterByNews} className={clsx((filterCategoryNews === 'Новости') && 'active')} > Новости</a></li>
        <li><a onClick={filterByTips} className={clsx((filterCategoryNews === 'Новости и советы ЖКХ') && 'active')}> Новости и советы ЖКХ</a></li >
        <li><a onClick={filterByNewBuild} className={clsx((filterCategoryNews === 'Новости новостроек') && 'active')}> Новости новостроек</a></li >
        <li><a onClick={filterByMarket} className={clsx((filterCategoryNews === 'Новости рынка') && 'active')}> Новости рынка</a></li >
        <li><a onClick={filterByTipsArrangement} className={clsx((filterCategoryNews === 'Советы по обустройству') && 'active')}> Советы по обустройству</a></li >
        <li><a onClick={filterByFinance} className={clsx((filterCategoryNews === 'Финансы') && 'active')}> Финансы</a></li >
      </ul >
    </div >
  )
}
const mapStateToProps = state => ({
  filterCategoryNews: state.filterCategoryReducer.filterCategoryNews,
});

const mapDispatchToProps = (dispatch) => ({
  filterByNews: () => dispatch(filterCategoryByNews()),
  filterByAnalitic: () => dispatch(filterCategoryByAnalitic()),
  filterByTips: () => dispatch(filterCategoryByTips()),
  filterByNewBuild: () => dispatch(filterCategoryByNewBuild()),
  filterByMarket: () => dispatch(filterCategoryByMarket()),
  filterByTipsArrangement: () => dispatch(filterCategoryByTipsArrangement()),
  filterByFinance: () => dispatch(filterCategoryByFinance()),
});


const Enhanced = connect(mapStateToProps, mapDispatchToProps)(NewsHeadingsFilters);

export { Enhanced as NewsHeadingsFilters }

NewsHeadingsFilters.propTypes = {
  filterByNews: PropTypes.func.isRequired,
  filterByAnalitic: PropTypes.func.isRequired,
  filterByTips: PropTypes.func.isRequired,
  filterByNewBuild: PropTypes.func.isRequired,
  filterByTipsArrangement: PropTypes.func.isRequired,
  filterByMarket: PropTypes.func.isRequired,
  filterByFinance: PropTypes.func.isRequired,
}