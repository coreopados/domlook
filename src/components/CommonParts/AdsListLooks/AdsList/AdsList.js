import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./AdsList.scss";
import { HorizontalCard } from "../../Cards/HorizontalCard/HorizontalCard";


export const AdsList = ({ ads, match }) => {

  return (
    <div className="rows-list">
      {ads.map((ad) => (
        <Link to={`${match.path}/${ad.id}`} key={ad.id} >
          <HorizontalCard ad={ad} />
        </Link>
      ))}
    </div>
  );
}

AdsList.propTypes = {
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
