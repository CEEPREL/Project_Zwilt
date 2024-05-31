import React from "react";
import Navbar from "./components/Navbar";
import FindSection from "./components/FindSection";
import FindTalent from "./components/FindTalent";
import Article from "./components/Article";
import Start from "./components/Start";
import Slider from "./components/Slider";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-28 px-6">
        {" "}
        <FindSection />
        <FindTalent />
        <Article />
        <Start />
        <Slider />
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default App;
