import React from "react";
import { useGetBorrowedBooksQuery } from "../../services/bookApi";
import { useGetRequestsQuery } from "../../services/requestApi";

const RequestsList = () => {
  const page = 1;
  const limit = 10;
  const status = "pending";
  const search = "";
  const { data, isLoading, isError } = useGetRequestsQuery(
    {
      page,
      limit,
      status,
      search,
    },
    {
      refetchOnMountOrArgChange: true,
    },
  );

  if (isError) return;

  if (isLoading) return <p>Loading...</p>;

  console.log("pending requests >> ", data);

  return (
    <div>
      <h2 className="">Requests List</h2>
    </div>
  );
};

export default RequestsList;
