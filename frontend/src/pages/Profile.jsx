import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        Loading dashboard...
      </div>
    );
  }

  const stats = [
    ["Total Score", user.total_score || 0, "text-cyan-400"],
    ["Contest Rank", user.rank || "#--", "text-yellow-400"],
    ["Problems Solved", user.problems_solved || 0, "text-green-400"],
    ["Events Joined", user.events_joined || 0, "text-purple-400"],
  ];

  const quickActions = [
    ["Practice Arena", "/practice", "Sharpen DSA & CP skills daily"],
    ["Contest Arena", "/contests", "Join live coding battles"],
    ["Leaderboard", "/leaderboard", "Track your competitive rank"],
    ["Resources Hub", "/resources", "Access premium prep materials"],
  ];

  const recentActivity = [
    user.bio ? `Updated profile bio` : "Complete your profile",
    "Solved new coding challenges",
    "Participated in recent club activities",
    "Track contest progress for leaderboard growth",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar />

      <div className="pt-36 pb-20 px-4 lg:px-10 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto space-y-12">
          {/* Welcome Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900/80 border border-slate-800 rounded-[2.5rem] p-10 shadow-2xl"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              <div>
                <p className="text-cyan-400 uppercase tracking-[0.3em] font-semibold mb-4">
                  Student Developer Dashboard
                </p>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
                  Welcome back, {user.name}
                </h1>
                <p className="text-slate-400 text-xl max-w-3xl">
                  Track coding growth, dominate contests, and build your professional developer journey.
                </p>
              </div>

              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-5xl font-bold shadow-2xl">
                {user.name?.charAt(0)}
              </div>
            </div>
          </motion.div>

          {/* Analytics Cards */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {stats.map(([title, value, color], idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-xl"
              >
                <p className="text-slate-400 mb-2">{title}</p>
                <h2 className={`text-4xl font-bold ${color}`}>{value}</h2>
              </motion.div>
            ))}
          </div>

          {/* Main Grid */}
          <div className="grid xl:grid-cols-3 gap-8">
            {/* Quick Access */}
            <div className="xl:col-span-2 bg-slate-900/80 border border-slate-800 rounded-3xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-8">Quick Access</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {quickActions.map(([title, link, desc], idx) => (
                  <Link
                    key={idx}
                    to={link}
                    className="bg-slate-950 border border-slate-800 rounded-3xl p-6 hover:border-cyan-500 hover:-translate-y-2 transition-all"
                  >
                    <h3 className="text-2xl font-bold mb-3">{title}</h3>
                    <p className="text-slate-400 mb-4">{desc}</p>
                    <span className="text-cyan-400 font-semibold">Open →</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-8">Recent Activity</h2>

              <div className="space-y-4">
                {recentActivity.map((activity, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-950 border border-slate-800 rounded-2xl p-4"
                  >
                    <p className="text-slate-300">{activity}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Progress Section */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold mb-8">Growth Roadmap</h2>

            <div className="space-y-6">
              {[
                ["LeetCode Progress", user.leetcode_easy || 0, 300],
                ["Platform Practice", user.platform_score || 0, 1000],
                ["Contest Dominance", user.contest_score || 0, 5000],
              ].map(([label, value, max], idx) => {
                const percentage = Math.min((value / max) * 100, 100);

                return (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{label}</span>
                      <span className="text-cyan-400">{value}/{max}</span>
                    </div>
                    <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
