import { BsMoon } from "react-icons/bs";

const Navbar = ({ toggleDark }) => {
  return (
    <div className="z-50 transition duration-300 ease-in-out flex flex-row justify-between items-center h-16 shadow-md fixed top-0 inset-0 px-5 md:px-16 py-10 bg-white text-slate-800 dark:bg-slate-700 dark:dark:text-slate-100">
      <span className="md:text-2xl text-sm font-bold">Where in the world?</span>
      <button
        className="flex items-center gap-3 font-semibold text-sm md:text-base"
        onClick={toggleDark}
      >
        <BsMoon />
        <span>Dark Mode</span>
      </button>
    </div>
  );
};

export default Navbar;
