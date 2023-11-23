import axios from 'axios';
import cookies from 'js-cookie';

const token = cookies.get('__AUTH');
axios.defaults.headers.common['Authorization'] = token;
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '',
});
