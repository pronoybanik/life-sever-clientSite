const AboutUs = () => {
  return (
    <section>
      <p className="border mt-10" />
      <div className="max-w-5xl mx-auto mt-10">
        <div>
          <p className="text-sm text-[#60A3D9] font-sans ml-2">FAQ</p>
          <p className=" text-2xl font-sans ml-2">Have some Questions?</p>
        </div>

        <div className="space-y-4 mt-10">
          <details
            className="group border-l-4 border-[#60A3D9] bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex items-center justify-between cursor-pointer">
              <h2 className="text-lg font-medium text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h2>

              <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>

          <details className="group border-l-4 border-[#60A3D9] bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer">
              <h2 className="text-lg font-medium text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h2>

              <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
