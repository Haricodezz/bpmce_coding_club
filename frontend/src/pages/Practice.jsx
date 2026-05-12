import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const sampleProblems = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    category: "Arrays",
    points: 20,
    solved: true,
  },
  {
    id: 2,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "Sliding Window",
    points: 50,
    solved: false,
  },
  {
    id: 3,
    title: "Merge K Sorted Lists",
    difficulty: "Hard",
    category: "Heap",
    points: 100,
    solved: false,
  },
  {
    id: 4,
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    category: "Trees",
    points: 55,
    solved: true,
  },
  {
    id: 5,
    title: "Dynamic Programming Grid Paths",
    difficulty: "Hard",
    category: "DP",
    points: 110,
    solved: false,
  },
];

function Practice() {
  const [problems, setProblems] = useState([]);
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");

  useEffect(() => {
    // Replace later with backend fetch
    setProblems(sampleProblems);
  }, []);

  const filteredProblems = problems.filter((problem) => {
    const matchesSearch = problem.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesDifficulty =
      difficulty === "All" ||
      problem.difficulty === difficulty;

    return matchesSearch && matchesDifficulty;
  });

  const solvedCount = problems.filter((p) => p.solved).length;

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar />

      <div className="pt-36 pb-20 px-4 lg:px-10 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl" />
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
              Practice Arena
            </h1>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Master DSA, CP, and interview prep through curated coding challenges.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              ["Total Problems", problems.length, "text-cyan-400"],
              ["Solved", solvedCount, "text-green-400"],
              ["Unsolved", problems.length - solvedCount, "text-red-400"],
              ["Completion", `${
                problems.length
                  ? Math.round((solvedCount / problems.length) * 100)
                  : 0
              }%`, "text-yellow-400"],
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
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 mb-10 shadow-xl flex flex-col lg:flex-row gap-4 justify-between items-center">
            <input
              type="text"
              placeholder="Search problems..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full lg:w-1/2 px-5 py-3 rounded-2xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-500"
            />

            <div className="flex gap-3 flex-wrap">
              {["All", "Easy", "Medium", "Hard"].map((level) => (
                <button
                  key={level}
                  onClick={() => setDifficulty(level)}
                  className={`px-5 py-3 rounded-2xl font-medium transition-all ${
                    difficulty === level
                      ? "bg-cyan-500 text-black"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Problem List */}
          <div className="space-y-5">
            {filteredProblems.map((problem, idx) => (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-xl hover:border-cyan-500 transition-all"
              >
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <h3 className="text-2xl font-bold">
                        {problem.title}
                      </h3>

                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          problem.difficulty === "Easy"
                            ? "bg-green-500/20 text-green-400"
                            : problem.difficulty === "Medium"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {problem.difficulty}
                      </span>

                      <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm">
                        {problem.category}
                      </span>
                    </div>

                    <p className="text-slate-400">
                      Score Value: {problem.points} points
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <span
                      className={`font-semibold ${
                        problem.solved
                          ? "text-green-400"
                          : "text-slate-400"
                      }`}
                    >
                      {problem.solved ? "Solved ✔" : "Unsolved"}
                    </span>

                    <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:scale-105 transition-all shadow-lg">
                      Solve Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Practice;
