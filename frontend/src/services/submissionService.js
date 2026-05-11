import axios from "axios";

const API_URL = "http://localhost:5000/api/submissions";

export const submitProblem = async (submissionData) => {
  const response = await axios.post(
    API_URL,
    submissionData
  );

  return response.data;
};