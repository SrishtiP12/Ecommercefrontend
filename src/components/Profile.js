import React from 'react'

const Profile = ({ user }) => {
   return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white font-['Montserrat']">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md flex flex-col items-center">
        <h2 className="text-3xl font-extrabold mb-6 text-green-700">My Profile</h2>
        <div className="text-lg text-gray-800 mb-2">Name: {user?.name || 'N/A'}</div>
        <div className="text-lg text-gray-800 mb-2">Email: {user?.email || 'N/A'}</div>
      </div>
    </div>
  );
}

export default Profile
