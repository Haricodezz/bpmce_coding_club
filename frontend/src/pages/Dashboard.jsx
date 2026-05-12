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
        Loading Dashboard...
      </div>
    );
  }

  const stats = [
    {
      title: "Total Score",
      value: user.total_score || 2450,
      icon: "🏆",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      title: "Contest Score",
      value: user.contest_score || 1700,
      icon: "🚀",
      gradient: "from-cyan-400 to-blue-600",
    },
    {
      title: "Practice Score",
      value: user.platform_score || 520,
      icon: "💻",
      gradient: "from-green-400 to-emerald-600",
    },
    {
      title: "Event Score",
      value: user.event_score || 230,
      icon: "📅",
      gradient: "from-purple-400 to-pink-600",
    },
  ];

  const quickActions = [
    ["Practice Arena", "/practice", "Daily DSA & CP mastery", "💻"],
    ["Contest Arena", "/contests", "Compete in coding battles", "🏆"],
    ["Learning Hub", "/resources", "Structured growth roadmap", "📘"],
    ["Events Hub", "/events", "Hackathons & workshops", "📅"],
    ["Leaderboard", "/leaderboard", "Track competitive rank", "📈"],
    ["Announcements", "/announcements", "Official club updates", "📢"],
  ];

  const activities = [
    "Solved 5 DSA problems this week",
    "Joined Weekly Coding Clash",
    "Completed React module",
    "Improved rank by 12 spots",
    "Registered for upcoming hackathon",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar />

      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="pt-32 px-4 lg:px-10 pb-20 max-w-7xl mx-auto space-y-12">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <div>
              <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold mb-4">
                BPMCE Coding Club Dashboard
              </p>
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
                Welcome back,
                <br />
                {user.name}
              </h1>
              <p className="text-slate-400 text-xl max-w-3xl leading-relaxed">
                Your central command center for coding growth, competitive excellence,
                and professional student developer success.
              </p>
            </div>

            <div className="w-36 h-36 rounded-[2rem] bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-6xl font-extrabold shadow-2xl">
              {user.name?.charAt(0)}
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 shadow-xl hover:-translate-y-2 transition-all"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-3xl mb-6`}>
                {stat.icon}
              </div>
              <p className="text-slate-400 mb-2">{stat.title}</p>
              <h2 className="text-4xl font-extrabold">{stat.value}</h2>
            </motion.div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid xl:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="xl:col-span-2 bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-extrabold mb-8">Quick Access</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {quickActions.map(([title, link, desc, icon], idx) => (
                <Link
                  key={idx}
                  to={link}
                  className="bg-slate-950/80 border border-slate-800 rounded-3xl p-6 hover:border-cyan-500 hover:-translate-y-2 transition-all"
                >
                  <div className="text-4xl mb-4">{icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{title}</h3>
                  <p className="text-slate-400 mb-4">{desc}</p>
                  <span className="text-cyan-400 font-semibold">Open →</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-extrabold mb-8">Recent Activity</h2>
            <div className="space-y-4">
              {activities.map((activity, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4"
                >
                  <p className="text-slate-300">{activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Growth Section */}
        <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-xl">
          <h2 className="text-3xl font-extrabold mb-8">Growth Roadmap</h2>
          <div className="space-y-8">
            {[
              ["LeetCode Progress", user.leetcode_easy || 40, 300],
              ["Platform Practice", user.platform_score || 520, 1000],
              ["Contest Dominance", user.contest_score || 1700, 5000],
            ].map(([label, value, max], idx) => {
              const percentage = Math.min((value / max) * 100, 100);
              return (
                <div key={idx}>
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold text-lg">{label}</span>
                    <span className="text-cyan-400 font-bold">{value}/{max}</span>
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
  );
}

export default Dashboard;
