import { useRouter } from "next/router";
import { blogPosts } from "../../data/blogPosts";
import Article from "./Article";
import { useEffect, useState } from "react";
import axios from "axios";

// Define the interface for a comment
interface Comment {
  _id: {
    $oid: string;
  };
  tag: string;
  name: string;
  body: string;
  time: string;
}

function formatCommentTime(commentTime: string): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "Asia/Kolkata",
  };

  const formattedTime = new Date(commentTime).toLocaleString("en-IN", options);
  return formattedTime;
}

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [comments, setComments] = useState<Comment[]>([
    {
      _id: { $oid: "1" },
      tag: "1",
      name: "Finanzy",
      body: "Comment Section is still under testing procedure.",
      time: "December 11, 2023 - 20:22 IST",
    },
  ]);
  const [newComment, setNewComment] = useState({
    name: "",
    body: "",
  });
  const blogPost = blogPosts.find((post) => post.slug === slug);
  const fetchData = async () => {
    try {
      const response = await fetch(`/api/comments/${slug}`);
      const data = await response.json();
      console.log(data);
      if (Array.isArray(data)) {
        setComments(data);
      } else {
      }
    } catch (error) {}
  };
  useEffect(() => {
    console.log("Slug is ", slug);

    fetchData();
  }, [slug]);

  const handleCommentSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const today = new Date();
    const comment = {
      name: newComment.name,
      body: newComment.body,
      time: formatCommentTime(today.toUTCString()),
      tag: slug,
    };
    try {
      console.log(comment);
      const response = await axios.post(`/api/comments/${slug}`, comment);
      setNewComment({
        name: "",
        body: "",
      });
      fetchData();
    } catch (e) {
      console.log("Axios Error: ", e);
    }
  };

  return (
    <div className="bg-blue-100 py-4 lg:py-12">
      <div className="mx-auto px-4">
        <div className="bg-white rounded-lg pb-4">
          <Article blogPost={blogPost} />
          <div className="mx-4 py-6 px-4 bg-gradient-to-r from-purple-700 to-blue-900 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-4">Comments:</h2>

            {comments.length === 0 ? (
              <p className="text-gray-300 my-4">No comments yet.</p>
            ) : (
              comments.map((comment, index) => (
                <div
                  key={index}
                  className="flex flex-col p-4 my-4 rounded-lg border border-white"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col items-start">
                      <p className="text-gray-300 font-semibold text-xs uppercase">
                        {comment.time}
                      </p>
                      <div className="flex items-wrap">
                        <p className="text-white font-semibold mr-4">
                          {comment.name}
                        </p>
                      </div>
                      <p className="text-gray-300">{comment.body}</p>
                    </div>
                  </div>
                </div>
              ))
            )}

            <form onSubmit={handleCommentSubmit} className="">
              <div className="text-xl font-bold text-white mb-4">
                Write a Comment
              </div>
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={newComment.name}
                  onChange={(e) =>
                    setNewComment({ ...newComment, name: e.target.value })
                  }
                  maxLength={30}
                  minLength={7}
                  required
                  className="p-2 border border-white rounded-md focus:outline-none focus:border-blue-300"
                />
                <textarea
                  placeholder="Your Comment"
                  value={newComment.body}
                  onChange={(e) =>
                    setNewComment({ ...newComment, body: e.target.value })
                  }
                  minLength={1}
                  maxLength={1000}
                  required
                  rows={4}
                  className="p-2 border border-white rounded-md focus:outline-none focus:border-blue-300"
                />
              </div>
              <button
                type="submit"
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
