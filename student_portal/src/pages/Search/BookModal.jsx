import Modal from "../../components/common/Modal";
import { useSearchParams } from "react-router-dom";
import RequestModal from "../Home/RequestModal";
import { useRequestBookMutation } from "../../services/bookApi";
import { enqueueSnackbar } from "notistack";

const BookModal = ({ isModalOpen, setIsModalOpen }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const bookDetails = searchParams.get("book")
    ? JSON.parse(searchParams.get("book"))
    : null;

  const [requestBook, { isLoading, isError }] = useRequestBookMutation();

  const handleBorrowBookRequest = async (bookId) => {
    try {
      await requestBook({ bookId }).unwrap();
      enqueueSnackbar("Request submitted successfully!", {
        variant: "success",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsModalOpen(false);
    }
  };

  const handleCloseModal = () => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.delete("book");
      return params;
    });
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => handleCloseModal()}
        title={null}
        size="full"
      >
        <div className="py-10 md:py-20 padding-x flex flex-col-reverse lg:flex-row items-center justify-between gap-y-20">
          <div className="w-full lg:w-[55%] flex flex-col items-start gap-5">
            <h1 className="text-[32px] md:text-[52px] lg:text-[72px] font-semibold leading-[1]">
              {bookDetails?.bookTitle}
            </h1>
            <div className="flex items-center flex-wrap gap-x-8 gap-y-5">
              <p className="secondary-text text-base lg:text-lg">
                By <span className="orangeText">{bookDetails?.author}</span>
              </p>
              <p className="secondary-text text-base lg:text-lg">
                Category:{" "}
                <span className="orangeText">{bookDetails?.genre}</span>
              </p>
            </div>
            <div className="flex items-center flex-wrap gap-x-8 gap-y-5">
              <p className="secondary-text text-base lg:text-lg">
                Total books:{" "}
                <span className="orangeText">{bookDetails?.totalBooks}</span>
              </p>
              <p className="secondary-text text-base lg:text-lg">
                Available books:{" "}
                <span className="orangeText">
                  {bookDetails?.availableBooks}
                </span>
              </p>
            </div>
            <p className="secondary-text text-base lg:text-lg">
              {bookDetails?.bookSummary}
            </p>
            <RequestModal
              bookDetails={bookDetails}
              handleBorrowBookRequest={handleBorrowBookRequest}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              isLoading={isLoading}
            />
          </div>

          <div className="relative flex items-center justify-center lg:justify-end w-full lg:w-[400px] 2xl:w-[450px]">
            <img
              src={bookDetails?.bookCoverImage}
              width={276}
              height={384}
              alt="dan-brown-book-front-side"
              className="z-10 rounded-2xl max-w-[260px]"
            />
            <img
              src={bookDetails?.bookCoverImage}
              width={276}
              height={384}
              alt="dan-brown-book-backside-image"
              className="absolute z-0 right-[20%] rounded-2xl max-w-[250px] blur-sm rotate-12"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BookModal;
