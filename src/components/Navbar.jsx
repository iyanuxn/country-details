import { BsMoon } from "react-icons/bs";

const Navbar = ({ toggleDark }) => {
  return (
    <div className="transition duration-300 ease-in-out flex justify-between items-center h-16 shadow-md relative px-16 py-10 bg-white text-slate-800 dark:bg-slate-950 dark:text-white">
      <span className="text-2xl font-bold">Where in the world?</span>
      <button
        className="flex items-center gap-3 font-semibold"
        onClick={toggleDark}
      >
        <BsMoon />
        <span>Dark Mode</span>
      </button>
    </div>
  );
};

export default Navbar;
