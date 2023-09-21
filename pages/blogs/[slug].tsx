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
              <div className="text-gray-600 text-lg mb-4 flex flex-col md:flex-row md:justify-evenly md:items-center mx-2 bg-blue-200 rounded-lg shadow-md py-1">
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
              <h2 className="text-2xl font-semibold mb-2">Comments</h2>
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
            </div>
            <div className="lg:w-1/3 lg:ml-4">
              {blogPost.images.map((image) => (
                <img
                  key={image}
                  src={`${image}`}
                  alt={blogPost.title}
                  className="w-full mb-2"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
