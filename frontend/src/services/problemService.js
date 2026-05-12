import axios from "axios";

const API_URL = "import.meta.env.VITE_API_URL/api/problems";

export const getProblems = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createProblem = async (problemData) => {
  const response = await axios.post(API_URL, problemData);
  return response.data;
};