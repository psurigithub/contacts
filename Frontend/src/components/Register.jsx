import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "User", 
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BACKEND_URL}/auth/signup`,
        formData
      );
      localStorage.setItem("token", response.data.token); 
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange} 
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Role:</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </form>
        <button
          onClick={() => navigate("/login")}
          className="w-full py-2 mt-4 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition duration-200"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;