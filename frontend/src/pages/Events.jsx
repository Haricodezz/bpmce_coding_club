import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { getEvents } from "../services/eventService";

function Events() {
  const [events, setEvents] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getEvents();

        // FUTURE BACKEND:
        // Fully dynamic from PostgreSQL later
        if (data && data.length > 0) {
          setEvents(data);
        } else {
          setEvents([
            {
              id: 1,
              title: "Weekly Coding Clash",
              description:
                "Competitive programming contest for leaderboard growth and ranking rewards.",
              category: "Contest",
              date: "2026-05-20",
              venue: "Online Platform",
              participants: 180,
              score: 500,
              icon: "🏆",
              color: "bg-yellow-100",
            },
            {
              id: 2,
              title: "AI & ML Workshop",
              description:
                "Hands-on session on machine learning fundamentals, projects, and deployment.",
              category: "Workshop",
              date: "2026-05-25",
              venue: "Seminar Hall",
              participants: 120,
              score: 150,
              icon: "🤖",
              color: "bg-indigo-100",
            },
            {
              id: 3,
              title: "Web Dev Bootcamp",
              description:
                "Learn frontend + backend development roadmap for full-stack growth.",
              category: "Bootcamp",
              date: "2026-06-02",
              venue: "Computer Lab",
              participants: 150,
              score: 200,
              icon: "🌐",
              color: "bg-red-100",
            },
            {
              id: 4,
              title: "DSA Masterclass",
              description:
                "Advanced placement preparation with coding interview strategies.",
              category: "Training",
              date: "2026-06-08",
              venue: "Coding Arena",
              participants: 95,
              score: 250,
              icon: "🧠",
              color: "bg-blue-100",
            },
            {
              id: 5,
              title: "Hackathon 2026",
              description:
                "Major project-building competition with innovation-focused scoring.",
              category: "Hackathon",
              date: "2026-06-15",
              venue: "Main Auditorium",
              participants: 210,
              score: 1000,
              icon: "🚀",
              color: "bg-green-100",
            },
            {
              id: 6,
              title: "Open Source Sprint",
              description:
                "Contribute to GitHub projects and improve developer portfolios.",
              category: "Community",
              date: "2026-06-22",
              venue: "Online + Offline",
              participants: 85,
              score: 300,
              icon: "💻",
              color: "bg-purple-100",
            },
          ]);
        }
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };

    fetchEvents();
  }, []);

  const filters = [
    "All",
    "Contest",
    "Workshop",
    "Bootcamp",
    "Training",
    "Hackathon",
    "Community",
  ];

  const filteredEvents =
    activeFilter === "All"
      ? events
      : events.filter(
          (event) => event.category === activeFilter
        );

  const badgeColors = {
    Contest: "bg-yellow-100 text-yellow-700",
    Workshop: "bg-indigo-100 text-indigo-700",
    Bootcamp: "bg-red-100 text-red-700",
    Training: "bg-blue-100 text-blue-700",
    Hackathon: "bg-green-100 text-green-700",
    Community: "bg-purple-100 text-purple-700",
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="pt-28 px-4 lg:px-8 pb-16 max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-3xl shadow-md p-6 flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900">
              Club Events & Activities
            </h1>

            <p className="text-slate-500 mt-2">
              Workshops, contests, hackathons, and ecosystem growth opportunities
            </p>
          </div>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="text-slate-600 font-medium">
              Event Hub
            </span>

            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
              EV
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

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredEvents.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
              className="bg-white rounded-3xl shadow-md overflow-hidden border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all"
            >
              {/* Banner */}
              <div
                className={`${
                  event.color || "bg-slate-200"
                } h-36 flex items-center justify-center text-6xl`}
              >
                {event.icon || "📅"}
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span
                    className={`px-4 py-1 rounded-full text-sm font-semibold ${
                      badgeColors[event.category] ||
                      "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {event.category}
                  </span>

                  <span className="text-slate-500 text-sm">
                    {event.participants || 0} joined
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  {event.title}
                </h2>

                <p className="text-slate-600 mb-4 line-clamp-3">
                  {event.description}
                </p>

                <div className="space-y-2 text-slate-500 mb-6">
                  <p>📅 {event.date}</p>
                  <p>📍 {event.venue}</p>
                  <p>🏅 Reward Score: {event.score}</p>
                </div>

                {/* CTA */}
                <div className="flex justify-between gap-4">
                  <button className="flex-1 bg-blue-600 text-white py-3 rounded-2xl font-bold hover:bg-blue-700 transition-all">
                    Register
                  </button>

                  <button className="flex-1 border border-slate-300 py-3 rounded-2xl font-medium hover:bg-slate-100 transition-all">
                    Details
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

export default Events;