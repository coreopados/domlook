import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './AdsGrid.scss';
import { VerticalCard } from '../../Cards/VerticalCard/VerticalCard';

export const AdsGrid = ({ ads, match, sortPrice }) => {

  // sortPrice === 'low-price' ? ads = ads.sort((prev, next) => prev.price - next.price) : ads = ads.sort((prev, next) => next.price - prev.price);

  return (
    <div className="ads-grid">
      {ads.map(ad => (
        <Link to={`${match.path}/${ad.id}`} key={ad.id}>
          <VerticalCard ad={ad} match={match} />
        </Link>
      ))}
    </div>
  );
}

AdsGrid.propTypes = {
  ads: PropTypes.arrayOf(
    PropTypes.shape({
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
  ).isRequired,
  match: PropTypes.shape().isRequired,
  // sort: PropTypes.func.isRequired,
};
