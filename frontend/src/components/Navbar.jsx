import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));

  const navLinks = [
    ["Dashboard", "/dashboard"],
    ["Practice", "/practice"],
    ["Contests", "/contests"],
    ["Leaderboard", "/leaderboard"],
    ["Resources", "/resources"],
    ["Events", "/events"],
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  const NavItem = ({ name, path }) => (
    <Link
      to={path}
      className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        location.pathname === path
          ? "bg-white text-black shadow-sm"
          : "text-slate-600 hover:text-black hover:bg-slate-100"
      }`}
      onClick={() => setMobileOpen(false)}
    >
      {name}
    </Link>
  );

  return (
    <header className="w-full flex justify-center px-4 py-5 sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200">
      <div className="w-full max-w-7xl bg-white rounded-3xl border border-slate-200 shadow-sm px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="w-12 h-12 rounded-2xl border-2 border-black flex items-center justify-center font-bold text-xl">
            ⬢
          </div>
          <div>
            <h1 className="text-3xl font-bold text-black tracking-tight">
              codingclub
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center bg-slate-50 border border-slate-200 rounded-full px-3 py-2 gap-2">
          {navLinks.map(([name, path]) => (
            <NavItem key={name} name={name} path={path} />
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
          {user ? (
            <>
              <Link
                to="/profile"
                className="text-slate-700 font-medium hover:text-black"
              >
                {user.name?.split(" ")[0]}
              </Link>

              {user.role === "admin" && (
                <Link
                  to="/admin"
                  className="px-5 py-2 rounded-full border border-purple-500 text-purple-600 hover:bg-purple-600 hover:text-white transition"
                >
                  Admin
                </Link>
              )}

              <button
                onClick={handleLogout}
                className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all"
              >
                Logout
                <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-lg">
                  →
                </span>
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-slate-700 font-medium hover:text-black"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all"
              >
                Get started
                <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-lg">
                  →
                </span>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl text-black"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full px-4 mt-3 lg:hidden">
          <div className="max-w-7xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl p-6 space-y-4">
            <div className="flex flex-col gap-3">
              {navLinks.map(([name, path]) => (
                <NavItem key={name} name={name} path={path} />
              ))}
            </div>

            <div className="border-t border-slate-200 pt-4 flex flex-col gap-3">
              {user ? (
                <>
                  <Link
                    to="/profile"
                    className="text-slate-700 font-medium"
                  >
                    Profile
                  </Link>

                  {user.role === "admin" && (
                    <Link
                      to="/admin"
                      className="px-4 py-2 rounded-full border border-purple-500 text-purple-600 text-center"
                    >
                      Admin Panel
                    </Link>
                  )}

                  <button
                    onClick={handleLogout}
                    className="flex justify-center items-center gap-3 bg-black text-white px-6 py-3 rounded-full font-semibold"
                  >
                    Logout
                    <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-lg">
                      →
                    </span>
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-slate-700 font-medium"
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    className="flex justify-center items-center gap-3 bg-black text-white px-6 py-3 rounded-full font-semibold"
                  >
                    Get started
                    <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-lg">
                      →
                    </span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
