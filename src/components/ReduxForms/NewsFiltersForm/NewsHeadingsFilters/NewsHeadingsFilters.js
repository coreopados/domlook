import React, { useState } from 'react';
import { connect } from "react-redux";
import './NewsHeadingsFilters.scss';
import clsx from 'clsx';
import PropTypes from "prop-types";
// import { Link } from 'react-router-dom';
import { categories } from "../../../../api/testCategoriesNews.json"
import {
  filterCategoryNewsCreator,
  paginateNewsCreator,

}
  from "../../../../redux/actionCreators";


const NewsHeadingsFilters = ({
  filterCategoryNewsFunc
}) => {

  const [selectedOption, setselectedOption] = useState("")

  filterCategoryNewsFunc(selectedOption);

  return (
    <div className="heading-filters">
      <h3>Рубрики</h3>
      <ul >
        {categories.map((item, index) => {
          return <li className={clsx((selectedOption === item.name) && 'active')} onClick={e => { setselectedOption(item.name) }}
            key={index}
          >
            {item.name}
          </li>

        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  currentPageNews: state.paginationReducer.currentPageNews,
  // activeCategoryNews: state.filterReducer.activeCategoryNews,
});

const mapDispatchToProps = (dispatch) => ({
  filterCategoryNewsFunc: (selectedOption) => dispatch(filterCategoryNewsCreator(selectedOption)),
  paginateNews: () => dispatch(paginateNewsCreator()),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(NewsHeadingsFilters);

export { Enhanced as NewsHeadingsFilters };

NewsHeadingsFilters.propTypes = {
  filterCategoryNewsFunc: PropTypes.func.isRequired,
}