import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { getLeaderboard } from "../services/scoreService";

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);
  const [activeTab, setActiveTab] = useState("Monthly");

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const data = await getLeaderboard();
        setLeaders(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLeaderboard();
  }, []);

  const topThree = leaders.slice(0, 3);
  const remainingLeaders = leaders.slice(3);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar />

      <div className="relative pt-36 pb-20 px-4 lg:px-10">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute top-20 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto rounded-[2.5rem] border border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-black shadow-2xl overflow-hidden">
          {/* Top glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-72 bg-gradient-to-b from-blue-500/10 to-transparent rounded-b-[100%]" />

          <div className="relative p-8 lg:p-14">
            {/* Header */}
            <div className="text-center mb-10">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              >
                Leaderboard Arena
              </motion.h1>
              <p className="text-slate-400 text-lg">
                College coding dominance rankings
              </p>
            </div>

            {/* Toggle Tabs */}
            <div className="flex justify-center mb-16">
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-2 flex gap-2 shadow-xl">
                {["Daily", "Monthly"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-8 py-3 rounded-xl font-medium transition-all ${
                      activeTab === tab
                        ? "bg-slate-700 text-white shadow-lg"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Top 3 Podium */}
            {topThree.length === 3 && (
              <div className="grid lg:grid-cols-3 gap-8 items-end mb-16">
                {[topThree[1], topThree[0], topThree[2]].map((user, idx) => {
                  const leetcodeScore =
                    user.leetcode_easy * 2 +
                    user.leetcode_medium * 5 +
                    user.leetcode_hard * 10;

                  const rankStyles = [
                    {
                      prize: "50,000",
                      border: "border-slate-300/30",
                      glow: "from-slate-300/20 to-slate-500/10",
                      height: "lg:h-[460px]",
                    },
                    {
                      prize: "100,000",
                      border: "border-yellow-400/40",
                      glow: "from-yellow-400/20 to-amber-600/10",
                      height: "lg:h-[540px]",
                    },
                    {
                      prize: "20,000",
                      border: "border-orange-400/30",
                      glow: "from-orange-500/20 to-amber-700/10",
                      height: "lg:h-[460px]",
                    },
                  ];

                  const style = rankStyles[idx];

                  return (
                    <motion.div
                      key={user.user_id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.2 }}
                      className={`relative ${style.height} rounded-3xl border ${style.border} bg-gradient-to-b ${style.glow} backdrop-blur-xl flex flex-col items-center pt-10 pb-8 px-6 shadow-2xl`}
                    >
                      <div className="w-28 h-28 rounded-3xl bg-slate-200 text-slate-900 flex items-center justify-center text-4xl font-bold mb-6 shadow-xl">
                        {user.name.charAt(0)}
                      </div>

                      <h2 className="text-3xl font-bold mb-3 text-center">
                        {user.name}
                      </h2>

                      <div className="mb-6 px-4 py-2 rounded-2xl bg-slate-900/60 border border-slate-700">
                        <span className="text-yellow-400 text-xl">
                          🏆 Rank #{leaders.indexOf(user) + 1}
                        </span>
                      </div>

                      <p className="text-slate-300 mb-4">
                        LeetCode: {leetcodeScore}
                      </p>

                      <div className="text-center mb-8">
                        <p className="text-5xl font-extrabold text-cyan-400">
                          {Math.round(user.total_score)}
                        </p>
                        <p className="text-slate-400 mt-2">Total Score</p>
                      </div>

                      <div className="w-full border-t border-slate-800 pt-6 text-center">
                        <p className="text-slate-400">Prize Pool</p>
                        <p className="text-3xl font-bold text-white mt-2">
                          {style.prize}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {/* User Highlight */}
            <div className="max-w-3xl mx-auto mb-16 bg-slate-900/70 border border-slate-800 rounded-2xl px-8 py-5 text-center shadow-lg">
              <p className="text-slate-300 text-lg">
                Compete daily, dominate contests, and rise through the coding ecosystem.
              </p>
            </div>

            {/* Full Rankings Table */}
            <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-2xl">
              <div className="grid grid-cols-7 gap-4 px-8 py-5 border-b border-slate-800 text-slate-400 font-semibold text-sm uppercase tracking-wider">
                <span>Rank</span>
                <span>Name</span>
                <span>Total</span>
                <span>Contest</span>
                <span>Platform</span>
                <span>LeetCode</span>
                <span>Events</span>
              </div>

              <div>
                {leaders.map((user, index) => {
                  const leetcodeScore =
                    user.leetcode_easy * 2 +
                    user.leetcode_medium * 5 +
                    user.leetcode_hard * 10;

                  return (
                    <motion.div
                      key={user.user_id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="grid grid-cols-7 gap-4 px-8 py-5 border-b border-slate-900 hover:bg-slate-900/60 transition-all items-center"
                    >
                      <span className="font-bold text-lg">#{index + 1}</span>

                      <span className="font-semibold text-white">
                        {user.name}
                      </span>

                      <span className="font-bold text-cyan-400">
                        {Math.round(user.total_score)}
                      </span>

                      <span>{user.contest_score}</span>
                      <span>{user.platform_score}</span>
                      <span>{leetcodeScore}</span>
                      <span>{user.event_score}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;