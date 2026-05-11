function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12 py-8 px-8">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-2">
            College Coding Club
          </h2>

          <p className="text-gray-400">
            Learn, build, compete, and grow with
            coding excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/practice">Practice</a></li>
            <li><a href="/contests">Contests</a></li>
            <li><a href="/leaderboard">Leaderboard</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Contact
          </h3>

          <p className="text-gray-400">
            codingclub@college.edu
          </p>

          <p className="text-gray-400">
            College Campus
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
        © 2026 College Coding Club. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;