import { useRouter } from "next/router";
import { blogPosts } from "../../data/blogPosts";
import Article from "./Article";
import { useEffect, useState } from "react";
import axios from "axios";
import { getSession, signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

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

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [name, setName] = useState(false);
  const [emailu, setEmailu] = useState("");
  const [isrc, setIsrc] = useState("");
  const [commentor, setCommentor] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({
    name: "",
    body: "",
  });
  const [loadingComments, setLoadingComments] = useState(true);
  const [loadingyou, setLoadingyou] = useState(false);
  const blogPost = blogPosts.find((post) => post.slug === slug);

  useEffect(() => {
    console.log("Slug is ", slug);
    const fetchData = async () => {
      try {
        setLoadingComments(true);
        const response = await fetch(`/api/comments/${slug}`);
        const data = await response.json();
        console.log(data);
        if (Array.isArray(data)) {
          setComments(data);
        } else {
        }
      } catch (error) {
      } finally {
        setLoadingComments(false);
      }
    };
    fetchData();

    const fetchUserName = async () => {
      const session = await getSession();
      if (session?.user?.name) {
        setName(true);
        setCommentor(session.user.name);
      }
      if (session?.user?.email) {
        setEmailu(session.user.email);
      }
      if (session?.user?.image) {
        setName(true);
        setIsrc(session.user.image);
      }
    };
    fetchUserName();
  }, [slug]);

  const handleCommentSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoadingyou(true);
    const today = new Date();
    const comment = {
      name: commentor,
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
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/comments/${slug}`);
          const data = await response.json();
          console.log(data);
          if (Array.isArray(data)) {
            setComments(data);
          } else {
          }
        } catch (error) {
        } finally {
          setLoadingComments(false);
        }
      };
      fetchData();
      setLoadingyou(false);
    } catch (e) {
      console.log("Axios Error: ", e);
    }
  };

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

    const formattedTime = new Date(commentTime).toLocaleString(
      "en-IN",
      options
    );
    return formattedTime;
  }

  function handleReload(): void {
    router.reload();
  }

  return (
    <div className="bg-blue-100 py-4 lg:py-12">
      <div className="mx-auto px-4">
        <div className="bg-white rounded-lg pb-4">
          <Article blogPost={blogPost} />
          <div className="mx-4 py-6 px-4 bg-gradient-to-r from-purple-700 to-blue-900 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-4">Comments:</h2>
            {loadingComments ? (
              <p className="text-gray-300 my-4">Loading comments...</p>
            ) : comments.length === 0 ? (
              <>
                <p className="text-gray-300">
                  No comments yet. Reload to fetch latest comments.
                </p>
                <button
                  onClick={handleReload}
                  className="text-white underline mb-4"
                >
                  Reload Page
                </button>
              </>
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

            {name ? (
              <form
                onSubmit={handleCommentSubmit}
                className="bg-gradient-to-r from-purple-400 to-purple-500 p-6 rounded-md shadow-md"
              >
                <div className="text-2xl font-bold text-white mb-4">
                  Write a Comment
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center mb-4">
                    <img
                      src={isrc}
                      alt="Your profile image"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div className="font-semibold line-clamp-2">
                      Logged In as {emailu}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      value={commentor}
                      disabled
                      required
                      placeholder="Your Name"
                      className="p-2 rounded-md mb-2"
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
                </div>
                <button
                  type="submit"
                  className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                  disabled={loadingyou}
                >
                  {loadingComments ? "Posting..." : "Post"}
                </button>
              </form>
            ) : (
              <div className="text-white">
                Sign in to comment
                <button
                  onClick={() => signIn("google")}
                  className="mt-4 px-6 py-2 bg-sky-100 text-blue-500 rounded-md flex items-center"
                >
                  <FcGoogle />
                  <div className="ml-2">Sign in</div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
