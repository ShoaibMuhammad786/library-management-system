import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DepartmentFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [department, setDepartment] = useState(
    searchParams.get("department") || "",
  );

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchParams(
        (prev) => {
          const params = new URLSearchParams(prev);
          if (department) {
            params.set("department", department);
          } else {
            params.delete("department");
          }
          return params;
        },
        { replace: true },
      );
    }, 500);

    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [department]);

  return (
    <div className="w-[212px] h-[38px] bg-[#232839] rounded-[10px] flex items-center justify-center gap-1 px-4">
      <label htmlFor="department" className="text-gray-400 whitespace-nowrap">
        Filter by:
      </label>

      <select
        id="department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        className="outline-none bg-[#232839] text-white w-full"
      >
        <option value="">Genre</option>
        <option value="">All</option>
        <option value="fiction">Fiction</option>
        <option value="history">History</option>
        <option value="science">Science</option>
        <option value="fantasy">Fantasy</option>
      </select>
    </div>
  );
};

export default DepartmentFilter;
