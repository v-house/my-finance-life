import Link from "next/link";
import { blogPosts } from "../data/blogPosts";

const Home = () => {
  return (
    <div>
      <div className="mx-auto my-8 p-2 lg:p-4">
        <h1 className="text-3xl font-semibold mb-4 mx-2">Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-105 relative"
            >
              <Link href={`/blogs/${post.slug}`} legacyBehavior>
                <a>
                  {post.banner && (
                    <div className="h-48 relative">
                      <img
                        src={post.banner}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform transform scale-100"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                        <p className="text-white font-semibold">Read More</p>
                      </div>
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex justify-between">
                      <div className="flex flex-col items-start space-y-2">
                        <p className="text-gray-600 text-sm">{post.date}</p>
                        <h2 className="text-xl font-semibold mb-2">
                          {post.title}
                        </h2>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-3">
                      {post.subTitle}
                    </p>
                    <p className="text-gray-600 text-sm">by {post.writer}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
