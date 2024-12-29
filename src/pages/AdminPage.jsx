import React, { useState } from 'react';
import { db } from '../services/Firebase';
import { collection, addDoc } from 'firebase/firestore';
import Navbar from '../components/Navbar';

const AdminPage = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [school, setSchool] = useState('');

  const handleAddAspirant = async () => {
    try {
      await addDoc(collection(db, 'aspirants'), { name, position, school });
      alert('Aspirant added successfully!');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-8">
      <Navbar/>
      <h1 className="text-2xl font-bold mb-4">Admin Page</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <input
        type="text"
        placeholder="School"
        value={school}
        onChange={(e) => setSchool(e.target.value)}
        className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        onClick={handleAddAspirant}
        className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600"
      >
        Add Aspirant
      </button>
    </div>
  );
};

export default AdminPage;
