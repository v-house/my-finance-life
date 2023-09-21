import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const { blogPostId } = req.query;

  if (!ObjectId.isValid(blogPostId)) {
    res.status(400).json({ message: "Invalid projectId" });
    return;
  }

  try {
    const client = await clientPromise;
    const db = client.db("financehelp");

    const comments = await db
      .collection("blogs")
      .find({ _id: ObjectId(blogPostId) })
      .toArray();

    res.status(200).json(comments[0]);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
