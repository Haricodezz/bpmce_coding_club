import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getProblems } from "../services/problemService";
import { submitProblem } from "../services/submissionService";
function Practice() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const data = await getProblems();
        setProblems(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProblems();
  }, []);
const currentUser = JSON.parse(localStorage.getItem("user"));

const handleSolve = async (problemId) => {
  try {
    const response = await submitProblem({
      user_id: currentUser.id,
      problem_id: problemId,
    });

    alert(
      `${response.message} (+${response.pointsEarned} points)`
    );

  } catch (error) {
    alert(
      error.response?.data?.message ||
      "Submission failed"
    );
  }
};


  return (
    <>
      <Navbar />

      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">
          Practice Problems
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.id}
              className="bg-white shadow-lg rounded-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-2">
                {problem.title}
              </h2>

              <p className="mb-2">
                {problem.description}
              </p>

              <p className="mb-2">
                <strong>Difficulty:</strong>{" "}
                {problem.difficulty}
              </p>

              <p className="mb-2">
                <strong>Category:</strong>{" "}
                {problem.category}
              </p>

              <p className="mb-4">
                <strong>Points:</strong>{" "}
                {problem.points}
              </p>

              <a
                href={problem.link}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block"
              >
                Solve Problem
              </a>
              <button
  onClick={() => handleSolve(problem.id)}
  className="ml-4 bg-green-600 text-white px-4 py-2 rounded-lg"
>
  Mark as Solved
</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Practice;