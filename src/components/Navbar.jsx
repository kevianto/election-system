import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../services/Firebase';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/');
  };

  return (
    <nav className="bg-blue-500 text-white p-4 shadow">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">MMUST Election System</h1>
        <div className="space-x-4">
          <Link to="/home" className="hover:underline">
            Home
          </Link>
          <Link to="/profile" className="hover:underline">
            Profile
          </Link>
          <Link to="/admin" className="hover:underline">
            Admin
          </Link>
          <button onClick={handleLogout} className="hover:underline">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
