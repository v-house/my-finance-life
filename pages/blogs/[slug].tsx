import { useRouter } from "next/router";
import { blogPosts } from "../../data/blogPosts";
import Article from "./Article";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
  const [comments, setComments] = useState<Comment[]>([
    {
      _id: { $oid: "1" },
      tag: "1",
      name: "Finanzy",
      body: "Comment Section is still under testing procedure.",
      time: "December 11, 2023 - 20:22 IST",
    },
  ]);
  const blogPost = blogPosts.find((post) => post.slug === slug);

  useEffect(() => {
    console.log("Slug is ", slug);
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

    fetchData();
  }, [slug]);

  return (
    <div className="bg-blue-100 py-12">
      <div className="mx-auto px-4">
        <div className="bg-white rounded-lg">
          <Article blogPost={blogPost} />
          {/* <div className="p-2 lg:p-4">
            <Link href="/" legacyBehavior>
              <a className="flex items-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="m-2 p-4 h-2 w-2 rounded-full border-2 border-blue-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>

                <div>
                  <div className="text-xl font-medium">Other Blogs</div>
                  <p className="text-slate-600 text-sm lg:text-base">
                    Read more blogs
                  </p>
                </div>
              </a>
            </Link>
          </div> */}
          <div className="m-4 py-4">
            <h2 className="text-2xl font-bold text-blue-900">Comments:</h2>

            {comments.length === 0 ? (
              <p className="text-gray-600">No comments yet.</p>
            ) : (
              comments.map((comment, index) => (
                <div
                  key={index}
                  className="flex flex-col p-4 my-4 rounded-l-lg border-l-2 border-blue-900 ml-1"
                >
                  <div className="flex flex-col items-start">
                    <p className="text-gray-800 font-semibold">
                      {comment.time}
                    </p>
                    <div className="flex items-start">
                      <p className="text-gray-800 font-semibold mr-4">
                        {comment.name}:
                      </p>
                      <p className="text-gray-600">{comment.body}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
