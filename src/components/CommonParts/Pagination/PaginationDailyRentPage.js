import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import clsx from "clsx";
import "./Pagination.scss";
import { paginateDailyRentCreator } from "../../../redux/actionCreators";

const PaginationDailyRent = ({ totalItems, itemsPerPage, paginateDailyRent, currentPageDailyRent }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i += 1) {
    pageNumbers.push(i);
  }
  console.log(totalItems, itemsPerPage, paginateDailyRent, currentPageDailyRent)

  return (

    <div className="common-pagination">
      <div className="common-pagination__wrapper">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginateDailyRent(number)}
            type="button"
            className={clsx(
              "common-pagination__button",
              currentPageDailyRent === number && "common-pagination__button--active"
            )}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );


};

const mapStateToProps = (state) => ({
  itemsPerPage: state.mainReducer.itemsPerPage,
  // totalItemsCount: state.mainReducer.totalItemsCount,
  currentPageDailyRent: state.mainReducer.currentPageDailyRent,
});

const mapDispatchToProps = (dispatch) => ({
  paginateDailyRent: (number) => dispatch(paginateDailyRentCreator(number)),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(PaginationDailyRent);

export { Enhanced as PaginationDailyRent };

PaginationDailyRent.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPageDailyRent: PropTypes.number.isRequired,
  paginateDailyRent: PropTypes.func.isRequired,
};
