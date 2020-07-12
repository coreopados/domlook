import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import clsx from "clsx";
import "./Pagination.scss";
import { paginateCommonCreator } from "../../../redux/actionCreators";

const PaginationCommon = ({ totalItems, itemsPerPage, paginateCommon, currentPageCommon }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (

    <div className="common-pagination">
      <div className="common-pagination__wrapper">
        <button
          type="button"
          onClick={() => {
            window.scrollTo(0, 0);
            paginateCommon(currentPageCommon - 1);
          }}
          className={clsx(
            "common-pagination__button",
            currentPageCommon === 1 && "common-pagination__button--hidden"
          )}
        >
          ‹
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => {
              window.scrollTo(0, 0);
              paginateCommon(number);
            }}
            type="button"
            className={clsx(
              "common-pagination__button",
              currentPageCommon === number && "common-pagination__button--active"
            )}
          >
            {number}
          </button>
        ))}
        <button
          type="button"
          onClick={() => {
            window.scrollTo(0, 0);
            paginateCommon(currentPageCommon + 1);
          }}
          className={clsx(
            "common-pagination__button",
            currentPageCommon === Math.ceil(totalItems / itemsPerPage) && "common-pagination__button--hidden"
          )}
        >
          ›
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  itemsPerPage: state.paginationReducer.itemsPerPage,
  // totalItemsCount: state.mainReducer.totalItemsCount,
  currentPageCommon: state.paginationReducer.currentPageCommon,
});

const mapDispatchToProps = dispatch => ({
  paginateCommon: number => dispatch(paginateCommonCreator(number)),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(PaginationCommon);

export { Enhanced as PaginationCommon };

PaginationCommon.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPageCommon: PropTypes.number.isRequired,
  paginateCommon: PropTypes.func.isRequired,
};
