import React from 'react';
import './HomeFiltersForm.scss';

const HomeFiltersForm = ({ adsLength }) => (
  <section className="home-filters">
    <div className="container">
      <h1 className="home-filters__title">
        Поиск недвижимости из {adsLength} объявлений
      </h1>
      <form className="home-filters-form">
        Redux form goes here
      </form>
    </div>
  </section>
);

export default React.memo(HomeFiltersForm);
