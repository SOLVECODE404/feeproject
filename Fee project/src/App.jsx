// src/App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import Home4 from "./pages/Home4";
import BlogDetails from "./components/Blog/BlogDetails";
import Aos from "aos";
import "aos/dist/aos.css";
import Layout2 from "./components/Layout/Layout2";
import SignUp from "../Auth/Signup";
import Login from "../Auth/Login";

function App() {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home-v3" element={<Home3 />} />
          <Route path="home-v4" element={<Home4 />} />
          <Route path="blog/blog-details" element={<BlogDetails />} />
        </Route>
        <Route path="/home-v2" element={<Layout2 />}>
          <Route index element={<Home2 />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
