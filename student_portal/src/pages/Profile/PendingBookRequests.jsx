import { useGetBorrowedBooksQuery } from "../../services/bookApi";
import BookCard from "./BookCard";
import PageLoader from "../../components/common/PageLoader";

const PendingBookRequests = () => {
  const { data, isLoading, isError } = useGetBorrowedBooksQuery(undefined);
  if (isError) return;

  // if (isLoading) return <PageLoader />;
  return (
    <div className="w-full">
      <h2 className="secondary-text font-semibold text-[32px]">
        Pending Book Requests
      </h2>

      {data && data?.length > 0 ? (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 2xl:gap-10 mt-5">
          {data?.map((book) => {
            return <BookCard book={book} />;
          })}
        </div>
      ) : (
        <div className="w-full pt-3">
          <p className="secondary-text">You have not requested any book yet.</p>
        </div>
      )}
    </div>
  );
};

export default PendingBookRequests;
