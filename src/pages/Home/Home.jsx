import React from "react";

//Import components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Team from "../../components/Team/Team";
import Partners from "../../components/Partners/Partners";
import Contact from "../../components/Contact/Contact";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Team />
      <Partners />
      <Contact />
    </div>
  );
}

export default Home;
