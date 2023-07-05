import ky from 'ky';

export const apiClient = ky.create({
  timeout: 10 * 1000,
  prefixUrl: 'https://api.uoslife.com',
});
