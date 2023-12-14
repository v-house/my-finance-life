import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { blog } = req.query;
    console.log("Query to", blog);
    try {
      const client = await clientPromise;
      const db = client.db("financehelp");

      const comments = await db
        .collection("blogs")
        .find({ tag: blog })
        .toArray();
      // console.log(comments);
      res.status(200).json(comments);
    } catch (e) {
      res.status(200).json({});
      // res.status(500).json({ message: "Internal server error" });
      // console.log(e);
    }
  }

  if (req.method === "POST") {
    const comment = req.body;

    try {
      const client = await clientPromise;
      const db = client.db("financehelp");

      const result = await db.collection("blogs").insertOne(comment);
      if (result.acknowledged) {
        return res
          .status(201)
          .json({ message: "Comment created successfully" });
      } else {
        return res.status(500).json({ message: "Failed to create comment" });
      }
    } catch (error) {
      console.error("Error creating comment:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}

// import { ObjectId } from "mongodb";
// import clientPromise from "../../../lib/mongodb";

// export default async function handler(req, res) {
//   if (req.method !== "GET") {
//     res.status(405).json({ message: "Method Not Allowed" });
//     return;
//   }

//   const { projectId } = req.query;

//   // Check if projectId is a valid ObjectId
//   if (!ObjectId.isValid(projectId)) {
//     res.status(400).json({ message: "Invalid projectId" });
//     return;
//   }

//   try {
//     const client = await clientPromise;
//     const db = client.db("financehelp");

//     const comments = await db
//       .collection("comments")
//       .find({ projectId: ObjectId(projectId) })
//       .toArray();

//     res.status(200).json(comments);
//   } catch (error) {
//     console.error("Error fetching comments:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// }
