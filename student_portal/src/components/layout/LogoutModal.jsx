import { useState } from "react";
import Modal from "../../components/common/Modal";
import { TbLogout2 } from "react-icons/tb";
import { RiLogoutCircleLine } from "react-icons/ri";

const LogoutModal = ({ handleLogout }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsModalOpen(true)}>
        <TbLogout2 className="text-red-600 text-xl" />
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={null}
        size="lg"
      >
        <div className="text-white flex flex-col items-center gap-4 text-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center bg-[#090c15]">
            <RiLogoutCircleLine size={34} className="text-gray-400" />
          </div>

          <h3 className="text-xl font-semibold">Log out</h3>

          <p className="text-base text-gray-400 max-w-sm leading-[1.35]">
            Are you sure you want to logout?
          </p>

          <div className="mt-1 flex justify-center gap-4">
            <button
              type="button"
              //   disabled={isLoading}
              className="bg-gray-500 rounded-md px-12 py-2 font-semibold text-black text-sm lg:text-base"
              onClick={() => setIsModalOpen(false)}
            >
              No
            </button>

            <button
              type="button"
              //   disabled={isLoading}
              onClick={() => handleLogout()}
              className="orangeBg rounded-md px-7 py-2 font-semibold text-black text-sm lg:text-base disabled:opacity-65"
            >
              {"Yes, Log out"}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LogoutModal;
