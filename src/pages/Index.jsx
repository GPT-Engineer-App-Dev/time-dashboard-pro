import React, { useState } from "react";
import UserStats from "../components/UserStats.jsx";
import TeamStats from "../components/TeamStats.jsx";

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

      <UserStats stats={userStats} />

      <TeamStats teamMembers={teamStats} />
    </div>
  );
};

export default Index;
