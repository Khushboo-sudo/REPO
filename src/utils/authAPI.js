import axios from 'axios';  

const API_URL = 'https://dummyjson.com/auth';  

export const authenticateUser = async (credentials) => {  
  try {  
    const response = await axios.post(`${API_URL}/login`, credentials);  
    localStorage.setItem('token', response.data.token);  
    return response.data.token;  
  } catch (error) {  
    console.error('Authentication failed:', error);  
    throw error.response.data;  
  }  
};