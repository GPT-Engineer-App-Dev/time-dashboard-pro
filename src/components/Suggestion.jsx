import React from "react";

const Suggestion = ({ task, hours }) => {
  let message = "";
  if (task === "admin") {
    message = "It seems you spent a lot of time bookkeeping today, perhaps you could outsource this task?";
  }

  return (
    <div className="mt-4 p-4 bg-blue-100 text-blue-700 border border-blue-200 rounded">
      <p>{message}</p>
    </div>
  );
};

export default Suggestion;
