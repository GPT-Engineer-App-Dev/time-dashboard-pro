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
    <div className="mt-4 p-4 bg-blue-100 text-blue-700 border border-blue-200 rounded dark:bg-blue-900 dark:border-blue-700 dark:text-blue-300">
      <h3 className="text-xl font-bold dark:text-gray-300">AI Suggestion 🤖</h3>
      <p className="dark:text-gray-300">{message}</p>
    </div>
  );
};

export default Suggestion;
