import { configureStore } from "@reduxjs/toolkit";
import AuthReduce from "./features/authSlice";
import BlogReduce from "./features/blogSlice";

export default configureStore({
  reducer: {
    auth: AuthReduce,
    blog: BlogReduce,
  },
});
