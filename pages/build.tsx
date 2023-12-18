import { useEffect, useState } from "react";
import Article from "./blogs/Article";
import { MdAdd, MdDelete, MdDeleteForever } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { FaCopy } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import Link from "next/link";
import router from "next/router";
import { IoWarning } from "react-icons/io5";

const generateRandomId = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-?";
  const length = 6;
  let randomId = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }
  return randomId;
};

interface sect {
  heading: string;
  subDescriptions: string[];
}

interface Section {
  heading: string;
  subDescriptions: string[];
}

export default function Build() {
  const [blog, setBlog] = useState({
    id: "",
    slug: "",
    title: "",
    tags: [] as String[],
    banner: "",
    writer: "",
    writerDescription: "",
    date: "",
    subTitle: "",
    description: [] as Section[],
    images: [] as String[],
    imagedescription: [] as String[],
  });

  useEffect(() => {
    const blogFromLocalStorage = getBlogFromLocalStorage();
    if (blogFromLocalStorage) {
      setBlog(blogFromLocalStorage);
    }
  }, []);

  const [ctag, setCtag] = useState("");
  const [ci, setCi] = useState("");
  const [cid, setCid] = useState("");

  const handleAddImage = () => {
    setBlog({
      ...blog,
      images: [...blog.images, ci],
      imagedescription: [...blog.imagedescription, cid],
    });
    setCi("");
    setCid("");
  };

  const handleGenerateRandomId = () => {
    const randomId = generateRandomId();
    setBlog({
      ...blog,
      id: randomId,
      slug: randomId.toLowerCase(),
    });
  };

  const handleAddTag = () => {
    setBlog({
      ...blog,
      tags: [...blog.tags, ctag],
    });
    setCtag("");
  };

  const deleteTag = (index: number) => {
    const updatedTags = [...blog.tags];
    updatedTags.splice(index, 1);
    setBlog({
      ...blog,
      tags: updatedTags,
    });
  };

  const deleteImage = (index: number) => {
    const updatedImages = [...blog.images];
    const updatedImagesD = [...blog.imagedescription];
    updatedImages.splice(index, 1);
    updatedImagesD.splice(index, 1);
    setBlog({
      ...blog,
      images: updatedImages,
      imagedescription: updatedImagesD,
    });
  };

  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [imageKey, setImageKey] = useState(0);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(JSON.stringify(blog, null, 2));
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  useEffect(() => {
    setImageLoading(true);
    setImageError(false);
    setImageKey((prevKey) => prevKey + 1);
  }, [blog.banner]);

  const [save, setSave] = useState(true);

  useEffect(() => {
    const saveInterval = setInterval(() => {
      setSave(false);
      saveBlogToLocalStorage(blog);
    }, 3000);

    return () => {
      clearInterval(saveInterval);
    };
  }, [blog]);

  useEffect(() => {
    const wait = setInterval(() => {
      setSave(true);
    }, 1000);
    return () => {
      clearInterval(wait);
    };
  }, [save]);

  const [csh, setCsh] = useState<sect>({ heading: "", subDescriptions: [] });

  const handleAddHeading = () => {};

  const [sections, setSections] = useState<Section[]>([]);
  const [currentSection, setCurrentSection] = useState<Section>({
    heading: "",
    subDescriptions: [],
  });

  const handleAddDescription = () => {
    setCurrentSection((prev) => ({
      ...prev,
      subDescriptions: [...prev.subDescriptions, ""],
    }));
  };

  const handleDescriptionChange = (index: number, value: string) => {
    setCurrentSection((prev) => {
      const updatedDescriptions = [...prev.subDescriptions];
      updatedDescriptions[index] = value;
      return { ...prev, subDescriptions: updatedDescriptions };
    });
  };

  const handleSectionChange = (value: string) => {
    setCurrentSection((prev) => ({ ...prev, heading: value }));
  };

  const handleAddSection = () => {
    setBlog({
      ...blog,
      description: [...blog.description, currentSection],
    });
    setSections((prev) => [...prev, currentSection]);
    setCurrentSection({ heading: "", subDescriptions: [] });
  };

  const handleDeleteSection = (sectionIndex: number) => {
    setSections((prev) => {
      const updatedSections = [...prev];
      const deletedSection = updatedSections.splice(sectionIndex, 1)[0];

      setBlog((prevBlog) => {
        const updatedBlog = { ...prevBlog };
        updatedBlog.description = updatedBlog.description.filter(
          (section) => section.heading !== deletedSection.heading
        );
        return updatedBlog;
      });

      return updatedSections;
    });
  };

  const handleDeleteDescription = (sectionIndex: number, descIndex: number) => {
    setSections((prev) => {
      const updatedSections = [...prev];
      const deletedDescription = updatedSections[
        sectionIndex
      ].subDescriptions.splice(descIndex, 1)[0];

      setBlog((prevBlog) => {
        const updatedBlog = { ...prevBlog };
        updatedBlog.description[sectionIndex].subDescriptions =
          updatedBlog.description[sectionIndex].subDescriptions.filter(
            (desc) => desc !== deletedDescription
          );
        return updatedBlog;
      });

      return updatedSections;
    });
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const handleEmpty = () => {
    setModalOpen(true);
  };

  const handleConfirmDeactivate = () => {
    localStorage.removeItem("blog");
    window.location.reload();
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="p-6 py-12 bg-gray-800 text-gray-100 w-full lg:w-1/2">
          <div className="w-full flex justify-center">
            <h1 className="text-3xl font-bold mb-6">Create Blog Post</h1>
          </div>
          <div className="mx-auto max-w-5xl">
            <div className="mb-4">
              <label>ID:</label>
              <input
                type="text"
                value={blog.id}
                placeholder={"Enter something unique"}
                onChange={(e) => {
                  setBlog({
                    ...blog,
                    id: e.target.value,
                    slug: e.target.value.toLowerCase().replace(/ /g, "-"),
                  });
                }}
                className="w-full p-2 mt-1 border rounded-md text-black"
              />
              <div className="flex justify-between">
                <button
                  onClick={handleGenerateRandomId}
                  className="underline text-sm text-blue-500"
                >
                  Generate Random ID
                </button>
                <div className="text-sm text-red-300">Slug is: {blog.slug}</div>
              </div>
            </div>
            <div className="mb-4">
              <label>Title:</label>
              <input
                type="text"
                value={blog.title}
                placeholder={"Enter your blog title"}
                onChange={(e) => {
                  setBlog({
                    ...blog,
                    title: e.target.value,
                  });
                }}
                className="w-full p-2 mt-1 border rounded-md text-black"
              />
            </div>
            <div className="mb-4">
              <label className="">Tags:</label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Enter a tag"
                  value={ctag}
                  onChange={(e) => setCtag(e.target.value)}
                  className="w-full p-2 mt-1 border rounded-md text-black"
                />
                <div>
                  <button
                    onClick={handleAddTag}
                    className="bg-blue-300 rounded-full p-2 text-gray-800"
                  >
                    <MdAdd />
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap space-x-2 mt-2">
                <div className="flex space-x-1 bg-white rounded-full pl-2 items-center">
                  <div className="text-xs"></div>
                  <button
                    disabled
                    className="p-2 bg-blue-300 rounded-full text-xs text-blue-300"
                  >
                    <MdDeleteForever />
                  </button>
                </div>
                {blog.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="flex space-x-1 bg-white rounded-full pl-2 items-center"
                  >
                    <div className="text-gray-800 text-xs">
                      {blog.tags[index]}
                    </div>
                    <button
                      onClick={() => deleteTag(index)}
                      className="p-2 bg-blue-300 rounded-full text-xs text-gray-800"
                    >
                      <MdDeleteForever />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label>Banner Image:</label>
              <input
                type="url"
                value={blog.banner}
                placeholder={"Enter your banner image URL"}
                onChange={(e) => {
                  setBlog({
                    ...blog,
                    banner: e.target.value,
                  });
                }}
                className="w-full p-2 mt-1 border rounded-md text-black"
              />
            </div>
            <div className="mb-4">
              {imageLoading && <p>Loading...</p>}
              {imageError ? (
                <p className="text-red-500">Unable to fetch image</p>
              ) : (
                <img
                  src={blog.banner}
                  alt="Banner image"
                  onError={handleImageError}
                  onLoad={handleImageLoad}
                  className="max-h-48 border border-white object-contain"
                />
              )}
            </div>
            <div className="mb-4">
              <label>Author Name:</label>
              <input
                type="text"
                value={blog.writer}
                placeholder={"Enter your name"}
                onChange={(e) => {
                  setBlog({
                    ...blog,
                    writer: e.target.value,
                  });
                }}
                className="w-full p-2 mt-1 border rounded-md text-black"
              />
            </div>
            <div className="mb-4">
              <label>About Author:</label>
              <textarea
                value={blog.writerDescription}
                placeholder={"Enter about yourself"}
                onChange={(e) => {
                  setBlog({
                    ...blog,
                    writerDescription: e.target.value,
                  });
                }}
                rows={3}
                className="w-full p-2 mt-1 border rounded-md text-black"
              />
            </div>
            <div className="mb-4">
              <label>Date of Publication:</label>
              <input
                type="text"
                value={blog.date}
                placeholder={"Enter valid date"}
                onChange={(e) => {
                  setBlog({
                    ...blog,
                    date: e.target.value,
                  });
                }}
                className="w-full p-2 mt-1 border rounded-md text-black"
              />
            </div>
            <div className="mb-4">
              <label>Subtitle:</label>
              <textarea
                value={blog.subTitle}
                placeholder={"Enter about blog in few lines"}
                onChange={(e) => {
                  setBlog({
                    ...blog,
                    subTitle: e.target.value,
                  });
                }}
                rows={2}
                className="w-full p-2 mt-1 border rounded-md text-black"
              />
            </div>
            <div className="mb-4">
              <label className="">Section:</label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Section Heading"
                  value={currentSection.heading}
                  onChange={(e) => handleSectionChange(e.target.value)}
                  className="w-full p-2 my-1 border rounded-md text-black"
                />
                <div>
                  <button
                    onClick={handleAddDescription}
                    className="bg-blue-300 rounded-full p-2 text-gray-800"
                  >
                    <MdAdd />
                  </button>
                </div>
              </div>
              {currentSection.subDescriptions.map((description, index) => (
                <textarea
                  key={index}
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) =>
                    handleDescriptionChange(index, e.target.value)
                  }
                  className="w-full p-2 mt-1 border rounded-md text-black"
                />
              ))}
              <button
                onClick={handleAddSection}
                className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none"
              >
                Add Section
              </button>
              <div className="mt-4">
                <h2 className="text-lg font-bold mb-2">Sections:</h2>
                <ul>
                  {sections.map((section, sectionIndex) => (
                    <li key={sectionIndex}>
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">
                          {section.heading}
                        </h3>
                        <button
                          onClick={() => handleDeleteSection(sectionIndex)}
                          className="bg-red-800 p-1 rounded-full"
                        >
                          <MdDelete />
                        </button>
                      </div>
                      <ul>
                        {section.subDescriptions.map((desc, descIndex) => (
                          <li key={descIndex}>
                            <div className="pl-4 flex items-center justify-between">
                              {desc}
                              <button
                                onClick={() =>
                                  handleDeleteDescription(
                                    sectionIndex,
                                    descIndex
                                  )
                                }
                                className="text-red-500 p-1"
                              >
                                <MdDelete />
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mb-4">
              <label className="">Images:</label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Enter image URL"
                  value={ci}
                  onChange={(e) => setCi(e.target.value)}
                  className="w-full p-2 mt-1 border rounded-md text-black"
                />
                <input
                  type="text"
                  placeholder="Enter image description"
                  value={cid}
                  onChange={(e) => setCid(e.target.value)}
                  className="w-full p-2 mt-1 border rounded-md text-black"
                />
                <div>
                  <button
                    onClick={handleAddImage}
                    className="bg-blue-300 rounded-full p-2 text-gray-800"
                  >
                    <MdAdd />
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex flex-col space-y-1 mt-2">
                {blog.images.map((_tag, index) => (
                  <>
                    <div
                      key={index}
                      className="flex space-x-2 p-2 items-start justify-between border border-white rounded-lg"
                    >
                      <img
                        src={blog.images[index].toString()}
                        alt="Image"
                        className="w-24"
                      />
                      <div className="px-2 flex-grow">
                        {blog.imagedescription[index]}
                      </div>
                      <button
                        onClick={() => deleteImage(index)}
                        className="p-2 bg-red-300 rounded-full text-xs text-gray-800"
                      >
                        <MdDeleteForever />
                      </button>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
          <button
            onClick={handleEmpty}
            className="text-red-600 text-lg flex items-center space-x-2 hover:text-white"
          >
            <IoWarning className="text-2xl" />
            <div>Clear form completely</div>
          </button>
        </div>
        <div className="bg-blue-100 py-4 lg:py-8 w-full lg:w-1/2">
          <div className="mx-auto px-4">
            <div className="bg-white rounded-lg pb-4 relative">
              <div className="bg-blue-700 text-white py-4 px-6 text-3xl sticky top-20 font-bold flex justify-between items-center">
                Preview Mode
                <Link
                  href={{
                    pathname: "/preview",
                    query: { data: JSON.stringify(blog) },
                  }}
                  legacyBehavior
                >
                  <a
                    className="cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      router.push({
                        pathname: "/preview",
                        query: { data: JSON.stringify(blog) },
                      });
                    }}
                  >
                    <MdOpenInNew />
                  </a>
                </Link>
              </div>
              <Article blogPost={blog} />
            </div>
          </div>
        </div>
        <div className="bg-gray-800 text-white p-6 py-12 lg:w-1/4">
          <div className="mb-4">
            <h1 className="text-3xl font-bold mb-4">JSON Viewer</h1>
            <div className="flex items-center space-x-2 mb-2">
              <button
                onClick={() => {
                  setSave(false);
                  saveBlogToLocalStorage(blog);
                }}
                className="text-white py-2 px-4 bg-green-500 rounded-lg"
              >
                Save
              </button>
              <p>{save ? "" : "Saving changes..."}</p>
            </div>
            <pre className="overflow-auto bg-gray-900 p-4 rounded-md">
              {JSON.stringify(blog, null, 2)}
            </pre>
          </div>
        </div>
        <button
          onClick={handleCopyClick}
          className="fixed text-2xl bottom-4 right-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none z-[11]"
        >
          {copySuccess ? <TiTick /> : <FaCopy />}
        </button>
      </div>
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDeactivate}
      />
    </>
  );
}

const saveBlogToLocalStorage = (blog: any) => {
  try {
    localStorage.setItem("blog", JSON.stringify(blog));
  } catch (error) {
    console.error("Error saving blog to local storage:", error);
  }
};

const getBlogFromLocalStorage = () => {
  try {
    const blogJson = localStorage.getItem("blog");
    return blogJson ? JSON.parse(blogJson) : null;
  } catch (error) {
    console.error("Error retrieving blog from local storage:", error);
    return null;
  }
};

const ConfirmationModal = (props: {
  isOpen: any;
  onClose: any;
  onConfirm: any;
}) => {
  return (
    <>
      {props.isOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      className="text-base font-semibold leading-6 text-gray-900"
                      id="modal-title"
                    >
                      Clear Form
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you certain you want to clear all data? This action
                        will permanently delete the saved blog from your local
                        storage, and it cannot be recovered.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  onClick={props.onConfirm}
                >
                  Clear
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  onClick={props.onClose}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
