import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-purple-700 text-white py-24 px-8 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to College Coding Club
        </h1>

        <p className="text-xl max-w-3xl mx-auto mb-8">
          Learn coding, practice DSA, compete in
          contests, attend events, and build your
          future with one unified platform.
        </p>

        <div className="space-x-4">
          <a
            href="/register"
            className="bg-white text-blue-700 px-8 py-3 rounded-lg font-bold"
          >
            Join Now
          </a>

          <a
            href="/leaderboard"
            className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold"
          >
            View Leaderboard
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">
          Platform Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Practice Platform
            </h3>

            <p>
              Solve curated DSA, CP, and interview
              questions while improving your rank.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Coding Contests
            </h3>

            <p>
              Participate in internal competitions
              with major leaderboard rewards.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Resource Hub
            </h3>

            <p>
              Access DSA sheets, development
              resources, placement prep, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Our Mission
        </h2>

        <p className="max-w-4xl mx-auto text-lg text-gray-700">
          To build a thriving coding culture by
          empowering students through competitions,
          learning resources, collaboration, and
          real-world development opportunities.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Start Your Coding Journey?
        </h2>

        <a
          href="/register"
          className="bg-white text-blue-700 px-8 py-3 rounded-lg font-bold"
        >
          Become a Member
        </a>
      </section>

      <Footer />
    </>
  );
}

export default Home;