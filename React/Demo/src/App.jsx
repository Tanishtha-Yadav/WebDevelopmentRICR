import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          similique eius nisi? In magni dignissimos fugiat corporis, quos
          necessitatibus ea quis sed totam tempora architecto ullam saepe velit
          a voluptatibus! Nobis placeat consequuntur facere minima omnis tempora
          provident quo similique sunt non nam esse excepturi laboriosam
          quisquam, atque delectus asperiores autem, molestiae ut, sit ex velit
          perspiciatis officia natus! Amet veniam, suscipit voluptatibus dicta
          eum eligendi nemo maxime quasi officia quae dolore dolores sequi quod
          mollitia unde quidem qui eius porro eos perspiciatis totam nihil,
          nulla deleniti! Expedita reprehenderit facilis sed architecto hic
          doloribus nisi, dolor cum iure nesciunt. Ut. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Temporibus ad officia nobis
          repellendus vero voluptate! Facilis obcaecati ducimus consequuntur
          iste, animi autem natus dolores atque beatae dolor soluta nulla ad
          necessitatibus ipsum similique reprehenderit error officia laudantium
          amet nam consectetur possimus molestiae minus! Ipsam ullam ratione
          debitis itaque exercitationem in. Nihil quos sint labore, incidunt,
          corrupti molestias optio nemo perspiciatis animi voluptatem accusamus!
          Aliquid ex debitis ipsa quisquam reprehenderit, fugiat pariatur, quos
          doloribus, quis optio illum quod eum esse ipsum ab suscipit aspernatur
          deleniti aliquam illo? Repellendus aliquid vero blanditiis, ut nostrum
          eos sed odio nulla corporis quisquam temporibus deleniti ipsum quod
          dolore hic in? Molestias magni explicabo quasi mollitia, nemo nesciunt
          qui. Quis totam modi ullam iure aut natus similique itaque, doloribus
          assumenda doloremque eaque. Nisi magnam ab at quod eius iure sint
          dolore molestias saepe illo. Et quasi ducimus deserunt ipsa,
          perspiciatis cupiditate quaerat alias incidunt odio commodi recusandae
          dolorem quas suscipit fugit repellendus labore totam quod iure ipsum
          nemo, quis libero est facilis. Placeat harum, excepturi deleniti
          voluptatem quia neque autem, ea sapiente molestiae amet sit? Nobis nam
          at, illum veritatis obcaecati alias facilis, aut asperiores minus enim
          et praesentium consequuntur? Fugit nesciunt repellendus modi
          exercitationem. Itaque.
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
