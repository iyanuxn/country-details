import { useState } from "react";
import Navbar from "./components/Navbar";
const App = () => {
  const [dark, setDark] = useState(false);
  const toggleDark = () => {
    setDark(!dark);
  };

  return (
    <div className={dark ? "dark" : ""}>
      <Navbar dark={dark} toggleDark={toggleDark} />
    </div>
  );
};

export default App;
