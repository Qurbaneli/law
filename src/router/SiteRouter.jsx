import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
//import pages
import Home from "../pages/Home/Home";
import ServiceDetail from "../pages/ServiceDetail/ServiceDetail";
import AllServices from "../pages/AllServices/AllServices";
import ScrollToTop from "../helper/ScrollToTop ";
import TeamDetail from "../pages/TeamDetail/TeamDetail";

function SiteRouter() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service/:id" element={<ServiceDetail />} />
      <Route path="/services" element={<AllServices />} />
      <Route path="/team/:id" element={<TeamDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default SiteRouter;
