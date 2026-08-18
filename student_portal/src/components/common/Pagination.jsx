import { useSearchParams } from "react-router-dom";

const Pagination = ({ pagination }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = pagination?.page || 1;
  const totalPages = pagination?.totalPages || 1;

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;

    const params = new URLSearchParams(searchParams);

    params.set("page", page);

    setSearchParams(params);
  };

  return (
    <div className="w-full mb-12">
      <div aria-label="Page navigation">
        <ul className="flex items-center justify-end w-full -space-x-px h-10 text-base">
          {/* Previous */}
          <li>
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-[#232839] rounded-s-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="sr-only">Previous</span>

              <svg
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </button>
          </li>

          {/* Page numbers */}
          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;

            return (
              <li key={page}>
                <button
                  type="button"
                  onClick={() => handlePageChange(page)}
                  className={`flex items-center justify-center px-4 h-10 leading-tight ${
                    page === currentPage
                      ? "orangeBg text-white"
                      : "text-gray-400 bg-[#232839]"
                  }`}
                >
                  {page}
                </button>
              </li>
            );
          })}

          {/* Next */}
          <li>
            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-[#232839] rounded-e-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="sr-only">Next</span>

              <svg
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
