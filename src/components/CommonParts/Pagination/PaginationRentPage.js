import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import clsx from "clsx";
import "./Pagination.scss";
import { paginateSaleCreator } from "../../../redux/actionCreators";

const PaginationRent = ({ totalItems, itemsPerPage, paginateSale, currentPageRent }) => {
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
            paginateSale(currentPageRent - 1);
          }}
          className={clsx(
            "common-pagination__button",
            currentPageRent === 1 && "common-pagination__button--hidden"
          )}
        >
          ‹
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => {
              window.scrollTo(0, 0);
              paginateSale(number);
            }}
            type="button"
            className={clsx(
              "common-pagination__button",
              currentPageRent === number && "common-pagination__button--active"
            )}
          >
            {number}
          </button>
        ))}
        <button
          type="button"
          onClick={() => {
            window.scrollTo(0, 0);
            paginateSale(currentPageRent + 1);
          }}
          className={clsx(
            "common-pagination__button",
            currentPageRent === Math.ceil(totalItems / itemsPerPage) && "common-pagination__button--hidden"
          )}
        >
          ›
        </button>
      </div>
    </div>
  );


};

const mapStateToProps = (state) => ({
  itemsPerPage: state.mainReducer.itemsPerPage,
  // totalItemsCount: state.mainReducer.totalItemsCount,
  currentPageRent: state.paginationReducer.currentPageRent,
});

const mapDispatchToProps = (dispatch) => ({
  paginateSale: (number) => dispatch(paginateSaleCreator(number)),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(PaginationRent);

export { Enhanced as PaginationRent };

PaginationRent.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPageRent: PropTypes.number.isRequired,
  paginateSale: PropTypes.func.isRequired,
};
