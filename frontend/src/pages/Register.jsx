import { useState } from "react";
import Navbar from "../components/Navbar";
import { registerUser } from "../services/authService";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    department: "",
    year: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await registerUser(formData);

      alert(response.message);
      console.log(response);

      window.location.href = "/login";

    } catch (error) {
      alert(
        error.response?.data?.message || "Registration failed"
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            Register
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-3 border rounded mb-4"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border rounded mb-4"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border rounded mb-4"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            className="w-full p-3 border rounded mb-4"
            onChange={handleChange}
          />

          <input
            type="text"
            name="year"
            placeholder="Year"
            className="w-full p-3 border rounded mb-6"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Create Account
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;