import { Link } from 'react-router-dom';
import { Home as HomeIcon } from 'lucide-react';

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-linear-to-b from-blue-50/50 to-white">
      <div className="text-center max-w-lg">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-500">
          404 error
        </p>
        <h1 className="mt-3 text-5xl sm:text-6xl font-bold text-gray-900">
          Page not found
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Sorry, we couldn't find the page you're looking for. It may have moved or no longer
          exists.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-lg shadow-blue-500/25"
          >
            <HomeIcon className="w-5 h-5" />
            Back to home
          </Link>
          <a
            href="/#support"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-full border border-gray-200 hover:bg-gray-50 transition-colors duration-300"
          >
            Get support
          </a>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
