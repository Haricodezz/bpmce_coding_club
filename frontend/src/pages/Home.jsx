import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const codeLines = [
  "function solveProblem() {",
  "  const consistency = practiceDaily();",
  "  const rank = joinContests(consistency);",
  "  return buildCareer(rank);",
  "}",
  "const future = solveProblem();",
];

function Home() {
  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-16 overflow-hidden pt-32">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        </div>

        {/* Laptop Coding Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute right-[-15%] xl:right-10 top-1/2 -translate-y-1/2 hidden lg:block"
        >
          <div className="w-[700px] h-[430px] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>

            <div className="p-6 font-mono text-sm text-green-400 space-y-3">
              {codeLines.map((line, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.4, duration: 0.6 }}
                  className="whitespace-pre"
                >
                  {line}
                </motion.div>
              ))}

              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="inline-block w-3 h-5 bg-green-400 ml-1"
              />
            </div>
          </div>

          <div className="w-[760px] h-6 bg-slate-700 rounded-b-full mx-auto"></div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl text-center lg:text-left lg:mr-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-cyan-400 font-semibold uppercase tracking-[0.3em] mb-4"
          >
            Build • Compete • Grow
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
          >
            Welcome to
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              College Coding Club
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-lg md:text-2xl text-slate-300 mb-10 max-w-2xl"
          >
            Learn coding, practice DSA, dominate contests, explore
            premium resources, and shape your developer future through
            one unified ecosystem.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link
              to="/register"
              className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-all shadow-[0_0_25px_rgba(255,255,255,0.3)]"
            >
              Join Now
            </Link>

            <Link
              to="/leaderboard"
              className="px-8 py-4 rounded-full border border-slate-600 text-white font-semibold text-lg hover:border-cyan-400 hover:text-cyan-400 transition-all"
            >
              View Leaderboard
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 lg:px-16 bg-slate-900/60">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Platform Features
          </motion.h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              ["Practice Platform", "Solve curated DSA, CP, and interview problems while improving rank."],
              ["Coding Contests", "Compete in internal battles with major leaderboard rewards."],
              ["Resource Hub", "Access DSA sheets, development resources, placement prep, and more."],
            ].map(([title, desc], idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500 hover:-translate-y-2 transition-all shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-slate-400">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          Our Mission
        </motion.h2>

        <p className="max-w-4xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed">
          To build a thriving coding culture by empowering students
          through competitions, premium learning resources,
          collaboration, and real-world development opportunities.
        </p>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-gradient-to-r from-cyan-600/20 to-blue-700/20 border-y border-slate-800">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-8"
        >
          Ready to Start Your Coding Journey?
        </motion.h2>

        <Link
          to="/register"
          className="inline-block px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-xl hover:scale-105 transition-all shadow-2xl"
        >
          Become a Member
        </Link>
      </section>

      <Footer />
    </div>
  );
}

export default Home;