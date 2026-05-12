import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

function Announcements() {
  const [announcements, setAnnouncements] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    // FUTURE BACKEND:
    // Replace with API fetch from PostgreSQL
    setAnnouncements([
      {
        id: 1,
        title: "Weekly Coding Clash Registration Open",
        description:
          "Registrations are now open for this week's competitive programming contest. Top scorers earn leaderboard rewards.",
        category: "Contest",
        date: "2026-05-18",
        priority: "High",
        icon: "🏆",
        color: "bg-yellow-100",
      },
      {
        id: 2,
        title: "AI & ML Workshop Coming Soon",
        description:
          "Exclusive machine learning workshop for BPMCE students covering hands-on projects and career roadmap.",
        category: "Workshop",
        date: "2026-05-22",
        priority: "Medium",
        icon: "🤖",
        color: "bg-indigo-100",
      },
      {
        id: 3,
        title: "New DSA Resource Sheet Uploaded",
        description:
          "Updated placement-focused DSA preparation sheet is now available in the resource hub.",
        category: "Resources",
        date: "2026-05-15",
        priority: "Low",
        icon: "📘",
        color: "bg-blue-100",
      },
      {
        id: 4,
        title: "Hackathon 2026 Team Formation Begins",
        description:
          "Students can now form teams for the annual innovation hackathon with major scoring rewards.",
        category: "Hackathon",
        date: "2026-06-01",
        priority: "High",
        icon: "🚀",
        color: "bg-green-100",
      },
      {
        id: 5,
        title: "Club Recruitment Drive",
        description:
          "Applications open for technical leads, coordinators, and content creators for the coding club.",
        category: "Community",
        date: "2026-05-28",
        priority: "Medium",
        icon: "👥",
        color: "bg-purple-100",
      },
      {
        id: 6,
        title: "Platform Update V3 Released",
        description:
          "New dashboard, leaderboard, profile system, and learning ecosystem improvements are now live.",
        category: "Platform",
        date: "2026-05-12",
        priority: "High",
        icon: "⚙️",
        color: "bg-red-100",
      },
    ]);
  }, []);

  const filters = [
    "All",
    "Contest",
    "Workshop",
    "Resources",
    "Hackathon",
    "Community",
    "Platform",
  ];

  const filteredAnnouncements =
    activeFilter === "All"
      ? announcements
      : announcements.filter(
          (announcement) =>
            announcement.category === activeFilter
        );

  const badgeColors = {
    Contest: "bg-yellow-100 text-yellow-700",
    Workshop: "bg-indigo-100 text-indigo-700",
    Resources: "bg-blue-100 text-blue-700",
    Hackathon: "bg-green-100 text-green-700",
    Community: "bg-purple-100 text-purple-700",
    Platform: "bg-red-100 text-red-700",
  };

  const priorityColors = {
    High: "text-red-600",
    Medium: "text-yellow-600",
    Low: "text-green-600",
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="pt-28 px-4 lg:px-8 pb-16 max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-3xl shadow-md p-6 flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900">
              Announcements & Updates
            </h1>

            <p className="text-slate-500 mt-2">
              Official club notices, platform releases, deadlines, and ecosystem updates
            </p>
          </div>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="text-slate-600 font-medium">
              Announcement Center
            </span>

            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
              AN
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all ${
                activeFilter === filter
                  ? "bg-blue-600 text-white"
                  : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Announcement Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredAnnouncements.map((announcement, idx) => (
            <motion.div
              key={announcement.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
              className="bg-white rounded-3xl shadow-md overflow-hidden border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all"
            >
              {/* Banner */}
              <div
                className={`${
                  announcement.color || "bg-slate-200"
                } h-36 flex items-center justify-center text-6xl`}
              >
                {announcement.icon || "📢"}
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span
                    className={`px-4 py-1 rounded-full text-sm font-semibold ${
                      badgeColors[announcement.category] ||
                      "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {announcement.category}
                  </span>

                  <span
                    className={`font-bold ${
                      priorityColors[announcement.priority]
                    }`}
                  >
                    {announcement.priority}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  {announcement.title}
                </h2>

                <p className="text-slate-600 mb-4 line-clamp-4">
                  {announcement.description}
                </p>

                <p className="text-slate-500 mb-6">
                  📅 {announcement.date}
                </p>

                {/* CTA */}
                <div className="flex justify-between gap-4">
                  <button className="flex-1 bg-blue-600 text-white py-3 rounded-2xl font-bold hover:bg-blue-700 transition-all">
                    View Details
                  </button>

                  <button className="flex-1 border border-slate-300 py-3 rounded-2xl font-medium hover:bg-slate-100 transition-all">
                    Save
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Announcements;