import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { blogPosts } from "../../data/blogPosts";

// Interface for a comment
interface Comment {
  name: string;
  date: string;
  comment: string;
}

// Interface for the API response
interface ApiResponse {
  _id: string;
  comments: Comment[];
}

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  const blogPost = blogPosts.find((post) => post.slug === slug);

  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);

  const [newComment, setNewComment] = useState<Comment>({
    name: "",
    date: "",
    comment: "",
  });

  useEffect(() => {
    const fetchComments = async (blogPostId: string) => {
      try {
        const response = await axios.get<ApiResponse>(
          `/api/comments?blogPostId=${blogPostId}`
        );
        setApiResponse(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    if (blogPost) {
      fetchComments(blogPost.id);
    }
  }, [blogPost]);

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  const comments = apiResponse?.comments || [];

  const handleCommentChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewComment((prevComment) => ({
      ...prevComment,
      [name]: value,
      date: new Date().toLocaleDateString(),
    }));
  };

  const handleCommentSubmit = async () => {
    const postt_comment = {
      blogPostId: slug,
      comment: newComment.comment,
      name: newComment.name,
      date: newComment.date,
    };
    try {
      // Send the new comment to your server for processing and storage
      const response = await axios.post(`/api/comments`, postt_comment);

      setNewComment({ name: "", date: "", comment: "" });
      console.log(response);
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <div className="bg-blue-100 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4 lg:flex">
            <div className="lg:w-2/3">
              <div className="mb-4 flex flex-wrap gap-2">
                {blogPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl font-extrabold text-blue-900 mb-6">
                {blogPost.title}
              </h1>
              <blockquote className="text-xl text-gray-700 font-medium italic mb-6">
                "{blogPost.subTitle}"
              </blockquote>
              <div className="text-gray-600 text-lg mb-4 flex flex-col md:flex-row md:justify-between md:items-center bg-blue-200 rounded-lg shadow-md py-1">
                <div className="flex items-center m-2">
                  <div className="rounded-full h-8 w-8 bg-blue-500 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">
                      {blogPost.writer[0].toUpperCase()}
                    </span>
                  </div>
                  <p className="ml-2 font-semibold">{blogPost.writer}</p>
                </div>
                <div className="flex items-center m-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                  <p className="ml-2">{blogPost.date}</p>
                </div>
              </div>

              {blogPost.description.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {section.heading}
                  </h3>
                  {section.subDescriptions.map((subDesc, subDescIndex) => (
                    <p key={subDescIndex} className="text-gray-600">
                      {subDesc}
                    </p>
                  ))}
                </div>
              ))}
              <div className="bg-blue-100 p-4 mt-8 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-blue-900 mb-2">
                  About Me
                </h2>
                <hr className="my-2 md:my-4 text-slate-900 bg-slate-900" />
                <div className="flex items-center space-x-4 text-gray-600 text-lg mb-4 justify-between md:flex-row">
                  <div className="flex items-center">
                    <p className="font-semibold">{blogPost.writer}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-md mb-2 line-clamp-4">
                  {blogPost.writerDescription}
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:ml-4 mt-6 lg:mt-0">
              {blogPost.images.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className="mb-2 border border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-900 transition duration-300 ease-in-out"
                >
                  <img
                    src={`${image}`}
                    alt={blogPost.title}
                    className="w-full rounded-lg"
                  />
                  <p className="text-sm text-center text-gray-600 my-2 font-bold">
                    Figure {imageIndex + 1}:{" "}
                    {blogPost.imagedescription[imageIndex]}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-2">
            <h2 className="text-2xl font-semibold mb-2 mt-8 ml-2">Comments</h2>
            {comments.length === 0 ? (
              <p className="my-4 mx-2">No comments yet.</p>
            ) : (
              <ul>
                {comments.map((comment, index) => (
                  <li
                    key={index}
                    className="mb-4 p-4 bg-white rounded-lg shadow-md"
                  >
                    <div className="flex justify-between">
                      <div>
                        <p className="font-semibold">{comment.name}</p>
                      </div>
                      <div>
                        <p className="text-right text-gray-600">
                          {comment.date}
                        </p>
                      </div>
                    </div>
                    <p>{comment.comment}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Post a Comment</h3>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={newComment.name}
                onChange={handleCommentChange}
                className="w-full px-3 py-2 border rounded-lg border-blue-800 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="comment"
                className="block text-gray-700 font-semibold"
              >
                Comment
              </label>
              <textarea
                id="comment"
                name="comment"
                rows={4}
                value={newComment.comment}
                onChange={handleCommentChange}
                className="w-full px-3 py-2 border rounded-lg border-blue-800 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              onClick={handleCommentSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
