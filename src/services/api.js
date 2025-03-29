import axios from 'axios';

const BASE_URL = 'https://reqres.in/api';

const api = axios.create({
  baseURL: BASE_URL,
});

export const login = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'An error occurred during login' };
  }
};

export const getUsers = async (page = 1) => {
  try {
    const response = await api.get(`/users?page=${page}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'An error occurred while fetching users' };
  }
};

export const updateUser = async (id, userData) => {
  try {
    // Reqres API expects the data in a specific format
    const response = await api.put(`/users/${id}`, {
      name: `${userData.first_name} ${userData.last_name}`,
      job: 'Software Engineer', // Reqres API requires a job field
      ...userData
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'An error occurred while updating user' };
  }
};

export const deleteUser = async (id) => {
  try {
    // Reqres API will return 204 on successful deletion
    const response = await api.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    // Even though Reqres API doesn't actually delete the user,
    // we'll treat it as successful if we get a 204 response
    if (error.response?.status === 204) {
      return { success: true };
    }
    throw error.response?.data || { error: 'An error occurred while deleting user' };
  }
};

export default api; 