import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const { blogPostId } = req.query;

  if (!ObjectId.isValid(blogPostId)) {
    res.status(400).json({ message: "Invalid blogPostId" });
    return;
  }

  if (req.method === "GET") {
    try {
      const client = await clientPromise;
      const db = client.db("financehelp");

      const blogPost = await db
        .collection("blogs")
        .findOne({ _id: ObjectId(blogPostId) });

      if (!blogPost) {
        res.status(404).json({ message: "Blog post not found" });
        return;
      }

      res.status(200).json(blogPost);
    } catch (error) {
      console.error("Error fetching blog post:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else if (req.method === "POST") {
    const { name, date, comment } = req.body;

    if (!name || !date || !comment) {
      res.status(400).json({ message: "Name, date, and comment are required" });
      return;
    }

    try {
      const client = await clientPromise;
      const db = client.db("financehelp");

      // Update the existing blog post document by appending the new comment
      const result = await db.collection("blogs").updateOne(
        { _id: ObjectId(blogPostId) },
        {
          $push: {
            comments: {
              name,
              date,
              comment,
            },
          },
        }
      );

      if (result.matchedCount === 1 && result.modifiedCount === 1) {
        res.status(201).json({ message: "Comment posted successfully" });
      } else {
        res.status(500).json({ message: "Failed to post comment" });
      }
    } catch (error) {
      console.error("Error posting comment:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
