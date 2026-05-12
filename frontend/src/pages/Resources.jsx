import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { getResources } from "../services/resourceService";

function Resources() {
  const [resources, setResources] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const data = await getResources();

        // FUTURE BACKEND:
        // Replace dummy fallback once DB fully populated
        if (data && data.length > 0) {
          setResources(data);
        } else {
          setResources([
            {
              id: 1,
              title: "HTML & CSS Basics",
              description:
                "Beginner-friendly web development roadmap with docs and video tutorials.",
              category: "Beginner",
              students: 145,
              lessons: 12,
              progress: 43,
              icon: "🌐",
              color: "bg-red-100",
              link: "https://developer.mozilla.org/",
            },
            {
              id: 2,
              title: "JavaScript Essentials",
              description:
                "Master JavaScript fundamentals, DOM, ES6, and modern web concepts.",
              category: "Beginner",
              students: 128,
              lessons: 18,
              progress: 48,
              icon: "⚡",
              color: "bg-yellow-100",
              link: "https://javascript.info/",
            },
            {
              id: 3,
              title: "Python Programming",
              description:
                "Learn Python for coding interviews, automation, and backend development.",
              category: "Beginner",
              students: 112,
              lessons: 20,
              progress: 70,
              icon: "🐍",
              color: "bg-green-100",
              link: "https://python.org/",
            },
            {
              id: 4,
              title: "Data Structures & Algorithms",
              description:
                "Advanced DSA sheet for placements, CP, and coding mastery.",
              category: "Intermediate",
              students: 87,
              lessons: 30,
              progress: 75,
              icon: "🧠",
              color: "bg-blue-100",
              link: "https://cp-algorithms.com/",
            },
            {
              id: 5,
              title: "React Development",
              description:
                "Build production-grade frontend applications using React ecosystem.",
              category: "Intermediate",
              students: 64,
              lessons: 22,
              progress: 62,
              icon: "⚛️",
              color: "bg-purple-100",
              link: "https://react.dev/",
            },
            {
              id: 6,
              title: "Machine Learning",
              description:
                "Explore AI, ML, supervised learning, model building, and deployment.",
              category: "Advanced",
              students: 43,
              lessons: 25,
              progress: 71,
              icon: "🤖",
              color: "bg-indigo-100",
              link: "https://scikit-learn.org/",
            },
          ]);
        }
      } catch (error) {
        console.error("Failed to fetch resources:", error);
      }
    };

    fetchResources();
  }, []);

  const filters = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredResources =
    activeFilter === "All"
      ? resources
      : resources.filter(
          (resource) => resource.category === activeFilter
        );

  const badgeColors = {
    Beginner: "bg-green-100 text-green-700",
    Intermediate: "bg-yellow-100 text-yellow-700",
    Advanced: "bg-red-100 text-red-700",
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="pt-28 px-4 lg:px-8 pb-16 max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-3xl shadow-md p-6 flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900">
              Learning Resources
            </h1>

            <p className="text-slate-500 mt-2">
              Structured growth roadmap for BPMCE Coding Club students
            </p>
          </div>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="text-slate-600 font-medium">
              Resource Hub
            </span>

            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
              RH
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

        {/* Resource Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredResources.map((resource, idx) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
              className="bg-white rounded-3xl shadow-md overflow-hidden border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all"
            >
              {/* Banner */}
              <div
                className={`${
                  resource.color || "bg-slate-200"
                } h-36 flex items-center justify-center text-6xl`}
              >
                {resource.icon || "📘"}
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span
                    className={`px-4 py-1 rounded-full text-sm font-semibold ${
                      badgeColors[resource.category] ||
                      "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {resource.category}
                  </span>

                  <span className="text-slate-500 text-sm">
                    {resource.students || 0} students
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  {resource.title}
                </h2>

                <p className="text-slate-600 mb-3 line-clamp-3">
                  {resource.description}
                </p>

                <p className="text-slate-500 mb-4">
                  {resource.lessons || 0} lessons
                </p>

                {/* Progress */}
                <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden mb-6">
                  <div
                    className="h-full bg-blue-600 rounded-full"
                    style={{
                      width: `${resource.progress || 50}%`,
                    }}
                  ></div>
                </div>

                {/* CTA */}
                <div className="flex justify-between gap-4">
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center bg-blue-600 text-white py-3 rounded-2xl font-bold hover:bg-blue-700 transition-all"
                  >
                    Start Learning
                  </a>

                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center border border-slate-300 py-3 rounded-2xl font-medium hover:bg-slate-100 transition-all"
                  >
                    Preview
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resources;