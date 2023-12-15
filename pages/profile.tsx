import { getSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imagesrc, setImagesrc] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserName = async () => {
      const session = await getSession();
      if (session?.user?.name) {
        setName(session.user.name);
      }
      if (session?.user?.email) {
        setEmail(session.user.email);
      }
      if (session?.user?.image) {
        setImagesrc(session.user.image);
      }
      setIsLoading(false);
    };

    fetchUserName();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 min-h-screen flex items-center justify-center">
      {!name ? (
        <button
          onClick={() => signIn("google")}
          className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Sign In
        </button>
      ) : (
        <div className="bg-white p-8 rounded-md shadow-md text-center">
          <img
            src={imagesrc}
            alt="User Image"
            className="w-16 h-16 rounded-full mx-auto mb-4 shadow-md"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
          <p className="text-gray-600 mb-4">{email}</p>
          <button
            onClick={() => signOut()}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
