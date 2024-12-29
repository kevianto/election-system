import React from 'react';

const VoteSummary = ({ aspirants }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Vote Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {aspirants.map((aspirant) => (
          <div
            key={aspirant.id}
            className="border rounded shadow-md p-4 bg-white"
          >
            <h3 className="font-bold">{aspirant.name}</h3>
            <p>Position: {aspirant.position}</p>
            <p className="font-semibold">Votes: {aspirant.votes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoteSummary;
