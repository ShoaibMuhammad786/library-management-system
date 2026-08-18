import { useSearchParams } from "react-router-dom";
import BookCard from "../../components/common/BookCard";
import Pagination from "../../components/common/Pagination";
import { useGetBooksQuery } from "../../services/bookApi";
import DepartmentFilter from "./DepartmentFilter";
import PageLoader from "../../components/common/PageLoader";

const SearchResultList = () => {
  const limit = 12;
  const [searchParams] = useSearchParams();

  const searchDepartment = searchParams.get("department") || "";
  const searchQuery = searchParams.get("search") || "";
  const page = Number(searchParams.get("page")) || 1;

  const { data, isLoading, isError, error } = useGetBooksQuery(
    {
      page,
      limit,
      search: searchQuery,
      department: searchDepartment,
    },
    {
      refetchOnMountOrArgChange: true,
    },
  );

  const books = data?.data?.books;
  const pagination = data?.data?.pagination;

  if (isLoading) return <PageLoader />;

  if (!books?.length) {
    return (
      <main className="w-full min-h-screen flex flex-col items-center justify-center gap-4 px-4">
        <img
          src="/no-books-placeholder.png"
          alt="no-books-placeholder"
          width={150}
          height={150}
        />
        <p className="text-[24px] font-semibold">We couldn't find any books!</p>
      </main>
    );
  }

  return (
    <section className="w-full relative padding-x py-10">
      <div className="w-full flex items-center justify-between gap-5 flex-wrap">
        <DepartmentFilter />
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-10 mt-10 lg:mt-14 pb-10">
        {books?.map((book, index) => {
          return <BookCard book={book} key={index} />;
        })}
      </div>

      {pagination && pagination?.totalPages > 1 && (
        <Pagination pagination={pagination} />
      )}
    </section>
  );
};

export default SearchResultList;
