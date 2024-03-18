import React from "react";
import { FaCalendar, FaClock, FaCode, FaFileAlt, FaUsers } from "react-icons/fa";

const UserStats = ({ stats }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-8">
    <h2 className="text-2xl font-bold mb-4">Your Stats</h2>
    <div className="grid grid-cols-3 gap-4">
      <div className="flex items-center">
        <FaCalendar className="text-blue-500 mr-2" />
        <span>{stats.daysWorked} days worked</span>
      </div>
      <div className="flex items-center">
        <FaClock className="text-blue-500 mr-2" />
        <span>{stats.hoursWorked} hours worked</span>
      </div>
      <div className="flex items-center">
        <FaCode className="text-blue-500 mr-2" />
        <span>{stats.code} hours coding</span>
      </div>
      <div className="flex items-center">
        <FaUsers className="text-blue-500 mr-2" />
        <span>{stats.meetings} hours in meetings</span>
      </div>
      <div className="flex items-center">
        <FaFileAlt className="text-blue-500 mr-2" />
        <span>{stats.admin} hours on admin</span>
      </div>
    </div>
  </div>
);

export default UserStats;
