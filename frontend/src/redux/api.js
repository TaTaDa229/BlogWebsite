import axios from "axios";
const devEnv = process.env.NODE_ENV !== "production";

const {REACT_APP_DEV_API, REACT_APP_PROD_API} = process.env

const api = axios.create({ baseURL: `${devEnv ? REACT_APP_DEV_API : REACT_APP_PROD_API}` });

api.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signIn = (formData) => api.post("/users/signin", formData);
export const signUp = (formData) => api.post("/users/signup", formData);
export const googleSignIn = (result) => api.post("/users/googleSignIn", result);

export const createBlog = (blogData) => api.post("/blog", blogData);
export const getBlogs = (page) => api.get(`/blog?page=${page}`);
export const getBlog = (id) => api.get(`/blog/${id}`);
export const getBlogsByUser = (userId) => api.get(`/blog/userBlogs/${userId}`);
export const getBlogsByTag = (tag) => api.get(`/blog/tag/${tag}`);
export const getRelatedBlogs = (tags) => api.post(`/blog/relatedBlogs`, tags);
export const getBlogsBySearch = (searchQuery) => api.get(`/blog/search?searchQuery=${searchQuery}`);

export const updateBlog = (updatedBlogData, id) =>
  api.patch(`/blog/${id}`, updatedBlogData);
export const likeBlog = (id) => api.patch(`/blog/like/${id}`)
export const deleteBlog = (id) => api.delete(`/blog/${id}`);
