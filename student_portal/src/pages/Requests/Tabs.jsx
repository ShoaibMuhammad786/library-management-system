const Tabs = ({ activeTab, handleChangeTab }) => {
  return (
    <div className={"w-full max-w-[35%] grid grid-cols-4 gap-3"}>
      <button
        type="button"
        onClick={() => handleChangeTab("all")}
        className={`p-2 rounded-md text-sm font-medium ${activeTab === "all" ? "orangeBg text-black" : "blueBg"}`}
      >
        All
      </button>
      <button
        type="button"
        onClick={() => handleChangeTab("accepted")}
        className={`p-2 rounded-md text-sm font-medium ${activeTab === "accepted" ? "orangeBg text-black" : "blueBg"}`}
      >
        Accepted
      </button>
      <button
        type="button"
        onClick={() => handleChangeTab("pending")}
        className={`p-2 rounded-md text-sm font-medium ${activeTab === "pending" ? "orangeBg text-black" : "blueBg"}`}
      >
        Pending
      </button>
      <button
        type="button"
        onClick={() => handleChangeTab("rejected")}
        className={`p-2 rounded-md text-sm font-medium ${activeTab === "rejected" ? "orangeBg text-black" : "blueBg"}`}
      >
        Rejected
      </button>
    </div>
  );
};

export default Tabs;
