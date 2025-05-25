'use client';

import React, { useEffect } from 'react';

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void; // this allows retrying the same route
};

const ErrorPage = ({ error, reset }: ErrorPageProps,) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold text-red-600 ">Something went wrong!</h2>
      <p className="mt-4 text-gray-600">{error.message}</p>
      <button
        onClick={reset}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorPage;
