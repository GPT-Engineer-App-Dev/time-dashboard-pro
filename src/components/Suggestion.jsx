import React from "react";

const Suggestion = ({ task }) => {
  let message;
  switch (task) {
    case "admin":
      message = "It seems you spent a lot of time on administrative tasks today, perhaps you could outsource this task?";
      break;
    case "code":
      message = "Great job on coding! Consider taking breaks to avoid burnout.";
      break;
    case "meetings":
      message = "You had several meetings today. Ensure they are being used effectively.";
      break;
    default:
      message = "";
      break;
  }

  return (
    <div className="mt-4 p-4 bg-blue-100 text-blue-700 border border-blue-200 rounded">
      <h3 className="text-xl font-bold">AI Suggestion 🤖</h3>
      <p>{message}</p>
    </div>
  );
};

export default Suggestion;
