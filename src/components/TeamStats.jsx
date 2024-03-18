import React from "react";
import TeamMember from "./TeamMember.jsx";

const TeamStats = ({ teamMembers }) => (
  <div className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white p-2 rounded">Team Stats</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {teamMembers.map((member) => (
        <TeamMember key={member.id} member={member} />
      ))}
    </div>
  </div>
);

export default TeamStats;
