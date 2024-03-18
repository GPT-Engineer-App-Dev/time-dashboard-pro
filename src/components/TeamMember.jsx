import React from "react";
import { FaCalendar, FaClock, FaCode, FaFileAlt, FaUsers } from "react-icons/fa";

const TeamMember = ({ member }) => (
  <div key={member.id} className="flex items-center">
    <img src={member.avatar} alt={member.name} className="w-12 h-12 rounded-full mr-4" />
    <div>
      <h3 className="text-xl font-bold dark:text-gray-300">{member.name}</h3>
      <div className="mt-2">
        <div className="flex items-center">
          <FaCalendar className="text-gray-500 mr-2 dark:text-gray-400" />
          <span className="dark:text-gray-300">{member.stats.daysWorked} days worked</span>
        </div>
        <div className="flex items-center mt-1">
          <FaClock className="text-gray-500 mr-2 dark:text-gray-400" />
          <span className="dark:text-gray-300">{member.stats.hoursWorked} hours worked</span>
        </div>
        <div className="pl-6">
          <div className="flex items-center mt-1">
            <FaCode className="text-gray-500 mr-2 dark:text-gray-400" />
            <span>{member.stats.code} hours coding</span>
          </div>
          <div className="flex items-center mt-1">
            <FaUsers className="text-gray-500 mr-2 dark:text-gray-400" />
            <span>{member.stats.meetings} hours in meetings</span>
          </div>
          <div className="flex items-center mt-1">
            <FaFileAlt className="text-gray-500 mr-2 dark:text-gray-400" />
            <span>{member.stats.admin} hours on admin</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TeamMember;
