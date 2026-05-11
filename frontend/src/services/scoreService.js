import axios from "axios";

const API_URL = "http://localhost:5000/api/scores";

export const getLeaderboard = async () => {
  const response = await axios.get(`${API_URL}/leaderboard`);
  return response.data;
};

export const updateScore = async (scoreData) => {
  const response = await axios.post(
    `${API_URL}/update`,
    scoreData
  );

  return response.data;
};