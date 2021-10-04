import Head from "next/head";
import { useState } from "react";

import { Container, ResponseCard, UrlForm } from "../components";

export default function Home() {
  // state for managing responseData from /api/parse/:url
  const [responseData, setResponseData] = useState(null);
  // state for managing loading status of urlForm and response card
  const [loading, setLoading] = useState(false);
  // state for managing error state
  const [error, setError] = useState(false);

  // function to update responseData state
  const getResponseData = (data) => {
    setResponseData(data);
  };

  // function to update loading state
  const updateLoadingStatus = (status) => {
    setLoading(status);
  };

  // function to update error state
  const updateErrorStatus = (status) => {
    setError(status);
  };

  return (
    <main>
      <Head>
        <title>URL PARSER</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="w-full min-h-screen">
        <Container>
          <div className="text-center mx-auto py-5">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-blue-600">
              URL PARSER
            </h1>

            <p className="mt-3 text-xl md:text-2xl">
              View raw response at{" "}
              <code className="p-1.5 md:p-3 font-mono text-lg bg-gray-100 rounded-md">
                /api/parse/:url
              </code>
            </p>
          </div>

          <hr className="my-5 bg-gray-100 w-full" />

          <div className="grid grid-rows-1 gap-10">
            <div className="row-span-1">
              <div className="mx-auto md:w-full md:max-w-3xl">
                <UrlForm
                  updateResponseData={getResponseData}
                  toggleLoadingStatus={updateLoadingStatus}
                  toggleErrorStatus={updateErrorStatus}
                  isLoading={loading}
                />
                {error && (
                  <div className="mt-5">
                    <div
                      className="flex bg-red-100 rounded-lg p-4 mb-4 text-sm text-red-700"
                      role="alert"
                    >
                      <svg
                        className="w-5 h-5 inline mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <span className="font-medium">Note:</span>
                        <br />
                        Please make sure the url is a <strong>valid url</strong>. <br />
                        Do not include url protocol <strong>Eg: https://, http://, etc</strong> <br />
                        Do not add with path <strong>Eg: tailwindcss.com/docs</strong> <br />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="row-span-1">
              <div className="mx-auto md:w-full md:max-w-3xl">
                <ResponseCard isLoading={loading} parsedData={responseData} />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
