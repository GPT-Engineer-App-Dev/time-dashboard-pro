import React, { useState, Fragment } from "react";
import UserStats from "../components/UserStats.jsx";
import TeamStats from "../components/TeamStats.jsx";

const teamMembers = [
  { id: 1, name: "John Doe", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZW1wbG95ZWUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTA3NjA5NjF8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, name: "Jane Smith", avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMDc2MDk2MXww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, name: "Mike Johnson", avatar: "https://images.unsplash.com/photo-1541577141970-eebc83ebe30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxtYWxlJTIwZW1wbG95ZWUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTA3NjA5NjF8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 4, name: "Sarah Lee", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxmZW1hbGUlMjBlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMDc2MDk2MXww&ixlib=rb-4.0.3&q=80&w=1080" },
];

const getDaysInCurrentMonth = () => {
  const date = new Date();
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

const getDaysSinceStartOfWeek = () => {
  const date = new Date();
  return date.getDay() === 0 ? 7 : date.getDay();
};

const getDaysInCurrentYear = () => {
  const date = new Date();
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

const generateRandomStats = (timeInterval) => {
  const hoursPerDay = 7;
  let daysWorked;
  switch (timeInterval) {
    case "today":
      daysWorked = 1;
      break;
    case "last7Days":
      daysWorked = 7;
      break;
    case "thisWeek":
      daysWorked = getDaysSinceStartOfWeek();
      break;
    case "thisMonth":
      daysWorked = getDaysInCurrentMonth();
      break;
    case "last365Days":
      daysWorked = getDaysInCurrentYear();
      break;
    default:
      daysWorked = 30;
  }
  const code = Math.floor(Math.random() * (hoursPerDay * daysWorked - hoursPerDay) + hoursPerDay);
  const meetings = Math.floor(Math.random() * (code * 0.25));
  const admin = Math.floor(Math.random() * (code * 0.1));
  const hoursWorked = code + meetings + admin;
  daysWorked = Math.ceil(hoursWorked / hoursPerDay);

  return {
    daysWorked: daysWorked,
    hoursWorked,
    meetings,
    admin,
    code,
  };
};

const Index = () => {
  const [timeInterval, setTimeInterval] = useState("last30Days");
  const [userStats, setUserStats] = useState(generateRandomStats(timeInterval));
  const [teamStats, setTeamStats] = useState(teamMembers.map((member) => ({ ...member, stats: generateRandomStats(timeInterval) })));

  const handleTimeChange = (event) => {
    const newTimeInterval = event.target.value;
    setTimeInterval(newTimeInterval);
    setUserStats(generateRandomStats(newTimeInterval));
    setTeamStats(teamMembers.map((member) => ({ ...member, stats: generateRandomStats(newTimeInterval) })));
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 flex justify-between items-center">
        Dashboard
        <select className="bg-gray-200 text-gray-500 py-2 px-4" value={timeInterval} onChange={handleTimeChange}>
          <option value="today">Today</option>
          <option value="last7Days">Last 7 Days</option>
          <option value="thisWeek">This Week</option>
          <option value="thisMonth">This Month</option>
          <option value="last365Days">Last 365 Days</option>
        </select>
      </h1>

      <UserStats stats={userStats} />

      <TeamStats teamMembers={teamStats} />
    </div>
  );
};

export default Index;
