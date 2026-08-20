import Modal from "../../components/common/Modal";
import { formateDate } from "../../utils/formateDate";
import getStatusStyles from "../../utils/getStatusStyles";

const BookDetailsModal = ({ request, isModalOpen, onClose }) => {
  if (!request) return null;

  const status = getStatusStyles(request?.status);

  return (
    <Modal isOpen={isModalOpen} onClose={onClose} title={null} size="xl">
      <div className="text-white flex flex-col items-start gap-4 text-start pt-5">
        <h3 className="text-xl font-semibold">{request?.book?.bookTitle}</h3>

        <div className="flex gap-4">
          <img
            src={request?.book?.bookCoverImage}
            alt={`${request?.book?.bookTitle} cover image`}
            className="w-32 rounded"
          />

          <div>
            <p className={`text-gray-400`}>Status: {status.label}</p>

            <p className="text-gray-400">
              Requested: {formateDate(request?.createdAt)}
            </p>
          </div>
        </div>

        <div className="w-full flex justify-end gap-2 items-start mt-3">
          <button
            type="button"
            className="orangeBg rounded-md px-7 py-2 font-semibold text-black"
            onClick={onClose}
          >
            Close
          </button>
          <button
            type="button"
            className="orangeBg rounded-md px-7 py-2 font-semibold text-black"
            onClick={onClose}
          >
            Cancel Request
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default BookDetailsModal;
