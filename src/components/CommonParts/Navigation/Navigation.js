import React from 'react';
import {
  Link,
} from 'react-router-dom';
import './Navigation.scss';

export const Navigation = ({ pageName, resetFilters }) => (
  <div className="common-nav">
    <div className="container">
      <div className="common-nav__wrapper">
        <Link to="/" className="common-nav__link">domlook</Link>
        <span className="common-nav__page-name">{pageName}</span>
      </div>
    </div>
  </div>
);
