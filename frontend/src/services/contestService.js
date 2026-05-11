import axios from "axios";

const API_URL = "http://localhost:5000/api/contests";

export const getContests = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createContest = async (contestData) => {
  const response = await axios.post(
    API_URL,
    contestData
  );

  return response.data;
};