// App.jsx
import React from "react";
import "./index.css";
import { NavbarDemo } from "./AllComponents/Navbar";
import Footer from "./AllComponents/Footer";
import LandingPage from "./Pages/LandingPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className=" bg-neutral-950">
      <NavbarDemo />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
