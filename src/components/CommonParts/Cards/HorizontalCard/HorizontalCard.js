import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./HorizontalCard.scss";
import { addFavouriteCreator } from "../../../../redux/actionCreators";

const HorizontalCard = ({ ad, addFavourites, favourites }) => {


  useEffect(() => {
    if (favourites && favourites.length !== 0) {
      localStorage.setItem('favourites', JSON.stringify(favourites));
    }
  }, [favourites]);

  const handleAddFavourites = (e) => {
    e.preventDefault();
    const hasFavourites = favourites.findIndex((item) => item.id === ad.id);

    if (hasFavourites === -1) {
      addFavourites([...favourites, ad]);
    }
  };

  return (
    <article className="horizontal-card">
      <span className="horizontal-card__price">{`$ ${ad.price}`}</span>
      <div className="horizontal-card__photo-wrapper">
        <img src={ad.imgUrl} className="horizontal-card__photo" alt="фото" />
      </div>
      <div className="horizontal-card__block">
        <div className="horizontal-card__inner">
          <h5 className="horizontal-card__title">{ad.title}</h5>
          <p className="horizontal-card__location">{ad.address}</p>
          <div className="horizontal-card__middle-part">
            <p className="horizontal-card__description">
              {ad.description.slice(0, 140)}
            </p>
            <div className="horizontal-card__details">
              <span className="horizontal-card__post-date">{ad.post_date}</span>
              <span className="horizontal-card__id">ID:{ad.id}</span>
            </div>
          </div>
        </div>
        <div className="horizontal-card__bottom-part">
          <div className="horizontal-card__specification">
            <span className="horizontal-card__area">
              {`${ad.total_area}/${ad.living_space}`}м<sup>2</sup>
            </span>
            <span className="horizontal-card__floor">{`${ad.floor}/${ad.total_floors}`}</span>
            <span className="horizontal-card__rooms">{ad.rooms}</span>
          </div>
          {!favourites.includes(ad) ? (
            <button
              type="button"
              className="horizontal-card__to-favourites"
              onClick={(e) => handleAddFavourites(e)}
            >
              Добавить в избранное
            </button>
          ) : <p>Добавлено</p>}
        </div>
      </div>
    </article>
  );
};

const mapStateToProps = (state) => ({
  favourites: state.mainReducer.favourites,
});

const mapDispatchToProps = (dispatch) => ({
  addFavourites: (ad) => dispatch(addFavouriteCreator(ad)),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(HorizontalCard);

export { Enhanced as HorizontalCard };

HorizontalCard.propTypes = {
  ad: PropTypes.shape({
    id: PropTypes.number.isRequired,
    prop_status: PropTypes.string.isRequired,
    prop_type: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    total_area: PropTypes.string.isRequired,
    living_space: PropTypes.string.isRequired,
    floor: PropTypes.string.isRequired,
    total_floors: PropTypes.string.isRequired,
    rooms: PropTypes.string.isRequired,
  }).isRequired,
  favourites: PropTypes.arrayOf(PropTypes.object).isRequired,
  addFavourites: PropTypes.func.isRequired,
};
