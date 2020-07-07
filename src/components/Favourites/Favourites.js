import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  FiltersForm,
} from '../ReduxForms/FiltersForm/FiltersForm';
import {
  Navigation,
} from '../CommonParts/Navigation/Navigation';
import { AdsGridFavourite } from '../CommonParts/AdsListLooks/AdsGrid/AdsGridFavourite';
import { setFavouritesCreator } from '../../redux/actionCreators';


const Favourites = ({
  favourites,
  match,
  setFavourites,
}) => {


  useEffect(() => {
    const cachedFavourites = localStorage.getItem('favourites');

    if (cachedFavourites) {
      setFavourites(JSON.parse(cachedFavourites));
    }
  }, []);

  return (
    <main className="common-main">
      <Navigation pageName="Избранное" />
      <section className="common-section">
        <div className="container">
          <div className="common-section__wrapper">
            <FiltersForm />
            <div className="common-section__block">
              <AdsGridFavourite adsFavourites={favourites} match={match} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
};

const mapStateToProps = state => ({
  favourites: state.mainReducer.favourites,
});

const mapDispatchToProps = (dispatch) => ({
  setFavourites: ads => dispatch(setFavouritesCreator(ads)),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(Favourites);

export { Enhanced as Favourites };

Favourites.propTypes = {
  adsFavourites: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape().isRequired,
};
