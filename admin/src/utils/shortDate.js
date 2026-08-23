export const shortDate = (dateString, options = {}) => {
  if (!dateString) return "";

  const date = new Date(dateString);

  const defaultOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };

  return date.toLocaleString("en-US", { ...defaultOptions, ...options });
};
