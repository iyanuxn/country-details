import { useState } from "react";
import { BsMoon } from "react-icons/bs";

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const toggleDark = () => {
    setDark(!dark);
  };

  return (
    <div className={dark ? "dark" : ""}>
      <div className="transition duration-300 ease-in-out flex justify-between items-center h-16 shadow-md px-16 text-slate-800 dark:bg-slate-950 dark:text-white">
        <span className="text-2xl font-bold">Where in the world?</span>
        <button
          className="flex items-center gap-3 font-semibold"
          onClick={toggleDark}
        >
          <BsMoon />
          <span>Dark Mode</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
