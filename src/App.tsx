import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import AdminDashboard from "./pages/AdminDashBoard";




function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/experience" element={<Blog />} /> */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}
export default App;
