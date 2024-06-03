// src/services/RupApi.js
import { request } from './request';

const RupApi = {
  create: async data => {
    const response = await request.post('/rup', data);
    return response.data;
  },
  createMany: async data => {
    const response = await request.post('/rup/many', data);
    return response.data;
  },
  findAll: async (educationYearId, cafedraId) => {
    const response = await request.get('/rup', {
      params: { educationYearId, cafedraId },
    });
    return response.data;
  },
  findOne: async id => {
    const response = await request.get(`/rup/${id}`);
    return response.data;
  },
  update: async (id, data) => {
    const response = await request.patch(`/rup/${id}`, data);
    return response.data;
  },
  remove: async id => {
    const response = await request.delete(`/rup/${id}`);
    return response.data;
  },
  upsert: async data => {
    const response = await request.post('/rup/upsert', data);
    return response.data;
  },
};

export default RupApi;
