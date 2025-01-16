import React, { useState } from "react";

const Dummy = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [content, setContent] = useState("main"); // Track content type

  // Function to switch between content
  const changeContent = (newContent) => {
    setContent(newContent);
  };

  // Function to handle "Back" action (reset to main content)
  const goBack = () => {
    setContent("main");
  };

  // Function to update the header text to 'Back' or 'Info'
  const getHeaderText = () => {
    return content === "main" ? "Info" : "Back";
  };

  return (
    <div className="text-center">
      {/* Button to toggle drawer */}
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        type="button"
        onClick={() => setIsDrawerOpen(true)}
      >
        Show drawer
      </button>

      {/* Drawer Component */}
      <div
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white w-full dark:bg-gray-800`}
        aria-labelledby="drawer-label"
      >
        {/* Drawer Header (Fixed) */}
        <div className="flex justify-between items-center mb-4">
          <h5
            id="drawer-label"
            className="inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
            onClick={content !== "main" ? goBack : undefined} // Only allow "Back" action when not on main content
          >
            <svg
              className="w-4 h-4 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            {getHeaderText()}
          </h5>
          {/* Close Button */}
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => setIsDrawerOpen(false)}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        {/* Drawer Content (Dynamic) */}
        <div className="mb-4">
          {/* Main content */}
          {content === "main" && (
            <div>
              <p>This is the main content of the drawer.</p>
              <button
                className="text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                onClick={() => changeContent("sub1")}
              >
                Open Sub Content 1
              </button>
              <button
                className="text-white bg-yellow-600 hover:bg-yellow-700 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                onClick={() => changeContent("sub2")}
              >
                Open Sub Content 2
              </button>
            </div>
          )}

          {/* Sub Content 1 */}
          {content === "sub1" && (
            <div>
              <p>This is the content of Sub Content 1.</p>
            </div>
          )}

          {/* Sub Content 2 */}
          {content === "sub2" && (
            <div>
              <p>This is the content of Sub Content 2.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dummy;
