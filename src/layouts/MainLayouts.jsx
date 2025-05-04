import React from "react";
import Navbar from "../components/header/Navbar";
import { Outlet } from "react-router";
import Hero from "../components/header/Hero";
import Footer from "../components/footer/Footer";

const MainLayouts = () => {
  return (
    <div>
      <header className="w-11/12 mx-auto">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayouts;
