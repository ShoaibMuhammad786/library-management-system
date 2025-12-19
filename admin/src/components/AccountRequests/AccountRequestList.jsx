import React, { useEffect } from "react";
import { GoTrash } from "react-icons/go";
import { RiEditLine } from "react-icons/ri";
import List from "./List";
import { useSearchParams } from "react-router-dom";
import { useGetUsersQuery } from "../../services/users/authApi";
import PageLoader from "../Global/PageLoader";
import ErrorPage from "../Global/ErrorPage";

const AccountRequestList = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  const { data, error, isError, isLoading, refetch } = useGetUsersQuery({
    search: searchTerm,
  });

  if (isLoading) return <PageLoader />;

  if (isError) return <ErrorPage />;
  return (
    <div className="w-full bg-white rounded-xl p-6">
      <div className="w-full flex items-center justify-between">
        <h2 className="section-heading">Account Registration Requests</h2>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="secondary-text text-sm">Oldest to Recent</span>
            <img
              src="/arrow-swap.png"
              alt="filter icon"
              className="w-[16px] h-[16px]"
            />
          </div>
        </div>
      </div>

      {data && data?.data?.length > 0 ? (
        <List data={data} />
      ) : (
        <div className="w-full bg-white rounded-xl p-6">
          <div className="w-full flex items-center justify-center text-center min-h-screen px-4">
            <p className="text-sm text-gray-500">No users found.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountRequestList;
