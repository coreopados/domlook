import React from 'react';
import { connect } from "react-redux";
import './NewsHeadingsFilters.scss';
import clsx from 'clsx';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { categories } from "../../../../api/testCategoriesNews.json"
import {
  filterCategoryNewsCreator,
  paginateNewsCreator,
}
  from "../../../../redux/actionCreators";


const NewsHeadingsFilters = ({
  filterCategoryNewsFunc,
  paginateNews,
  activeCategory
}) => {

  const number = 1

  return (
    <div className="heading-filters">
      <h3>Рубрики</h3>
      <ul >
        {categories.map((item, index) => {

          return <Link to="/news">
            <li className={clsx((activeCategory === item.name) && 'active')} onClick={e => (filterCategoryNewsFunc(item.name), paginateNews(number))}
              key={index}
            >
              {item.name}
            </li>
          </Link>
        })}
      </ul>
    </div >
  );
};

const mapStateToProps = state => ({
  currentPageNews: state.paginationReducer.currentPageNews,
  // activeCategoryNews: state.filterReducer.activeCategoryNews,
});

const mapDispatchToProps = (dispatch) => ({
  filterCategoryNewsFunc: (selectedOption) => dispatch(filterCategoryNewsCreator(selectedOption)),
  paginateNews: (number) => dispatch(paginateNewsCreator(number)),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(NewsHeadingsFilters);

export { Enhanced as NewsHeadingsFilters };

NewsHeadingsFilters.propTypes = {
  filterCategoryNewsFunc: PropTypes.func.isRequired,
}