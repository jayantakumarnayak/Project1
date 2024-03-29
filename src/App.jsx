import "./styles/App.scss";
import "./styles/brand.scss";
import "./styles/contact.scss";
import "./styles/footer.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/mediaquery.scss";import Brands from "./components/Brands";
import Contacts from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import React from "react";
import Services from "./components/Services";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contacts />} />
        <Route path="/services" element={<Services />} />
        <Route path="/brands" element={<Brands />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App