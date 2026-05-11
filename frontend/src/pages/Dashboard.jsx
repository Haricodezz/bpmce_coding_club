import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getDashboardData } from "../services/dashboardService";

function Dashboard() {
  const currentUser = JSON.parse(localStorage.getItem("user"));

  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const data = await getDashboardData(
          currentUser.id
        );

        setDashboardData(data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchDashboard();
  }, [currentUser.id]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/login";
  };

  if (!dashboardData) {
    return <div>Loading dashboard...</div>;
  }

  const profile = dashboardData.profile;

  return (
    <>
      <Navbar />

      <div className="p-8 bg-gray-100 min-h-screen">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Welcome, {profile.name}
          </h1>

          <p className="text-gray-600">
            Department: {profile.department} | Year:{" "}
            {profile.year}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">
              Total Score
            </h2>
            <p className="text-3xl mt-2">
              {Math.round(profile.total_score || 0)}
            </p>
          </div>

          <div className="bg-green-600 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">
              Contest Score
            </h2>
            <p className="text-3xl mt-2">
              {profile.contest_score || 0}
            </p>
          </div>

          <div className="bg-purple-600 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">
              Platform Score
            </h2>
            <p className="text-3xl mt-2">
              {profile.platform_score || 0}
            </p>
          </div>

          <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">
              Event Score
            </h2>
            <p className="text-3xl mt-2">
              {profile.event_score || 0}
            </p>
          </div>

          <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">
              Problems Solved
            </h2>
            <p className="text-3xl mt-2">
              {dashboardData.solvedProblems}
            </p>
          </div>

          <div className="bg-indigo-600 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">
              Contests Joined
            </h2>
            <p className="text-3xl mt-2">
              {dashboardData.contestsParticipated}
            </p>
          </div>
        </div>

        {/* Quick Access */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-bold mb-6">
            Quick Access
          </h2>

          <div className="grid md:grid-cols-4 gap-4">
            <a
              href="/practice"
              className="bg-blue-500 text-white p-4 rounded-lg text-center"
            >
              Practice Problems
            </a>

            <a
              href="/contests"
              className="bg-green-500 text-white p-4 rounded-lg text-center"
            >
              Coding Contests
            </a>

            <a
              href="/leaderboard"
              className="bg-purple-500 text-white p-4 rounded-lg text-center"
            >
              Leaderboard
            </a>

            <a
              href="/resources"
              className="bg-orange-500 text-white p-4 rounded-lg text-center"
            >
              Resources
            </a>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-6 py-3 rounded-lg"
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default Dashboard;