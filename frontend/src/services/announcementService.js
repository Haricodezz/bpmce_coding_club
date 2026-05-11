import axios from "axios";

const API_URL = "http://localhost:5000/api/announcements";

export const getAnnouncements = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createAnnouncement = async (data) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};