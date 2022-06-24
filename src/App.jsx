import React from "react";
import Header from "./Components/header/header";
import Nav from "./Components/nav/nav";
import About from "./Components/About/About";
import Exp from "./Components/exp/exp";
import Services from "./Components/services/services";
import Portifolio from "./Components/portifolio/portifolio";
// import Testimonial from "./Components/testimonials/testimonial.jsx";
import Contact from "./Components/contact/contact";
import Footer from "./Components/footer/footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Exp />
      <Services />
      <Portifolio />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
