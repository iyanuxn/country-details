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
      <Navbar toggleDark={toggleDark} />
      <Body />
    </div>
  );
};

export default App;