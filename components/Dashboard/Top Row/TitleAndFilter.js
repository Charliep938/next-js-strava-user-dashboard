import React from 'react';
import dashboardStyles from '../../../styles/Dashboard.module.css';
import ActivityFilter from '../ActivityFilter';

const TitleAndFilter = ({ athleteData, activities, selectedActivity, handleActivityChange, isDarkMode }) => {
    return (
        <div className={`${dashboardStyles.topRow}`}>
            <h1 className={dashboardStyles.title}>Hi {athleteData.firstname}, welcome to the dashboard!</h1>
            <ActivityFilter selectedActivity={selectedActivity} handleActivityChange={handleActivityChange} activities={activities} isDarkMode={isDarkMode} />
        </div>
    )
}

export default TitleAndFilter;
