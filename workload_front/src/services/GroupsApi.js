import axios from 'axios';

const BASE_URL = 'http://localhost:8080'; // Your base URL

const GroupsApi = {
  findAll: async educationYearId => {
    const response = await axios.get(`${BASE_URL}/group`, {
      params: { educationYearId },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`, // If authorization is required
      },
    });
    return response.data;
  },

  createMany: async groups => {
    const response = await axios.post(
      `${BASE_URL}/group/many`,
      { groups },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`, // If authorization is required
        },
      },
    );
    return response.data;
  },

  deleteByYear: async educationYearId => {
    const response = await axios.delete(
      `${BASE_URL}/group/byYear/${educationYearId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`, // If authorization is required
        },
      },
    );
    return response.data;
  },
};

export default GroupsApi;
