import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const { projectId } = req.query;

  // Check if projectId is a valid ObjectId
  if (!ObjectId.isValid(projectId)) {
    res.status(400).json({ message: "Invalid projectId" });
    return;
  }

  try {
    const client = await clientPromise;
    const db = client.db("financehelp");

    const comments = await db
      .collection("comments")
      .find({ projectId: ObjectId(projectId) })
      .toArray();

    res.status(200).json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}