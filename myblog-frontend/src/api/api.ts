import axios from 'axios';

const baseUrl = 'http://localhost:4000/api';

const token = localStorage.getItem("token");
const config = {
  headers: { Authorization: `Bearer ${token}` }
};

export const loginApi = (user: UserState): Promise<any> => {
  return axios.post(`${baseUrl}/user/login`, user);
}

export const addPostApi = (post: Post): Promise<any> => {
  return axios.post(`${baseUrl}/post/add`, post, config );
}

export const getPostsApi = (): Promise<Post[]> => {
  return axios.get(`${baseUrl}/post/all`, config);
}

export const getPostDetailsApi = (id: string): Promise<Post> => {
  return axios.get(`${baseUrl}/post/:id`, config);
}