import { useState } from "react";
import { FaUser, FaClock, FaCalendar, FaCode, FaFileAlt, FaUsers } from "react-icons/fa";

const teamMembers = [
  { id: 1, name: "John Doe", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZW1wbG95ZWUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTA3NjA5NjF8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, name: "Jane Smith", avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMDc2MDk2MXww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, name: "Mike Johnson", avatar: "https://images.unsplash.com/photo-1541577141970-eebc83ebe30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxtYWxlJTIwZW1wbG95ZWUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTA3NjA5NjF8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 4, name: "Sarah Lee", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxmZW1hbGUlMjBlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMDc2MDk2MXww&ixlib=rb-4.0.3&q=80&w=1080" },
];

const generateRandomStats = () => ({
  daysWorked: Math.floor(Math.random() * 20) + 1,
  hoursWorked: Math.floor(Math.random() * 100) + 10,
  meetings: Math.floor(Math.random() * 20) + 1,
  admin: Math.floor(Math.random() * 10) + 1,
  code: Math.floor(Math.random() * 80) + 10,
});

const Index = () => {
  const [userStats] = useState(generateRandomStats());
  const [teamStats] = useState(teamMembers.map((member) => ({ ...member, stats: generateRandomStats() })));

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Time Tracking Dashboard</h1>

      {/* Logged-in User's Stats */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Your Stats</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center">
            <FaCalendar className="text-blue-500 mr-2" />
            <span>{userStats.daysWorked} days worked</span>
          </div>
          <div className="flex items-center">
            <FaClock className="text-blue-500 mr-2" />
            <span>{userStats.hoursWorked} hours worked</span>
          </div>
          <div className="flex items-center">
            <FaCode className="text-blue-500 mr-2" />
            <span>{userStats.code} hours coding</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="text-blue-500 mr-2" />
            <span>{userStats.meetings} hours in meetings</span>
          </div>
          <div className="flex items-center">
            <FaFileAlt className="text-blue-500 mr-2" />
            <span>{userStats.admin} hours on admin</span>
          </div>
        </div>
      </div>

      {/* Team Stats */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Team Stats (Last 30 Days)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamStats.map((member) => (
            <div key={member.id} className="flex items-center">
              <img src={member.avatar} alt={member.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <div className="flex items-center mt-2">
                  <FaCalendar className="text-gray-500 mr-2" />
                  <span>{member.stats.daysWorked} days worked</span>
                </div>
                <div className="flex items-center mt-1">
                  <FaClock className="text-gray-500 mr-2" />
                  <span>{member.stats.hoursWorked} hours worked</span>
                </div>
                <div className="mt-2">
                  <div className="flex items-center">
                    <FaCode className="text-gray-500 mr-2" />
                    <span>{member.stats.code} hours coding</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <FaUsers className="text-gray-500 mr-2" />
                    <span>{member.stats.meetings} hours in meetings</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <FaFileAlt className="text-gray-500 mr-2" />
                    <span>{member.stats.admin} hours on admin</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
