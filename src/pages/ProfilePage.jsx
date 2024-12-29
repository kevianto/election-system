import React, { useState } from 'react';
import { db } from '../services/Firebase';
import { collection, doc, setDoc } from 'firebase/firestore';
import { auth } from '../services/Firebase';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ProfilePage = () => {
  const [school, setSchool] = useState('');
  const [residency, setResidency] = useState('');
  const [hall, setHall] = useState('');
  const [gender, setGender] = useState('');
  const navigate =useNavigate();
  const handleSaveProfile = async () => {
    const user = auth.currentUser;
    if (user) {
      const userDoc = doc(collection(db, 'profiles'), user.uid);
      await setDoc(userDoc, {
        school,
        residency,
        hall,
        gender,
      });
      alert('Profile updated successfully!');
      navigate("/home")
    } else {
      alert('User not logged in.');
    }
  };

  return (
    <div>
    <Navbar/>
    <div className="flex items-center justify-center h-screen bg-gray-100">
      
      <div className="bg-white p-8 rounded shadow-md w-96">
      
        <h1 className="text-2xl font-bold mb-4">Update Profile</h1>
        <select
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select School</option>
          <option value="School of Computing and Informatics">
            School of Computing and Informatics
          </option>
          <option value="School of Education">School of Education</option>
          {/* Add other schools */}
        </select>

        <select
          value={residency}
          onChange={(e) => setResidency(e.target.value)}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Residency Status</option>
          <option value="Resident">Resident</option>
          <option value="Non-Resident">Non-Resident</option>
        </select>

        {residency === 'Resident' && (
          <select
            value={hall}
            onChange={(e) => setHall(e.target.value)}
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Hall</option>
            <option value="Hall 1">Hall 1</option>
            <option value="Hall 2">Hall 2</option>
            {/* Add other halls */}
          </select>
        )}

        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <button
          onClick={handleSaveProfile}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Save Profile
        </button>
      </div>
    </div>
    </div>
  );
};

export default ProfilePage;
