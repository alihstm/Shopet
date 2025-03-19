import { useState } from "react";
import Header from "../src/Header/Header.jsx";
import HeroSection from "../src/HeroSection/HeroSection.jsx";
import NewProduct from "../src/NewProduct/newProduct.jsx";
import SpecialProduct from "../src/SpecialProduct/SpecialProduct.jsx";
import GroomingSupplies from "../src/GroomingSupplies/GroomingSupplies.jsx";
import Blog from "../src/Blog/Blog.jsx";
import Footer from "../src/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <NewProduct />
      <SpecialProduct />
      <GroomingSupplies />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
