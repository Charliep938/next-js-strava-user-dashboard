import React from 'react';
import dashboardStyles from '../../styles/Dashboard.module.css';
import { metersToKilometers, formatTime, convertCamelCaseToWords } from '../../helper_functions/helper';
import Image from 'next/image';

const DetailedStatsBox = ({ title, activities, activityType }) => {
  if (activityType === 'All' || activityType === title) {
    let count = 0;
    let distance = 0;
    let totalElapsedTime = 0;
    let longestActivity = null;
    let longestDistance = 0;
    let totalKudos = 0;
    let achivementCount = 0

    for (let activity of activities) {
      if (activity.sport_type === title) {
        count += 1;
        distance += activity.distance;
        totalElapsedTime += activity.elapsed_time;
        totalKudos += activity.kudos_count;
        achivementCount += activity.achievement_count;

        if (!longestActivity || activity.elapsed_time > longestActivity.elapsed_time) {
          longestActivity = activity;
        }

        if (activity.distance > longestDistance) {
          longestDistance = activity.distance;
        }

        
      }
    }

    return (
      <div className={dashboardStyles.detailedstatBox}>
        <div className={dashboardStyles.detailedstatRow}>
          <div className={dashboardStyles.detailedstat}>
            <div>
              <Image src='/img/clock.png' width={32} height={32} />
            </div>
            <div>
              Longest Activity
            </div>
            <div className={dashboardStyles.detailedStatTitle} >
              {formatTime(longestActivity.elapsed_time)}
            </div>
          </div>
          <div className={dashboardStyles.detailedstat}>
            <div>
              <Image src='/img/distance.png' width={32} height={32} />
            </div>
            <div>
              Longest Distance
            </div>
            <div className={dashboardStyles.detailedStatTitle}>
              {longestDistance === 0 ? 'N/A' : metersToKilometers(longestDistance) + 'KM'}
            </div>
          </div>
          <div className={dashboardStyles.detailedstat}>
            <div>
              <Image src='/img/badge.png' width={32} height={32} />
            </div>
            <div>
              Total Achievements
            </div>
            <div className={dashboardStyles.detailedStatTitle}>
              {achivementCount}
            </div>
          </div>
          <div className={dashboardStyles.detailedstat}>
            <div>
              <Image src='/img/like.png' width={32} height={32} />
            </div>
            <div>
              Total Kudos
            </div>
            <div className={dashboardStyles.detailedStatTitle}>
              {totalKudos}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default DetailedStatsBox;
