import React from "react";
import { FaCalendar, FaClock, FaCode, FaFileAlt, FaUsers } from "react-icons/fa";
import Suggestion from "./Suggestion.jsx";

const UserStats = ({ stats }) => {
  const { daysWorked, hoursWorked, code, meetings, admin } = stats;
  const tasks = { code, meetings, admin };
  const mostTimeConsumingTask = Object.keys(tasks).reduce((a, b) => (tasks[a] > tasks[b] ? a : b));

  return (
    <div className="bg-white border-2 border-blue-300 shadow-lg rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-600 p-2">Your Stats</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center">
            <FaCalendar className="text-blue-500 mr-2" />
            <span className="text-gray-700 dark:text-gray-300">{daysWorked} days worked</span>
          </div>
          <div className="flex items-center mt-2">
            <FaClock className="text-blue-500 mr-2" />
            <span className="text-gray-700 dark:text-gray-300">{hoursWorked} hours worked:</span>
          </div>
          <div className="pl-6">
            <div className="flex items-center mt-1">
              <FaCode className="text-blue-500 mr-2" />
              <span className="text-gray-700 dark:text-gray-300">{code} hours coding</span>
            </div>
            <div className="flex items-center mt-1">
              <FaUsers className="text-blue-500 mr-2" />
              <span className="text-gray-700 dark:text-gray-300">{meetings} hours in meetings</span>
            </div>
            <div className="flex items-center mt-1">
              <FaFileAlt className="text-blue-500 mr-2" />
              <span className="text-gray-700 dark:text-gray-300">{admin} hours on admin</span>
            </div>
          </div>
        </div>
        <Suggestion task={mostTimeConsumingTask} hours={tasks[mostTimeConsumingTask]} />
      </div>
    </div>
  );
};

export default UserStats;
