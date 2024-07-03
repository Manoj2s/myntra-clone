import React from "react";
import { BrowserRouter as Router,Route, Routes, useLocation,} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/men" element={<Home category="men" />} />
          {/* Add more routes as needed */}
        </Routes>
        <FooterWrapper />
      </div>
    </Router>
  );
};

const FooterWrapper = () => {
  const location = useLocation();

  // Add paths where you don't want the footer to be shown
  const hideFooterPaths = ["/profile"];

  return !hideFooterPaths.includes(location.pathname) ? <Footer /> : null;
};

export default App;
