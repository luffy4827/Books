import "./App.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Courses from "./Pages/Courses";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
