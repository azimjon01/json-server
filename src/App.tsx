import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import Navbar from "./components/navbar/navbar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Update from "./pages/update";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="update/:id" element={<Update />}></Route>
      </Routes>
    </div>
  );
}

export default App;
