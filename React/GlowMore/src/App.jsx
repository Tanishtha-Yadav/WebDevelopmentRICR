import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";

const App = () => {
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

        <div className="m-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi
          adipisci saepe, id fugiat atque qui necessitatibus iusto cumque minus
          aspernatur harum doloribus alias eius molestias dolorem in debitis
          voluptatum temporibus ipsa dolore nisi totam. Est asperiores quae iste
          amet nesciunt temporibus at perspiciatis consequuntur impedit voluptas
          ea, dignissimos vero expedita saepe ex molestiae illo aperiam earum
          autem, suscipit quasi quia ducimus deserunt recusandae! Temporibus
          architecto laudantium animi itaque recusandae. Eum quibusdam iusto
          architecto accusantium quasi quod expedita, numquam molestiae, iure
          sit animi nobis quam quidem delectus! Incidunt, porro, fugit quos
          libero adipisci aliquam alias illo odio voluptates voluptas cumque,
          soluta similique dolore recusandae tempore corrupti dolorum
          consectetur quis laudantium assumenda nihil reprehenderit velit!
          Cumque autem nulla natus, fugiat numquam possimus ea aut magnam
          inventore voluptate dicta in dolorum sequi porro deserunt dolores
          explicabo, delectus quisquam rem? Et, beatae ullam, repudiandae quod
          iure officia, mollitia placeat quas expedita autem eos sunt similique
          harum doloribus maxime tempore ipsam eum eligendi? Assumenda, veniam,
          ducimus possimus beatae magnam at explicabo molestias dicta eaque
          reprehenderit repellendus expedita animi nesciunt corrupti fugiat
          ipsam totam similique sapiente dolore iusto fuga excepturi modi sit
          deserunt? Consectetur fugiat eum quos illum magni. Veritatis
          exercitationem accusamus veniam fuga ad.
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
