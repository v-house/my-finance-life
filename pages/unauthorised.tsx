import Link from "next/link";

export default function UnAuth() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-300">
        <div className="p-8 bg-white shadow-md rounded-md">
          <h1 className="text-3xl text-red-500 font-bold mb-4">
            Unauthorized Access
          </h1>
          <p className="text-gray-700 mb-4">
            You are not authorized to access this page. Blogs can only be
            managed by the admin.
          </p>
          <Link href="/" legacyBehavior>
            <a className="text-blue-500 hover:underline">Go back to home</a>
          </Link>
        </div>
      </div>
    </>
  );
}
