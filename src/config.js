const API_BASE_URL = 'http://localhost:5000/api';

// Thêm export default cho config
const config = {
  apiBaseUrl: API_BASE_URL.replace(/\/api$/, ''), // Lấy domain gốc, không có /api
};
export default config;

// Export BASE_URL for compatibility
export const BASE_URL = API_BASE_URL;

// Cấu hình sử dụng mock API khi backend không hoạt động
export const USE_MOCK_API = false; // Đặt false khi backend đã sẵn sàng

export const API_ENDPOINTS = {
  users: {
    getAll: `${API_BASE_URL}/users`,
    getById: (id) => `${API_BASE_URL}/users/${id}`,
    create: `${API_BASE_URL}/users`,
    update: (id) => `${API_BASE_URL}/users/${id}`,
    delete: (id) => `${API_BASE_URL}/users/${id}`,
    register: `${API_BASE_URL}/users/register`,
    login: `${API_BASE_URL}/users/login`,
  },
  services: {
    getAll: `${API_BASE_URL}/services`,
    getById: (id) => `${API_BASE_URL}/services/${id}`,
    create: `${API_BASE_URL}/services`,
    update: (id) => `${API_BASE_URL}/services/${id}`,
    delete: (id) => `${API_BASE_URL}/services/${id}`,
  },
  bookings: {
    getAll: `${API_BASE_URL}/bookings`,
    getById: (id) => `${API_BASE_URL}/bookings/${id}`,
    create: `${API_BASE_URL}/bookings`,
    update: (id) => `${API_BASE_URL}/bookings/${id}`,
    delete: (id) => `${API_BASE_URL}/bookings/${id}`,
  },
};