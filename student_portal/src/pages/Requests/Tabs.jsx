const tabStatus = [
  // {
  //   title: "All",
  //   key: "all",
  // },
  {
    title: "Pending",
    key: "pending",
  },
  {
    title: "Borrowed",
    key: "borrowed",
  },
  {
    title: "Returned",
    key: "returned",
  },
  {
    title: "Late Returned",
    key: "late-returned",
  },
  {
    title: "Rejected",
    key: "rejected",
  },
  {
    title: "Cancelled",
    key: "cancelled",
  },
];

const Tabs = ({ status, setStatus }) => {
  return (
    <div className={"w-full max-w-[20%] flex justify-end"}>
      <select
        name="requestStatus"
        id="requestStatus"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="text-gray-100 px-4 py-1 min-w-[150px] outline-none blueBg"
      >
        <option value="all" selected>
          All
        </option>
        {tabStatus.map((tb) => {
          return (
            <option value={tb.key} key={tb.key} className="text-gray-100">
              {tb.title}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Tabs;
