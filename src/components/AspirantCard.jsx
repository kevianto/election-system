import React from 'react';

const AspirantCard = ({ name, position, votes }) => {
  return (
    <div className="border rounded shadow-md p-4 mb-4 bg-white">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-600">Position: {position}</p>
      <p className="text-gray-600">Votes: {votes}</p>
    </div>
  );
};

export default AspirantCard;
