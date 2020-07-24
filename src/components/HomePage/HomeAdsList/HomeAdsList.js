import React from "react";
import PropTypes from "prop-types";
import "./HomeAdsList.scss";
import { Link } from "react-router-dom";
import { VerticalCard } from "../../CommonParts/Cards/VerticalCard/VerticalCard";

export const HomeAdsList = ({ ads, children, match, housesAdsSale, housesAdsRent, aptsAdsSale, aptsAdsRent }) => {


  ads = ads.slice(-8)


  return (
    <div className="container">
      <div className="home-ads-list">
        {children}

        <div className="home-ads-list__wrapper">
          {ads.map((ad) => (
            <Link to={`${match.path}${ad.id}`} key={ad.id}>
              <VerticalCard key={ad.id} ad={ad} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
};

HomeAdsList.propTypes = {
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
    }).isRequired
  ).isRequired,
  children: PropTypes.node.isRequired,
  match: PropTypes.shape().isRequired,
};
