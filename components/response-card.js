import PropTypes from "prop-types";

function ResponseCard({ isLoading, parsedData }) {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-md rounded overflow-hidden">
      <div className="rounded-t mb-0 px-0 border-0">
        <div className="block w-full">
          <div className="flex items-center px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-4 uppercase whitespace-nowrap font-semibold text-left">
            <h2 className="text-xl">Response</h2>
            <div className="self-end">
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
            </div>
          </div>
          <ul className="my-1">
            <li className="flex px-4 border-b">
              <div className="w-9 h-9 shadow-inner flex items-center justify-center rounded-full flex-shrink-0 bg-gray-100 my-2 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <div className="flex-grow flex items-center border-gray-100 dark:border-gray-400 text-sm text-gray-600 dark:text-gray-100 py-2">
                <div className="flex-grow flex justify-between items-center">
                  <div className="self-center">
                    <span className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100">
                      Title:
                    </span>{" "}
                    {parsedData?.title}
                  </div>
                </div>
              </div>
            </li>
            <li className="flex px-4 border-b">
              <div className="w-9 h-9 shadow-inner flex items-center justify-center rounded-full flex-shrink-0 bg-gray-100 my-2 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex-grow flex items-center border-gray-100 text-sm text-gray-600 dark:text-gray-50 py-2">
                <div className="flex-grow flex justify-between items-center">
                  <div className="self-center">
                    <span className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100">
                      Favicon:
                    </span>{" "}
                    {parsedData?.favicon}
                  </div>
                </div>
              </div>
            </li>
            <li className="flex px-4">
              <div className="w-9 h-9 shadow-inner flex items-center justify-center rounded-full flex-shrink-0 bg-gray-100 my-2 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div className="flex-grow flex items-center border-gray-100 text-sm text-gray-600 dark:text-gray-50 py-2">
                <div className="flex-grow flex justify-between items-center">
                  <div className="self-center">
                    <span className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100">
                      Description:
                    </span>{" "}
                    {parsedData?.description}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

ResponseCard.propTypes = {
  isLoading: PropTypes.bool,
  parsedData: PropTypes.shape({
    title: PropTypes.string,
    favicon: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default ResponseCard;
