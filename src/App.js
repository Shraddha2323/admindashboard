import { useState } from "react";
import Body from "./Components/body";
import SideBar from "./Components/sidebar";
import logo from "./logo.svg";
import "./index.css";
import Navbar from "./Components/navbar";

function App() {
  const [openNavbar, setOpenNavbar] = useState(true);
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <div style={{ width: openNavbar ? "15vw" : "5vw" }} className="navbar">
          { <SideBar openNavbar={openNavbar} setOpenNavbar={setOpenNavbar} /> }
        </div>
        <div style={{ height: "100vh" }}>
          <Body />
        </div>
      </div>
    </>
  );
}

export default App;
