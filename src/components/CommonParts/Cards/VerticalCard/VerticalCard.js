import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./VerticalCard.scss";
import { 
  removeFavouriteCreator,
  setCurrencyCreator,
  priceCalculator,
 } from "../../../../redux/actionCreators";

const VerticalCard = ({
  ad,
  match,
  favourites,
  removeFavourites,
  currency,
  setCurrency,
 }) => {
  useEffect(() => {

    const cachedCurrency = localStorage.getItem('currency');

    if (cachedCurrency) {
      setCurrency(JSON.parse(cachedCurrency));
    }
  }, []);
  const handleRemoveFavourite = (e) => {
    e.preventDefault();
    const hasFavourites = favourites.findIndex((item) => item.id === ad.id);

    if (hasFavourites >= 0) {
      removeFavourites([...favourites.filter((item) => item.id !== ad.id)]);
    }

    const favArray = JSON.parse(localStorage.getItem('favourites'));
    favArray.splice(favArray.indexOf(ad.id, 1));
    localStorage.setItem('favourites', JSON.stringify(favArray));
  };


  return (
    <article className="vertical-card">
      {match && match.path === "/favourites" ? (
        <button
          type="button"
          className="vertical-card__remove"
          onClick={(e) => handleRemoveFavourite(e)}
        >
          <i className="fa fa-trash-o" />
        </button>
      ) : null}
      <span className="vertical-card__price">{priceCalculator(ad.price, currency)}</span>
      <div className="vertical-card__photo-wrapper">
        <img
          src={ad.imgUrl}
          alt="фото квартиры"
          className="vertical-card__photo"
        />
      </div>
      <div className="vertical-card__info-wrapper">
        <h5 className="vertical-card__title">{ad.title}</h5>
        <p className="vertical-card__description">
          {ad.description.slice(0, 80)}
        </p>
        <div className="vertical-card__specification">
          <span className="vertical-card__area">
            {`${ad.total_area}/${ad.living_space}`}м<sup>3</sup>
          </span>
          <span className="vertical-card__floor">{`${ad.floor}/${ad.total_floors}`}</span>
          <span className="vertical-card__rooms">{ad.rooms}</span>
        </div>
      </div>
    </article>
  );
};

const mapStateToProps = (state) => ({
  favourites: state.mainReducer.favourites,
  currency: state.mainReducer.currency,
});

const mapDispatchToProps = (dispatch) => ({
  removeFavourites: (ad) => dispatch(removeFavouriteCreator(ad)),
  setCurrency: currency => dispatch(setCurrencyCreator(currency)),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(VerticalCard);

export { Enhanced as VerticalCard };

VerticalCard.defaultProps = {
  removeFavourites: PropTypes.func,
  // match: PropTypes.shape({
  //   params: PropTypes.shape({
  //     path: PropTypes.string,
  //   }),
  // }),
  // match: PropTypes.func,
};

VerticalCard.propTypes = {
  ad: PropTypes.shape({
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
  }).isRequired,
  // match: PropTypes.shape({
  //   params: PropTypes.shape({
  //     path: PropTypes.string,
  //   }),
  // }),
  // match: PropTypes.shape({
  //   path: PropTypes.string,
  // }),
  // match: PropTypes.func,
  favourites: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeFavourites: PropTypes.func,
};
