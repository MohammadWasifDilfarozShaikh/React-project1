import React from "react";
import Layout from "./component/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Blog from "./component/Blog";
import Contact from "./component/Contact";
import NoPage from "./component/NoPage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='blogs' element={<Blog />} />
            <Route path='contact' element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
