import React, { useEffect, useState } from 'react';
import { db } from '../services/Firebase';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import Navbar from '../components/Navbar';

const HomePage = () => {
  const [aspirants, setAspirants] = useState([]);
  const [selectedVotes, setSelectedVotes] = useState({});
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    const fetchAspirants = async () => {
      const snapshot = await getDocs(collection(db, 'aspirants'));
      const aspirantsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAspirants(aspirantsData);
    };

    fetchAspirants();
  }, []);

  const handleVote = async () => {
    for (const id in selectedVotes) {
      const aspirantDoc = doc(db, 'aspirants', id);
      await updateDoc(aspirantDoc, {
        votes: selectedVotes[id],
      });
    }
    setHasVoted(true);
  };

  if (hasVoted) {
    return <h1 className="text-center text-2xl mt-8">Thank you for voting!</h1>;
  }

  return (
    <div className="p-4">
        <Navbar/>
      <h1 className="text-2xl font-bold mb-4">Vote for Your Aspirants</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {aspirants.map((aspirant) => (
          <div key={aspirant.id} className="border rounded shadow-md p-4 bg-white">
            <h3 className="font-bold">{aspirant.name}</h3>
            <p>Position: {aspirant.position}</p>
            <button
              onClick={() =>
                setSelectedVotes((prev) => ({
                  ...prev,
                  [aspirant.id]: (prev[aspirant.id] || aspirant.votes) + 1,
                }))
              }
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
              Vote
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={handleVote}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Submit Votes
      </button>
    </div>
  );
};

export default HomePage;
