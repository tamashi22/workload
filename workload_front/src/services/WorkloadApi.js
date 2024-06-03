import { request } from './request';

const WorkloadApi = {
  findAll: async (educationYearId, cafedraId) => {
    const response = await request.get('/workload', {
      params: { educationYearId, cafedraId },
    });
    return response.data;
  },

  create: async workloadData => {
    const response = await request.post('/workload', workloadData);
    return response.data;
  },

  update: async (id, workloadData) => {
    const response = await request.patch(`/workload/${id}`, workloadData);
    return response.data;
  },

  delete: async id => {
    const response = await request.delete(`/workload/${id}`);
    return response.data;
  },
};

export default WorkloadApi;
