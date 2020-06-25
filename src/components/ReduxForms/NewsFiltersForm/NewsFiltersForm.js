import React from 'react';
import './NewsFiltersForm.scss';
import { NewsHeadingsFilters } from './NewsHeadingsFilters/NewsHeadingsFilters';
import { NewsArchivesFilters } from './NewsArchivesFilters/NewsArchivesFilters';

export const NewsFiltersForm = () => (
  <aside className="news-filters">
    <NewsHeadingsFilters />
    <NewsArchivesFilters />
  </aside>
);
