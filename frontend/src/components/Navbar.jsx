import { Link } from "react-router-dom";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center shadow-lg">
      {/* Logo */}
      <h1 className="text-2xl font-bold">
        Coding Club
      </h1>

      {/* Navigation */}
      <div className="flex items-center space-x-6">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/practice">Practice</Link>
        <Link to="/contests">Contests</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/events">Events</Link>
        <Link to="/announcements">Announcements</Link>

        {user ? (
          <>
            <Link to="/profile">
              Profile
            </Link>

            {user.role === "admin" && (
              <Link
                to="/admin"
                className="bg-blue-600 px-4 py-2 rounded-lg"
              >
                Admin
              </Link>
            )}
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>

            <Link
              to="/register"
              className="bg-green-600 px-4 py-2 rounded-lg"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;