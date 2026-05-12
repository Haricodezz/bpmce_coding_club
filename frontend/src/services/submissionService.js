import axios from "axios";

const API_URL = "import.meta.env.VITE_API_URL/api/submissions";

export const submitProblem = async (submissionData) => {
  const response = await axios.post(
    API_URL,
    submissionData
  );

  return response.data;
};