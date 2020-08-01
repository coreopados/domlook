import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import clsx from "clsx";
import "./Pagination.scss";
import { paginateCreator } from "../../../redux/actionCreators";

const Pagination = ({ totalItems, itemsPerPage, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i += 1) {
    pageNumbers.push(i);
  }
  // console.log(window.location.href.slice(window.location.href.length - 5))

  return (

    <div className={`
    common-pagination 
    ${window.location.href
      .slice(window.location.href.length - 5) === '/news'
      && 'common-pagination--news'}`}
    >
      <div className="common-pagination__wrapper">
        <button
          type="button"
          onClick={() => {
            window.scrollTo(0, 0);
            paginate(currentPage - 1);
          }}
          className={clsx(
            "common-pagination__button",
            currentPage === 1 && "common-pagination__button--hidden"
          )}
        >
          ‹
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => {
              window.scrollTo(0, 0);
              paginate(number);
            }}
            type="button"
            className={clsx(
              "common-pagination__button",
              currentPage === number && "common-pagination__button--active"
            )}
          >
            {number}
          </button>
        ))}
        <button
          type="button"
          onClick={() => {
            window.scrollTo(0, 0);
            paginate(currentPage + 1);
          }}
          className={clsx(
            "common-pagination__button",
            currentPage === Math.ceil(totalItems / itemsPerPage) && "common-pagination__button--hidden"
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
  currentPage: state.paginationReducer.currentPage,
});

const mapDispatchToProps = dispatch => ({
  paginate: number => dispatch(paginateCreator(number)),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(Pagination);

export { Enhanced as Pagination };

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};
