import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";

import { Home } from "./pages/Home";

import { Blog } from "./pages/Blog";
import { Shop } from "./pages/Shop";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <div className="bg-neutral-100 flex justify-center">
      <div className="w-full m-0 flex flex-col items-center min-h-[100vh]">
        <Header />
        <div className="max-w-[1440px] flex-grow pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <div className="flex-shrink-0 w-full bg-black flex justify-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
