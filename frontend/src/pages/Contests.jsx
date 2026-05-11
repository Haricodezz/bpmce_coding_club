import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getContests } from "../services/contestService";
import { registerContest } from "../services/contestParticipationService";

function Contests() {
  const [contests, setContests] = useState([]);

  const currentUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const data = await getContests();
        setContests(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContests();
  }, []);

  const handleContestRegister = async (contestId) => {
    try {
      const response = await registerContest({
        contest_id: contestId,
        user_id: currentUser.id,
      });

      alert(response.message);

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Contest registration failed"
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">
          Coding Contests
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {contests.map((contest) => (
            <div
              key={contest.id}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-2">
                {contest.title}
              </h2>

              <p className="mb-2">
                {contest.description}
              </p>

              <p className="mb-2">
                <strong>Start:</strong>{" "}
                {new Date(
                  contest.start_date
                ).toLocaleString()}
              </p>

              <p className="mb-4">
                <strong>End:</strong>{" "}
                {new Date(
                  contest.end_date
                ).toLocaleString()}
              </p>

              <button
                onClick={() =>
                  handleContestRegister(contest.id)
                }
                className="bg-green-600 text-white px-6 py-2 rounded-lg"
              >
                Register
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Contests;