import { useRouter } from "next/router";
import Article from "./blogs/Article";
import { useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";
import { FaCopy } from "react-icons/fa";

export default function Preview() {
  const router = useRouter();
  const { data } = router.query;
  const blogFromQuery = typeof data === "string" ? JSON.parse(data) : null;

  const [blog, setBlog] = useState(blogFromQuery);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    const blogFromLocalStorage = getBlogFromLocalStorage();
    if (blogFromLocalStorage) {
      setBlog(blogFromLocalStorage);
    }
  }, []);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(JSON.stringify(blog, null, 2));
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <>
      <div className="bg-blue-100 py-4 lg:py-8 w-full">
        <div className="mx-auto px-4">
          <div className="bg-white rounded-lg pb-4 relative">
            <div className="bg-blue-700 text-white py-4 px-6 text-3xl sticky top-20 font-bold flex justify-between items-center">
              Preview Mode
            </div>
            <Article blogPost={blog} />
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-white p-6 py-12">
        <div className="mb-4">
          <h1 className="text-3xl font-bold mb-4">JSON Viewer</h1>
          <pre className="overflow-auto bg-gray-900 p-4 rounded-md">
            {JSON.stringify(blog, null, 4)}
          </pre>
        </div>
      </div>
      <button
        onClick={handleCopyClick}
        className="fixed text-2xl bottom-4 right-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none z-[11]"
      >
        {copySuccess ? <TiTick /> : <FaCopy />}
      </button>
    </>
  );
}

const getBlogFromLocalStorage = () => {
  try {
    const blogJson = localStorage.getItem("blog");
    return blogJson ? JSON.parse(blogJson) : null;
  } catch (error) {
    console.error("Error retrieving blog from local storage:", error);
    return null;
  }
};
