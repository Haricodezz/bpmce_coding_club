import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getLeaderboard } from "../services/scoreService";

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const data = await getLeaderboard();
        setLeaders(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <>
      <Navbar />

      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">
          Leaderboard
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-lg rounded-lg">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4">Rank</th>
                <th className="p-4">Name</th>
                <th className="p-4">Total Score</th>
                <th className="p-4">Contest</th>
                <th className="p-4">Platform</th>
                <th className="p-4">LeetCode</th>
                <th className="p-4">Events</th>
              </tr>
            </thead>

            <tbody>
              {leaders.map((user, index) => {
                const leetcodeScore =
                  (user.leetcode_easy * 2) +
                  (user.leetcode_medium * 5) +
                  (user.leetcode_hard * 10);

                return (
                  <tr
                    key={user.user_id}
                    className="text-center border-b"
                  >
                    <td className="p-4 font-bold">
                      #{index + 1}
                    </td>

                    <td className="p-4">
                      {user.name}
                    </td>

                    <td className="p-4 font-bold text-blue-600">
                      {Math.round(user.total_score)}
                    </td>

                    <td className="p-4">
                      {user.contest_score}
                    </td>

                    <td className="p-4">
                      {user.platform_score}
                    </td>

                    <td className="p-4">
                      {leetcodeScore}
                    </td>

                    <td className="p-4">
                      {user.event_score}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Leaderboard;