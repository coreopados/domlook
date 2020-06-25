import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import {
  FiltersForm,
} from '../ReduxForms/FiltersForm/FiltersForm';
import {
  Navigation,
} from '../CommonParts/Navigation/Navigation';
import { AdsGridFavourite } from '../CommonParts/AdsListLooks/AdsGrid/AdsGridFavourite';


const Favourites = ({
  favourites,
  isLoaded,
  isLoading,
  match,
}) => {

  // const adsFavourites = localStorage.getItem([favourites]);

  return (
    <main className="common-main">
      <Navigation pageName="Избранное" />
      <section className="common-section">
        <div className="container">
          <div className="common-section__wrapper">
            <FiltersForm />
            <div className="common-section__block">
              {isLoading
                && (
                  <div className="loader-wrapper">
                    <Loader
                      type="Puff"
                      color="#313237"
                      height={80}
                      width={80}
                    />
                  </div>
                )}
              {(isLoaded) && (
                <AdsGridFavourite adsFavourites={favourites} match={match} />
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
};

const mapStateToProps = state => ({
  favourites: state.mainReducer.favourites,
  isLoaded: state.mainReducer.isLoaded,
  isLoading: state.mainReducer.isLoading,
});

const Enhanced = connect(mapStateToProps)(Favourites);

export { Enhanced as Favourites };

Favourites.propTypes = {
  adsFavourites: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoaded: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  match: PropTypes.shape().isRequired,
};
