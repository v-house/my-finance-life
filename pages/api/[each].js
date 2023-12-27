import { blogPosts } from "../../data/blogPosts";

export default (req, res) => {
  const { each } = req.query;
  const post = blogPosts.find((post) => post.slug === each);

  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).json({ error: "Post not found" });
  }
};
