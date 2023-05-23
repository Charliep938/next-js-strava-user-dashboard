import React from 'react';
import dashboardStyles from '../../../styles/Dashboard.module.css';
import LastActivityRow from './LastActivityRow';

const LastActivity = ({  lastActivity, selectedActivity, isDarkMode}) => {
  return (

        <div className={`${dashboardStyles.lastActivity} ${isDarkMode ? null : dashboardStyles.light}`}>
          <div className={dashboardStyles.lastActivityLeftColumn}>
            <h2>Your Last Activity</h2>
          </div>
          {selectedActivity === 'All' || (lastActivity && lastActivity.sport_type === selectedActivity) ? (
            <LastActivityRow lastActivity={lastActivity} selectedActivity={selectedActivity} isDarkMode={isDarkMode} />
          ) : (
            <p>No activity of type {selectedActivity} found.</p>
          )}
        </div>
     
  )
}

export default LastActivity