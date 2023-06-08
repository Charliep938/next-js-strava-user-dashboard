import React from 'react';
import dashboardStyles from '../../../styles/Dashboard.module.css';
import BarChart from '../Charts/BarChart';
import LineChart from '../Charts/LineChart';
import DonutChart from '../Charts/DoughnutChart';

const ChartRow2 = ({ selectedActivity, activities, isDarkMode }) => {
  return (
    <div className={dashboardStyles.boxContainer}>
        <BarChart selectedActivity={selectedActivity} activities={activities} isDarkMode={isDarkMode} />
        <LineChart selectedActivity={selectedActivity} activities={activities} isDarkMode={isDarkMode} />
      </div>
  )
}

export default ChartRow2;
