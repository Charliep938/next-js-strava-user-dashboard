import React from 'react';
import dashboardStyles from '../../styles/Dashboard.module.css';
import { Select, MenuItem } from '@mui/material';
import { convertCamelCaseToWords } from '../../helper_functions/helper';

const color = '#000000'

const ActivityFilter = ({ selectedActivity, handleActivityChange, activities, isDarkMode }) => {
  const uniqueActivities = [...new Set(activities.map((activity) => activity.sport_type))];

  const sortedActivities = uniqueActivities.sort((a, b) => a.localeCompare(b));

  const activityOptions = sortedActivities.map((activity) => (
    <MenuItem key={activity} value={activity} sx={{
      color: isDarkMode ? '#ffffff' : '#000000',
      backgroundColor: isDarkMode ? '#2d3236' : '#ffffff',
    }}>
      {convertCamelCaseToWords(activity)}
    </MenuItem>
  ));

  return (
    <div className={`${dashboardStyles.filterContainer} ${isDarkMode ? dashboardStyles.dark : dashboardStyles.light}`}>
      <Select
        id="activityFilter"
        className={`${dashboardStyles.activityFilter} ${isDarkMode ? dashboardStyles.dark : dashboardStyles.light}`}
        value={selectedActivity}
        onChange={handleActivityChange}
        sx={{
          backgroundColor: isDarkMode ? '#2d3236' : '#ffffff',
          color: isDarkMode ? '#ffffff' : '#2d3236',
          border: '0',
          "input:focus": { border: '0' },
          width: '250px',
        }}
      >
        <MenuItem value="All" sx={{
          color: isDarkMode ? '#ffffff' : '#2d3236',
          backgroundColor: isDarkMode ? '#2d3236' : '#ffffff',
        }}>All</MenuItem>
        {activityOptions}
      </Select>
    </div>
  );
};

export default ActivityFilter;