import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
cd

const Login= () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="username">Username</label>
            <div className="relative">
              <input
                id="username"
                type="text"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple-400"
                placeholder="Type your username"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <i className="fas fa-user text-gray-400"></i>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <div className="relative">
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple-400"
                placeholder="Type your password"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <i className="fas fa-lock text-gray-400"></i>
              </div>
            </div>
          </div>
          <div className="text-right mb-4">
            <a href="#" className="text-sm text-purple-600 hover:underline">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-500 hover:to-purple-600"
          >
            LOGIN
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-2">Or Sign Up Using</p>
          <div className="flex justify-center space-x-4">
            <button className="p-2 bg-blue-600 rounded-full text-white">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="p-2 bg-blue-400 rounded-full text-white">
              <i className="fab fa-twitter"></i>
            </button>
            <button className="p-2 bg-red-600 rounded-full text-white">
              <i className="fab fa-google"></i>
            </button>
          </div>
          <p className="mt-4 text-gray-600">Or Sign Up Using</p>
          <a href="#" className="text-purple-600 hover:underline">SIGN UP</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
