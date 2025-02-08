import no_page_found from '../../../assets/images/page_not_found.jpg'


const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <div className="animate-pulse mb-4">
        <img src={no_page_found} alt="Page Not Found" className="w-64 h-64 object-contain" />
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h1>
      <p className="text-gray-600 mb-8">The page you are looking for does not exist. It might have been moved or deleted.</p>
      <a
        href="/"
        className="px-6 py-3 text-white bg-[#00B894] rounded-lg hover:bg-[#00B894] transition-transform transform hover:scale-[1.02] duration-300"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default PageNotFound;
