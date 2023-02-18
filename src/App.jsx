import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";

const App = () => {
  return (
    <>
      <Navbar/>
      <Home />
      <About />
    </>
  )
}

export default App;
