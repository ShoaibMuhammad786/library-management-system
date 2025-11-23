const ImageUpload = ({ onChange, error }) => {
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    onChange(files); // send files to Formik
  };

  return (
    <div className="w-full">
      <label className="block mb-2 text-sm font-medium text-gray-900">
        Book Images
      </label>

      <label
        htmlFor="book-images"
        className={`flex flex-col items-center justify-center w-full h-64 bg-white border rounded-lg cursor-pointer ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      >
        <p className="text-sm text-gray-500">
          <strong>Click to upload</strong> or drag & drop (Max 5)
        </p>

        <input
          id="book-images"
          type="file"
          multiple
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default ImageUpload;
