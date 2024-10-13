import axios from 'axios';

const API_URL = 'https://api.example.com'; // Your backend API URL

export const fetchProfiles = () => axios.get(`${API_URL}/profiles`);

export const fetchProfileById = (id) => axios.get(`${API_URL}/profiles/${id}`);

export const createProfile = (data) => axios.post(`${API_URL}/profiles`, data);

export const updateProfile = (id, data) => axios.put(`${API_URL}/profiles/${id}`, data);

export const deleteProfile = (id) => axios.delete(`${API_URL}/profiles/${id}`);
