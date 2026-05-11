import axios from "axios";

const API_URL = "http://localhost:5000/api/resources";

export const getResources = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createResource = async (resourceData) => {
  const response = await axios.post(API_URL, resourceData);
  return response.data;
};