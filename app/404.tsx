import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 Error</h1>
      <p className="text-lg text-gray-600 mb-8">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="inline-block text-white bg-blue-500 hover:bg-blue-700 text-lg font-semibold text-center mr-2 mb-2 px-4 py-2 rounded"
      >
        Go Home
      </Link>
    </div>
  );
}
