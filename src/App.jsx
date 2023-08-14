import { useState } from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
const App = () => {
  const [dark, setDark] = useState(false);
  const toggleDark = () => {
    setDark(!dark);
  };

  return (
    <div className={dark ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-slate-800 min-h-screen h-full">
        <Navbar toggleDark={toggleDark} />
        <Body />
      </div>
    </div>
  );
};

export default App;
