const Button = ({ text, type, loading }) => {
  return (
    <button type={type ? type : "button"} disabled={loading} className="button">
      {loading ? "Loading..." : text}
    </button>
  );
};

export default Button;
