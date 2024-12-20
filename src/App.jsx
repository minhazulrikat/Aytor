import Home from "./assets/components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./assets/components/Shop/Shop";
import Pages from "./assets/components/Pages/Pages";
import Features from "./assets/components/Features/Features";
import Blogs from "./assets/components/Blogs/Blogs";
import Contact from "./assets/components/Contact/Contact";
import Feature1 from "./assets/components/Features/Feature1";
import Feature2 from "./assets/components/Features/Feature2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/features" element={<Features />} />
          <Route path="/features/features1" element={<Feature1 />} />
          <Route path="/features/features2" element={<Feature2 />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
