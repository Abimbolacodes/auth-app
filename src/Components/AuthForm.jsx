import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? 'Logging in...' : 'Signing up...');
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input id="name" type="text" className="w-full p-2 border rounded" required />
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input id="email" type="email" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input id="password" type="password" className="w-full p-2 border rounded" required />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p className="mt-4 text-center">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <button onClick={() => setIsLogin(!isLogin)} className="text-blue-500 ml-1">
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;