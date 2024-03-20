import React from "react";
import TeamMember from "./TeamMember.jsx";

const TeamStats = ({ teamMembers }) => (
  <div className="bg-white border-2 border-blue-300 shadow-lg rounded-lg p-6">
    <h2 className="text-2xl font-bold mb-4 text-blue-600 p-2 dark:text-gray-300">Team Stats</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {teamMembers.map((member) => (
        <TeamMember key={member.id} member={member} />
      ))}
    </div>
  </div>
);

export default TeamStats;
