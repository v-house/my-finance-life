import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const { tag } = req.body;

  if (!tag) {
    res.status(400).json({ message: "Tag is required" });
    return;
  }

  const client = await clientPromise;
  const db = client.db("financehelp");

  if (req.method === "GET") {
    try {
      const blogPosts = await db
        .collection("blogs")
        .find({ tag: tag })
        .toArray();

      if (!blogPosts || blogPosts.length === 0) {
        res
          .status(404)
          .json({ message: "No blog posts found with the given tag" });
        return;
      }

      res.status(200).json(blogPosts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else if (req.method === "POST") {
    const { name, text, date, tag } = req.body;

    if (!name || !text || !date) {
      res.status(400).json({ message: "Name, text, and date are required" });
      return;
    }

    try {
      const result = await db.collection("blogs").insertOne({
        name: name,
        body: text,
        date: date,
        tag: tag,
      });

      if (result.insertedCount === 1) {
        res.status(201).json({ message: "Blog post added successfully" });
      } else {
        res.status(500).json({ message: "Failed to add blog post" });
      }
    } catch (error) {
      console.error("Error adding blog post:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
