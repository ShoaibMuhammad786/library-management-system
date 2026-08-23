import Modal from "../../components/common/Modal";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";

const RequestModal = ({
  bookDetails,
  handleBorrowBookRequest,
  isModalOpen,
  setIsModalOpen,
  isLoading,
}) => {
  return (
    <>
      <button
        type="button"
        disabled={bookDetails?.availableBooks === 0 || isLoading}
        onClick={() => setIsModalOpen((prev) => !prev)}
        className="orangeBg rounded-md px-5 py-3 font-semibold text-black text-sm lg:text-lg mt-3 disabled:opacity-65"
      >
        Borrow Book Request
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={null}
        size="lg"
      >
        <div className="text-white flex flex-col items-center gap-4 text-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center bg-[#090c15]">
            <VscGitPullRequestNewChanges size={34} className="text-gray-400" />
          </div>

          <h3 className="text-xl font-semibold">Request to Borrow Book</h3>

          <p className="text-gray-400 max-w-md">
            You are about to submit a request to borrow{" "}
            <span className="text-white font-semibold">
              "{bookDetails?.bookTitle}"
            </span>
            . Your request will be sent to the library for approval.
          </p>

          <p className="text-base text-gray-400 max-w-sm leading-[1.35]">
            Please confirm that you want to submit this borrowing request.
          </p>

          <div className="mt-1 flex justify-center gap-4">
            <button
              type="button"
              disabled={isLoading}
              className="bg-gray-500 rounded-md px-7 py-2 font-semibold text-black text-sm lg:text-base"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>

            <button
              type="button"
              disabled={isLoading}
              onClick={() => handleBorrowBookRequest(bookDetails?._id)}
              className="orangeBg rounded-md px-7 py-2 font-semibold text-black text-sm lg:text-base disabled:opacity-65"
            >
              {isLoading ? "Submitting..." : "Confirm Request"}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RequestModal;
