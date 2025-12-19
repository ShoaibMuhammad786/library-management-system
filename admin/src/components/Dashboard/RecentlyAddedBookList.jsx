import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";

const RecentlyAddedBookList = () => {
  return (
    <div className="w-full bg-white p-5 rounded-xl">
      <div className="w-full flex items-center justify-between mb-5">
        <h2 className="text-[20px] font-semibold">Recently Added Books</h2>
        <Link
          to={"/books?filter=recent"}
          className="text-[#25388C] bg-[#25388C]/10 text-sm font-semibold px-3 py-2 rounded-lg"
        >
          View all
        </Link>
      </div>

      <Link
        to={`/books/add-book`}
        className="w-full bg-[#F8F8FF] p-4 rounded-xl flex items-center justify-start gap-3"
      >
        <div className="rounded-full bg-white w-[48px] h-[48px] flex items-center justify-center">
          <GoPlus className="text-2xl" />
        </div>
        <span className="text-lg font-medium">Add New Book</span>
      </Link>

      <div className="w-full mt-5 flex flex-col items-start">
        {[1, 2, 3, 4, 5, 6].map((_, i) => {
          return (
            <div
              key={i}
              className="w-full flex items-start justify-between bg-[#ffff] p-4 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <img
                  src="/inside-evil-book.png"
                  alt="inside-evil-book"
                  className="w-[55px] h-[76px]"
                />
                <div className="flex flex-col items-start gap-1.5">
                  <h3 className="font-semibold">
                    Inside Evil: Inside Evil Series, Book 1
                  </h3>
                  <div className="flex items-center gap-5">
                    <p className="text-sm secondary-text">By Rachel Heng</p>
                    <p className="text-sm secondary-text">Strategic, Fantasy</p>
                  </div>

                  <div className="w-full flex items-center gap-5">
                    <div className="flex items-center gap-1">
                      <img
                        src="/profile-02.png"
                        alt="profile image"
                        className="w-[18px] h-[18px]"
                      />
                      <p className="text-sm secondary-text">Darrell Stewards</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <IoCalendarOutline className="secondary-text text-[16px]" />
                      <p className="text-sm secondary-text">Darrell Stewards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentlyAddedBookList;
