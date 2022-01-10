import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import LandPage from "./pages/LandPage";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";

function ScrollToTop({ children }) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <div className="App">{children}</div>;
}

function Navigations() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<LandPage />} />
          <Route exact path="/feature" element={<Features />} />
          <Route exact path="/pricing" element={<Pricing />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default Navigations;
