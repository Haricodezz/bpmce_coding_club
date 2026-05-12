import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { loginUser } from "../services/authService";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      const response = await loginUser(formData);

      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));

      if (response.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar />

      <div className="flex min-h-screen pt-24">
        {/* Left Branding Section */}
        <div className="hidden lg:flex w-1/2 relative flex-col justify-between p-14 border-r border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
          {/* Background Glow */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
          </div>

          {/* Branding */}
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
              Build.
              <br />
              Compete.
              <br />
              Lead.
            </h2>

            <p className="text-slate-300 text-xl max-w-xl leading-relaxed">
              Join the official student developer ecosystem to practice DSA,
              compete in coding contests, access premium resources, and shape
              your future in tech.
            </p>
          </div>

          {/* Stats */}
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

        {/* Right Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-xl bg-slate-900/80 border border-slate-800 rounded-[2.5rem] p-10 shadow-2xl"
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
                Welcome Back
              </h2>

              <p className="text-slate-400 text-lg">
                Login to continue your coding journey.
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400">
                {error}
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-700 focus:border-cyan-500 outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-lg hover:scale-[1.02] transition-all shadow-xl disabled:opacity-50"
              >
                {loading ? "Signing In..." : "Login to Dashboard"}
              </button>
            </form>

            {/* Footer Links */}
            <div className="mt-8 text-center">
              <p className="text-slate-400">
                New member?{" "}
                <Link
                  to="/register"
                  className="text-cyan-400 font-semibold hover:underline"
                >
                  Join BPMCE Coding Club
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

export default Login;