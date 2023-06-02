import express from "express";
const router = express.Router();
import auth from "../middlewares/auth.js";
import {
  createBlog,
  deleteBlog,
  getBlog,
  getBlogs,
  getBlogsBySearch,
  getBlogsByTag,
  getBlogsByUser,
  getRelatedBlogs,
  likeBlog,
  updateBlog,
} from "../controllers/blog.js";

router.get("/search", getBlogsBySearch);
router.get("/tag/:tag", getBlogsByTag);
router.post("/relatedBlogs", getRelatedBlogs);
router.get("/", getBlogs);
router.get("/:id", getBlog);

router.post("/", auth, createBlog);

router.delete("/:id", auth, deleteBlog);

router.patch("/:id", auth, updateBlog);

router.get("/userBlogs/:id", auth, getBlogsByUser);
router.patch('/like/:id', auth, likeBlog)

export default router;