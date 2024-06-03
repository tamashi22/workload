import { request } from './request';
const AuthApi = {
  login: async (email, password) => {
    try {
      const response = await request.post('/auth/login', { email, password });
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error('Server error');
    }
  },
};

export default AuthApi;
