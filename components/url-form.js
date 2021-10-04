import PropTypes from "prop-types";
import { useRef } from "react";

import axios from "axios";

function UrlForm({
  updateResponseData,
  toggleLoadingStatus,
  toggleErrorStatus,
  isLoading,
}) {
  const inputRef = useRef();

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const url = inputRef.current.value;

    // url is not valid
    if (!url) return alert("Please enter valid url");

    // update loading state to true
    toggleLoadingStatus(true);

    // fetch url info from server
    axios
      .get(`/api/parse/${url}`)
      .then((response) => response.data)
      .then((responseData) => {
        // update responseData state with parsedData from server
        updateResponseData(responseData);
        // clear input value
        inputRef.current.value = "";
        // update loading state to false (false)
        toggleLoadingStatus(false);
        // update error status to false
        toggleErrorStatus(false);
      })
      .catch((error) => {
        // handle errors
        console.log(error);
        alert("An error occured while fetching data");
        // update error status to true
        toggleErrorStatus(true);
        // update responseData state with null
        updateResponseData(null);
        // update loading state to false (false)
        toggleLoadingStatus(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      className="flex flex-col md:flex-row items-center p-4 md:p-6 md:space-x-6 bg-white rounded-xl shadow hover:shadow-md transform hover:scale-105 transition duration-500"
    >
      <div className="w-full flex md:flex-1 bg-gray-100 rounded-lg overflow-hidden mb-4 md:mb-0">
        <label
          htmlFor="url-input"
          className="inline-flex items-center text-gray-500 font-medium px-2"
        >
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
              strokeWidth={2}
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
          <span>URL</span>
        </label>
        <input
          ref={inputRef}
          id="url-input"
          className="p-4 bg-gray-50 outline-none shadow-inner flex-1 disabled:bg-gray-100 disabled:shadow-none disabled:cursor-not-allowed"
          type="text"
          placeholder="eg: www.tailwindcss.com"
          disabled={isLoading}
        />
      </div>
      <button
        disabled={isLoading}
        type="submit"
        className="flex justify-center items-center space-x-1 w-full md:w-auto capitalize bg-indigo-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-1000 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isLoading && (
          <svg
            fill="none"
            className="w-6 h-6 animate-spin"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        )}
        <span>{isLoading ? "Loading.." : "Parse Url"}</span>
      </button>
    </form>
  );
}

UrlForm.propTypes = {
  updateResponseData: PropTypes.func,
  toggleLoadingStatus: PropTypes.func,
  toggleErrorStatus: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default UrlForm;
