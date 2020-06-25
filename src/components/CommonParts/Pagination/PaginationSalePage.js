import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import clsx from "clsx";
import "./Pagination.scss";
import { paginateSaleCreator } from "../../../redux/actionCreators";

const PaginationSale = ({ totalItems, itemsPerPage, paginateSale, currentPageSale }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i += 1) {
    pageNumbers.push(i);
  }


  return (

    <div className="common-pagination">
      <div className="common-pagination__wrapper">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginateSale(number)}
            type="button"
            className={clsx(
              "common-pagination__button",
              currentPageSale === number && "common-pagination__button--active"
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
  itemsPerPage: state.paginationReducer.itemsPerPage,
  // totalItemsCount: state.mainReducer.totalItemsCount,
  currentPageSale: state.paginationReducer.currentPageSale,
});

const mapDispatchToProps = (dispatch) => ({
  paginateSale: (number) => dispatch(paginateSaleCreator(number)),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(PaginationSale);

export { Enhanced as PaginationSale };

PaginationSale.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPageSale: PropTypes.number.isRequired,
  paginateSale: PropTypes.func.isRequired,
};
