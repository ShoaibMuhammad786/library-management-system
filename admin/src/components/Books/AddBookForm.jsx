import { useFormik } from "formik";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { addBookFormValidationSchema } from "../../schemas/addBookFormValidationSchema";

const AddBookForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      grenre: "",
      bookCount: null,
      bookImage: null,
      bookVideo: null,
      bookSummary: "",
    },
    validationSchema: addBookFormValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });
  return (
    <div className="w-full pb-5">
      <div className="">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="px-4 py-2 rounded-lg bg-white text-sm font-medium flex items-center justify-center gap-1.5"
        >
          <GoArrowLeft className="text-lg" /> Go Back
        </button>
      </div>

      <form className="mt-6 w-full lg:w-[70%] flex flex-col items-start gap-5">
        <div className="w-full">
          <label
            for="first_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Book Title
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-3"
            placeholder="John"
            autoComplete="off"
            required
          />
        </div>
        <div className="w-full">
          <label
            for="company"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Author
          </label>
          <input
            type="text"
            id="company"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-3"
            placeholder="Flowbite"
            autoComplete="off"
            required
          />
        </div>
        <div className="w-full">
          <label
            for="phone"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Genre
          </label>
          <input
            type="tel"
            id="phone"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-3"
            placeholder="Science Fiction"
            autoComplete="off"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
          />
        </div>
        <div className="w-full">
          <label
            for="website"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Total number of books
          </label>
          <input
            type="url"
            id="website"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-3"
            placeholder="flowbite.com"
            autoComplete="off"
            required
          />
        </div>
        <div className="w-full">
          <label
            for="visitors"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Book Image
          </label>
          <input
            type="number"
            id="visitors"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-3"
            placeholder=""
            autoComplete="off"
            required
          />
        </div>
        <div className="w-full">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Book Video
          </label>
          <input
            type="email"
            id="email"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-3"
            placeholder="john.doe@company.com"
            autoComplete="off"
            required
          />
        </div>

        <div className="w-full">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Book Summary
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-3"
            placeholder="john.doe@company.com"
            autoComplete="off"
          ></textarea>
        </div>

        <button
          type="submit"
          className="text-white primary-bg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-4 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
