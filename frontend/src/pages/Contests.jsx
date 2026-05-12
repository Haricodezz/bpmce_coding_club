import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const sampleContests = [
  {
    id: 1,
    title: "Weekly Coding Clash #12",
    description: "Compete in DSA + CP battle for leaderboard dominance.",
    date: "2026-05-20",
    duration: "2 Hours",
    difficulty: "Medium",
    participants: 120,
    prize: "5000",
    status: "Upcoming",
  },
  {
    id: 2,
    title: "AI HackSprint Challenge",
    description: "Fast-paced AI/ML mini hackathon with innovation rewards.",
    date: "2026-05-25",
    duration: "6 Hours",
    difficulty: "Hard",
    participants: 80,
    prize: "15000",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "Monthly Mega Contest",
    description: "Major scoring event with 70% leaderboard weightage.",
    date: "2026-06-01",
    duration: "3 Hours",
    difficulty: "Hard",
    participants: 250,
    prize: "50000",
    status: "Featured",
  },
];

function Contests() {
  const [contests, setContests] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    // Replace later with backend API
    setContests(sampleContests);
  }, []);

  const filteredContests = contests.filter((contest) => {
    if (filter === "All") return true;
    return contest.status === filter;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar />

      <div className="pt-36 pb-20 px-4 lg:px-10 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-600/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-14"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Contest Arena
            </h1>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Compete in internal coding battles, dominate rankings, and earn major rewards.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              ["Total Contests", contests.length, "text-cyan-400"],
              ["Upcoming", contests.filter(c => c.status === "Upcoming").length, "text-green-400"],
              ["Featured", contests.filter(c => c.status === "Featured").length, "text-yellow-400"],
              ["Max Prize Pool", "50K", "text-purple-400"],
            ].map(([title, value, color]) => (
              <div
                key={title}
                className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-xl"
              >
                <p className="text-slate-400 mb-2">{title}</p>
                <h2 className={`text-4xl font-bold ${color}`}>
                  {value}
                </h2>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="flex justify-center gap-4 flex-wrap mb-12">
            {["All", "Upcoming", "Featured"].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-6 py-3 rounded-2xl font-medium transition-all ${
                  filter === status
                    ? "bg-cyan-500 text-black"
                    : "bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800"
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Contest Cards */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredContests.map((contest, idx) => (
              <motion.div
                key={contest.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-3xl border p-8 shadow-2xl backdrop-blur-xl transition-all hover:-translate-y-2 ${
                  contest.status === "Featured"
                    ? "bg-gradient-to-b from-yellow-500/10 to-slate-900 border-yellow-400/30"
                    : "bg-slate-900/80 border-slate-800 hover:border-cyan-500"
                }`}
              >
                <div className="flex justify-between items-center mb-5">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      contest.status === "Featured"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-green-500/20 text-green-400"
                    }`}
                  >
                    {contest.status}
                  </span>

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      contest.difficulty === "Medium"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {contest.difficulty}
                  </span>
                </div>

                <h2 className="text-3xl font-bold mb-4">
                  {contest.title}
                </h2>

                <p className="text-slate-400 mb-6 min-h-[70px]">
                  {contest.description}
                </p>

                <div className="space-y-3 text-sm text-slate-300 mb-8">
                  <p>📅 Date: {contest.date}</p>
                  <p>⏱ Duration: {contest.duration}</p>
                  <p>👥 Participants: {contest.participants}</p>
                  <p>🏆 Prize Pool: ₹{contest.prize}</p>
                </div>

                <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-lg hover:scale-105 transition-all shadow-lg">
                  Register Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contests;
