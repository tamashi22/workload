import { request } from '@/services/request';

const UsersApi = {
  findAllByCafedraId: async cafedraId => {
    const response = await request.get('/users', {
      params: { cafedraId },
    });
    return response.data;
  },

  create: async user => {
    const response = await request.post('/users', user);
    return response.data;
  },

  update: async (id, user) => {
    const response = await request.patch(`/users/${id}`, user);
    return response.data;
  },

  remove: async id => {
    const response = await request.delete(`/users/${id}`);
    return response.data;
  },
};

export default UsersApi;
