// pages/api/blogPosts.js

import { blogPosts } from "../../data/blogPosts";

export default (req, res) => {
  res.status(200).json(blogPosts);
};
