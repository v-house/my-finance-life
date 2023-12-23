import Link from "next/link";
import { blogPosts } from "../data/blogPosts";

const Home = () => {
  return (
    <div className="py-8 lg:py-20 bg-white">
      <div className="px-8 mx-auto space-y-4 lg:space-y-12 max-w-7xl xl:px-12">
        <div className="relative">
          <h2 className="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl">
            Blogs
          </h2>
          <p className="w-full py-8 mx-auto -mt-2 text-lg text-center text-gray-700 intro sm:max-w-3xl">
            Explore Our Insightful Blog Collection.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">
          {blogPosts.reverse().map((post) => (
            <div
              key={post.id}
              className="bg-white hover:bg-gray-200 rounded-lg overflow-hidden shadow-md relative"
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
                    <div className="flex flex-col justify-between">
                      <div className="flex flex-col items-start space-y-2">
                        <p className="text-gray-600 text-sm">{post.date}</p>
                        <h2 className="text-xl font-semibold mb-2">
                          {post.title}
                        </h2>
                        <div>
                          <p className="text-gray-600 text-sm mb-2 line-clamp-3">
                            {post.subTitle}
                          </p>
                          <p className="text-gray-600 text-sm">
                            by {post.writer}
                          </p>
                        </div>
                      </div>
                      <div className="">
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
