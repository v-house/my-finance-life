export default function Article(props: { blogPost: any }) {
  return (
    <>
      <div className="p-4 lg:flex">
        <div className="lg:w-2/3">
          <div className="mb-4 flex flex-wrap gap-2">
            {props.blogPost?.tags.map((tag: any, index: any) => (
              <span
                key={index}
                className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-extrabold text-blue-900 mb-6">
            {props.blogPost?.title}
          </h1>
          <blockquote className="text-xl text-gray-700 font-medium italic mb-6">
            "{props.blogPost?.subTitle}"
          </blockquote>
          <div className="text-gray-600 text-lg mb-4 flex flex-col md:flex-row md:justify-between md:items-center bg-blue-200 rounded-lg shadow-md py-1">
            <div className="flex items-center m-2">
              <div className="rounded-full h-8 w-8 bg-blue-500 flex items-center justify-center">
                <span className="text-white text-xl font-bold">
                  {props.blogPost?.writer[0].toUpperCase()}
                </span>
              </div>
              <p className="ml-2 font-semibold">{props.blogPost?.writer}</p>
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
              <p className="ml-2">{props.blogPost?.date}</p>
            </div>
          </div>

          {props.blogPost?.description.map(
            (section: any, sectionIndex: any) => (
              <div key={sectionIndex} className="mb-4">
                <h3 className="text-xl font-semibold mb-2">
                  {section.heading}
                </h3>
                {section.subDescriptions.map(
                  (subDesc: any, subDescIndex: any) => (
                    <p key={subDescIndex} className="text-gray-600">
                      {subDesc}
                    </p>
                  )
                )}
              </div>
            )
          )}
          <div className="bg-blue-100 p-4 mt-8 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-900 mb-2">
              About Me
            </h2>
            <hr className="my-2 md:my-4 text-slate-900 bg-slate-900" />
            <div className="flex items-center space-x-4 text-gray-600 text-lg mb-4 justify-between md:flex-row">
              <div className="flex items-center">
                <p className="font-semibold">{props.blogPost?.writer}</p>
              </div>
            </div>
            <p className="text-gray-600 text-md mb-2 line-clamp-4">
              {props.blogPost?.writerDescription}
            </p>
          </div>
        </div>
        <div className="lg:w-1/3 lg:ml-4 mt-6 lg:mt-0">
          {props.blogPost?.images.map((image: any, imageIndex: any) => (
            <div
              key={imageIndex}
              className="mb-2 border border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-900 transition duration-300 ease-in-out"
            >
              <img
                src={`${image}`}
                alt={props.blogPost?.title}
                className="w-full rounded-lg"
              />
              <p className="text-sm text-center text-gray-600 my-2 font-bold">
                Figure {imageIndex + 1}:{" "}
                {props.blogPost?.imagedescription[imageIndex]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
