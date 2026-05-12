import axios from "axios";

const API_URL = "import.meta.env.VITE_API_URL/api/profile";

export const getProfile = async (userId) => {
  const response = await axios.get(`${API_URL}/${userId}`);
  return response.data;
};

export const updateProfile = async (userId, profileData) => {
  const response = await axios.put(
    `${API_URL}/${userId}`,
    profileData
  );

  return response.data;
};