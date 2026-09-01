import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#050508] flex items-center justify-center text-white text-center px-6">
      <div>
        <h1 className="text-6xl font-bold text-blue-500 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/25 transition-all"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
