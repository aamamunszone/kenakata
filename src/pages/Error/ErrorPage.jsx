import { Home, RefreshCcw } from 'lucide-react';
import React from 'react';
import { Link, useRouteError } from 'react-router';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <section className="h-screen flex justify-center items-center bg-gray-50 px-6">
      <div className="max-w-lg w-full text-center">
        {/* Error Code */}
        <h1 className="text-9xl font-extrabold text-gray-800 tracking-widest">
          {error.status || '404'}
        </h1>

        {/* Error Message */}
        <p className="text-2xl md:text-3xl font-semibold mt-6 text-gray-700">
          {error.statusText || 'Oops! Something went wrong.'}
        </p>

        {/* Error Data */}
        <p className="mt-2 text-gray-500">
          {error.data || "We couldn't find the page you're looking for."}
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white font-medium shadow-md hover:bg-blue-700 transition"
          >
            <Home size={18} /> Go Home
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 rounded-xl bg-gray-200 px-6 py-3 text-gray-800 font-medium shadow-md hover:bg-gray-300 transition cursor-pointer"
          >
            <RefreshCcw size={18} /> Reload
          </button>
        </div>

        {/* Footer Note */}
        <p className="mt-10 text-sm text-gray-400">
          Copyright &copy; {new Date().getFullYear()} - All right reserved by
          KenaKata.
        </p>
      </div>
    </section>
  );
};

export default ErrorPage;
