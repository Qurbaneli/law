import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
//import pages
import Home from "../pages/Home/Home";
import ServiceDetail from "../pages/ServiceDetail/ServiceDetail";
import AllServices from "../pages/AllServices/AllServices";
import ScrollToTop from "../helper/ScrollToTop ";
import TeamDetail from "../pages/TeamDetail/TeamDetail";
import News from "../pages/News";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Blog from "@/pages/Blog";
import CareerForm from "@/pages/CareerForm";

function SiteRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/services" element={<AllServices />} />
        <Route path="/team/:id" element={<TeamDetail />} />
        <Route path="/news" element={<News />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career-form" element={<CareerForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default SiteRouter;
