import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { registerUser } from "../services/authService";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    department: "",
    year: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await registerUser(formData);
      navigate("/login");
    } catch (err) {
      setError("Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar />

      <div className="flex min-h-screen pt-24">
        {/* Left Branding Section */}
        <div className="hidden lg:flex w-1/2 relative flex-col justify-between p-14 border-r border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-5 mb-10">
              <div className="w-20 h-20 rounded-3xl bg-white text-slate-950 flex items-center justify-center text-3xl font-extrabold shadow-2xl">
                BPM
              </div>

              <div>
                <h1 className="text-4xl font-extrabold">
                  BPMCE Coding Club
                </h1>

                <p className="text-slate-400 text-lg">
                  B. P. Mandal College of Engineering
                </p>
              </div>
            </div>

            <h2 className="text-6xl font-extrabold leading-tight mb-8">
              Join.
              <br />
              Learn.
              <br />
              Grow.
            </h2>

            <p className="text-slate-300 text-xl max-w-xl leading-relaxed">
              Become part of the official coding club ecosystem and unlock
              contests, DSA practice, resources, networking, and placement
              growth opportunities.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-3 gap-6">
            {[
              ["800+", "Students"],
              ["300+", "Active Coders"],
              ["50+", "Events & Contests"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 text-center"
              >
                <h3 className="text-3xl font-bold text-cyan-400">
                  {value}
                </h3>

                <p className="text-slate-400 mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Register Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-2xl bg-slate-900/80 border border-slate-800 rounded-[2.5rem] p-10 shadow-2xl"
          >
            {/* Mobile Branding */}
            <div className="lg:hidden text-center mb-10">
              <div className="w-20 h-20 rounded-3xl bg-white text-slate-950 flex items-center justify-center text-3xl font-extrabold mx-auto mb-4">
                BPM
              </div>

              <h1 className="text-3xl font-extrabold">
                BPMCE Coding Club
              </h1>

              <p className="text-slate-400 mt-2">
                Student Developer Platform
              </p>
            </div>

            {/* Heading */}
            <div className="mb-10">
              <h2 className="text-4xl font-extrabold mb-3">
                Create Your Account
              </h2>

              <p className="text-slate-400 text-lg">
                Register to begin your coding journey.
              </p>
            </div>

            {/* Error */}
            {error && (
              <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-300 font-medium mb-3">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-700 focus:border-cyan-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-3">
                    College Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-700 focus:border-cyan-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-3">
                    Department
                  </label>

                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    placeholder="CSE / CSE(AIML) / EEE / 3DAG"
                    required
                    className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-700 focus:border-cyan-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-3">
                    Year
                  </label>

                  <input
                    type="text"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    placeholder="1st / 2nd / 3rd / 4th"
                    required
                    className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-700 focus:border-cyan-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-3">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create password"
                  required
                  className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-700 focus:border-cyan-500 outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-lg hover:scale-[1.02] transition-all shadow-xl disabled:opacity-50"
              >
                {loading ? "Creating Account..." : "Join Coding Club"}
              </button>
            </form>

            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="text-slate-400">
                Already a member?{" "}
                <Link
                  to="/login"
                  className="text-cyan-400 font-semibold hover:underline"
                >
                  Login Here
                </Link>
              </p>

              <div className="flex justify-center gap-6 mt-6 text-sm text-slate-500">
                <Link to="/" className="hover:text-cyan-400">
                  Home
                </Link>

                <Link
                  to="/leaderboard"
                  className="hover:text-cyan-400"
                >
                  Leaderboard
                </Link>

                <Link
                  to="/resources"
                  className="hover:text-cyan-400"
                >
                  Resources
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Register;