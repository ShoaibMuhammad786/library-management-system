import { HiDotsVertical } from "react-icons/hi";

const Actions = ({
  openDropdown,
  setOpenDropdown,
  user,
  setUser,
  setShowUSerCard,
  handleToggleDropdown,
  onAction,
}) => {
  return (
    <>
      <button
        type="button"
        onClick={() => handleToggleDropdown(user?._id)}
        className="outline-none"
      >
        <HiDotsVertical className="text-lg text-gray-700" />
      </button>

      {openDropdown === user?._id && (
        <div className="min-w-24 bg-white border rounded-md flex flex-col items-start absolute right-14 top-10 z-10 shadow-md">
          {/* View */}
          <button
            type="button"
            onClick={() => {
              setShowUSerCard(true);
              setUser(user);
              setOpenDropdown(null);
            }}
            className="px-4 py-2 hover:bg-gray-100 w-full text-start"
          >
            View
          </button>

          {/* Block */}
          <button
            type="button"
            onClick={() => onAction("block", user)}
            className="px-4 py-2 hover:bg-gray-100 w-full text-start"
          >
            Block
          </button>

          {/* Suspend */}
          <button
            type="button"
            onClick={() => onAction("suspend", user)}
            className="px-4 py-2 hover:bg-gray-100 w-full text-start"
          >
            Suspend
          </button>
        </div>
      )}
    </>
  );
};

export default Actions;
