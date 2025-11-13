import React from "react";
import { FaSortDown } from "react-icons/fa";

const count = [
  {
    count: "145",
    title: "Borrowed Books",
    stat: 2,
  },
  {
    count: "317",
    title: "Total Users",
    stat: 4,
  },
  {
    count: "163",
    title: "Total Books",
    stat: 2,
  },
];

const Statistics = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-5">
      {count?.map((c, i) => (
        <div key={i} className="h-[114px] flex flex-col items-start justify-between py-4 px-8 rounded-xl bg-white">
          <div className="flex items-center gap-3">
            <span className="text-[#64748B] font-medium">{c?.title}</span>
            <span
              className={`font-medium flex items-center ${
                i === 0 ? "text-[#E27233]" : "text-[#2CC171]"
              }`}
            >
              {i === 0 ? (
                <FaSortDown className="text-[#E27233] text-lg block relative -top-1" />
              ) : (
                <FaSortDown className="text-lg block relative -bottom-1 rotate-180" />
              )}
              {c?.stat}
            </span>
          </div>
          <p className="font-semibold text-[28px]">{c?.count}</p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
