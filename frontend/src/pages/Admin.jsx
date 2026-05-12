import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

function Admin() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        Loading admin panel...
      </div>
    );
  }

  const stats = [
    ["Total Students", 800, "text-cyan-400"],
    ["Active Coders", 300, "text-green-400"],
    ["Live Contests", 5, "text-yellow-400"],
    ["Resources Uploaded", 120, "text-purple-400"],
  ];

  const tabs = [
    ["overview", "Overview"],
    ["events", "Events"],
    ["contests", "Contests"],
    ["problems", "Problems"],
    ["resources", "Resources"],
    ["announcements", "Announcements"],
    ["users", "Users"],
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar />

      <div className="pt-36 pb-20 px-4 lg:px-10 relative">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto space-y-12">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900/80 border border-slate-800 rounded-[2.5rem] p-10 shadow-2xl"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              <div>
                <p className="text-cyan-400 uppercase tracking-[0.3em] font-semibold mb-4">
                  Administrative Control Center
                </p>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
                  Admin Panel V3
                </h1>
                <p className="text-slate-400 text-xl max-w-3xl">
                  Manage contests, students, resources, events, and the entire coding club ecosystem.
                </p>
              </div>

              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-5xl font-bold shadow-2xl">
                A
              </div>
            </div>
          </motion.div>

          {/* Analytics */}
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

          {/* Tabs */}
          <div className="flex flex-wrap gap-4 justify-center">
            {tabs.map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-2xl font-medium transition-all ${
                  activeTab === key
                    ? "bg-cyan-500 text-black"
                    : "bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Dynamic Content */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 shadow-xl min-h-[500px]">
            {activeTab === "overview" && (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[
                  ["Create New Contest", "Launch major scoring competitions"],
                  ["Manage Events", "Workshops, hackathons, seminars"],
                  ["Upload Resources", "Notes, sheets, placement prep"],
                  ["Post Announcements", "Deadlines, updates, notices"],
                  ["User Management", "Student profiles & permissions"],
                  ["Leaderboard Controls", "Score correction & rank systems"],
                ].map(([title, desc], idx) => (
                  <div
                    key={idx}
                    className="bg-slate-950 border border-slate-800 rounded-3xl p-6 hover:border-cyan-500 hover:-translate-y-2 transition-all"
                  >
                    <h3 className="text-2xl font-bold mb-3">{title}</h3>
                    <p className="text-slate-400 mb-4">{desc}</p>
                    <button className="text-cyan-400 font-semibold">
                      Manage →
                    </button>
                  </div>
                ))}
              </div>
            )}

            {activeTab !== "overview" && (
              <div className="flex flex-col items-center justify-center h-full text-center py-20">
                <h2 className="text-4xl font-bold mb-4 capitalize">
                  {activeTab} Management Module
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl">
                  This section will manage all {activeTab} related CRUD operations, analytics, and controls for the coding club ecosystem.
                </p>
              </div>
            )}
          </div>

          {/* Recent Admin Actions */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold mb-8">Recent Admin Actions</h2>

            <div className="space-y-4">
              {[
                "Created Weekly Coding Clash contest",
                "Uploaded new DSA placement sheet",
                "Approved 25 new student registrations",
                "Published upcoming AI workshop announcement",
              ].map((action, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950 border border-slate-800 rounded-2xl p-4"
                >
                  <p className="text-slate-300">{action}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
