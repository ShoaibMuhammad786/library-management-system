export const getStatusStyle = (value) => {
  switch (value) {
    case "pending":
      return "text-orange-600 bg-orange-200";
    case "borrowed":
      return "text-green-600 bg-green-200/90";
    case "returned":
      return "text-blue-600 bg-blue-200";
    case "late-return":
      return "text-red-600 bg-red-200";
    case "cancelled":
      return "text-red-500 bg-red-200";
    case "rejected":
      return "text-red-500 bg-red-200";
    default:
      return "text-gray-600 bg-gray-200";
  }
};
