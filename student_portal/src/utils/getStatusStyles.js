const getStatusStyles = (status) => {
  const statusStyles = {
    pending: {
      label: "Pending",
      className: "bg-yellow-100 text-yellow-700",
    },

    borrowed: {
      label: "Borrowed",
      className: "bg-blue-100 text-blue-700",
    },

    rejected: {
      label: "Rejected",
      className: "bg-red-100 text-red-700",
    },

    returned: {
      label: "Returned",
      className: "bg-green-100 text-green-700",
    },

    "late-return": {
      label: "Late Return",
      className: "bg-orange-100 text-orange-700",
    },

    cancelled: {
      label: "Cancelled",
      className: "bg-red-200 text-red-700",
    },
  };

  return (
    statusStyles[status] || {
      label: status,
      className: "bg-gray-100 text-gray-700",
    }
  );
};

export default getStatusStyles;
