import React from "react";
import { FaCalendar, FaClock, FaCode, FaFileAlt, FaUsers } from "react-icons/fa";
import Suggestion from "./Suggestion.jsx";

const UserStats = ({ stats }) => {
  const { daysWorked, hoursWorked, code, meetings, admin } = stats;
  const tasks = { code, meetings, admin };
  const mostTimeConsumingTask = Object.keys(tasks).reduce((a, b) => (tasks[a] > tasks[b] ? a : b));

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">Your Stats</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center">
            <FaCalendar className="text-blue-500 mr-2" />
            <span>{daysWorked} days worked</span>
          </div>
          <div className="flex items-center mt-2">
            <FaClock className="text-blue-500 mr-2" />
            <span>{hoursWorked} hours worked:</span>
          </div>
          <div className="pl-6">
            <div className="flex items-center mt-1">
              <FaCode className="text-blue-500 mr-2" />
              <span>{code} hours coding</span>
            </div>
            <div className="flex items-center mt-1">
              <FaUsers className="text-blue-500 mr-2" />
              <span>{meetings} hours in meetings</span>
            </div>
            <div className="flex items-center mt-1">
              <FaFileAlt className="text-blue-500 mr-2" />
              <span>{admin} hours on admin</span>
            </div>
          </div>
        </div>
        <Suggestion task={mostTimeConsumingTask} hours={tasks[mostTimeConsumingTask]} />
      </div>
    </div>
  );
};

export default UserStats;
