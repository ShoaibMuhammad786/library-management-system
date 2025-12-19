import React from "react";
import { Link } from "react-router-dom";

const AccountsRequestedList = () => {
  return (
    <div className="w-full bg-white p-5 rounded-xl">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-[20px] font-semibold">Account Requests</h2>
        <Link
          to={"/account-requests"}
          className="text-[#25388C] bg-[#25388C]/10 text-sm font-semibold px-3 py-2 rounded-lg"
        >
          View all
        </Link>
      </div>
      <div className="w-full mt-5 grid grid-cols-2 lg:grid-cols-3 gap-5">
        {[1, 2, 3, 4, 5, 6].map((_, i) => {
          return (
            <div
              className="w-full bg-[#F8F8FF] flex flex-col items-center justify-center gap-2 text-center rounded-xl p-5"
              key={i}
            >
              <img
                src="/profile01.png"
                alt="profile"
                className="w-[48px] h-[48] rounded-full"
              />

              <div>
                <p className="font-medium">Marc Atenson</p>
                <p className="text-sm secondary-text">marcnine@gmai.com</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AccountsRequestedList;
