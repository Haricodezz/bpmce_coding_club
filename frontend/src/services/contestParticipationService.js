import axios from "axios";

const API_URL =
  "import.meta.env.VITE_API_URL/api/contest-participation";

export const registerContest = async (data) => {
  const response = await axios.post(
    `${API_URL}/register`,
    data
  );

  return response.data;
};

export const updateContestScore = async (data) => {
  const response = await axios.post(
    `${API_URL}/score`,
    data
  );

  return response.data;
};