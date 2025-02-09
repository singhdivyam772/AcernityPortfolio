// App.jsx
import React from "react";
import "./index.css";
import { NavbarDemo } from "./AllComponents/Navbar";

import LandingPage from "./Pages/LandingPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className=" bg-neutral-950">
      <NavbarDemo />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/blog" element={<BlogPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
