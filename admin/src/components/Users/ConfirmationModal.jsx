import { IoClose } from "react-icons/io5";

const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  isLoading = false,
  title,
  description,
  confirmText = "Confirm",
  loadingText = "Processing...",
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[1000000] bg-[rgba(0,0,0,0.4)] flex items-center justify-center p-4">
      <div className="w-full max-w-[470px] rounded-xl px-6 md:px-10 py-6 relative bg-white flex flex-col items-center justify-center text-center gap-3">
        {/* Close */}
        <button
          type="button"
          className="absolute top-5 right-5"
          onClick={onClose}
          disabled={isLoading}
          aria-label="Close"
        >
          <IoClose className="text-2xl" />
        </button>

        {/* Icon */}
        <div
          className="w-[80px] h-[80px] rounded-full bg-[#F46F70] flex items-center justify-center"
          style={{ border: "10px solid #fc8989" }}
        >
          <img
            src="/info-circle.png"
            alt="Confirmation"
            className="w-[30px] h-[30px]"
          />
        </div>

        {/* Title */}
        <h2 className="text-[20px] font-semibold leading-none mt-2">{title}</h2>

        {/* Description */}
        <p className="secondary-text mb-2">{description}</p>

        {/* Confirm */}
        <button
          type="button"
          onClick={onConfirm}
          disabled={isLoading}
          className="bg-[#F46F70] text-white rounded-xl text-center w-full py-3 font-semibold outline-none disabled:opacity-60"
        >
          {isLoading ? loadingText : confirmText}
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
