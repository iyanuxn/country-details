import { BsSearch, BsChevronDown } from "react-icons/bs";

const indexContent = () => {
  return (
    <div className="bg-gray-100 px-16 py-10">
      <div className="flex justify-between items-center">
        <div className="flex w-max items-center text-sm bg-white px-5 py-3 gap-5 shadow-md rounded-md">
          <BsSearch />
          <input
            type="text"
            className="w-72 outline-none"
            placeholder="Search for a country..."
          />
        </div>
        <div className="relative">
          <div className="flex flex-col w-max items-center text-sm bg-white px-5 py-3 gap-5 shadow-md rounded-md">
            <button className="flex justify-between items-center gap-10  w-full">
              <span className="text-slate-800 font-semibold w-full">
                Filter by Region
              </span>
              <BsChevronDown />
            </button>
            <div className="flex flex-col absolute mt-9 bg-white shadow-md rounded-md px-5 py-3 gap-3 items-center w-full">
              <div>i'm aanananann option</div>
              <div>i'm aanananann option</div>
              <div>i'm aanananann option</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default indexContent;
