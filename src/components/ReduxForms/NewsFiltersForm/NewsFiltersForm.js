import React from 'react';
import './NewsFiltersForm.scss';
import { NewsHeadingsFilters } from './NewsHeadingsFilters/NewsHeadingsFilters';
import { NewsArchivesFilters } from './NewsArchivesFilters/NewsArchivesFilters';

export const NewsFiltersForm = ({ activeCategory, news }) => (
  <aside className="news-filters">
    <NewsHeadingsFilters activeCategory={activeCategory} />
    <NewsArchivesFilters news={news}/>
  </aside>
);
