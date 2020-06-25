import React from 'react';
import PropTypes from 'prop-types';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
} from 'react-google-maps';

const DetailsMap = ({ coordinates }) => (

  <GoogleMap
    defaultZoom={Number(coordinates.zoom)}
    defaultCenter={{
      lat: Number(coordinates.latitude),
      lng: Number(coordinates.longitude),
    }}
  />
);

const WrappedMap = withScriptjs(withGoogleMap(DetailsMap));

export { WrappedMap as DetailsMap };

DetailsMap.propTypes = {
  coordinates: PropTypes.shape({
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired,
    zoom: PropTypes.string.isRequired,
  }).isRequired,
};