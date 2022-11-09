import { useState } from "react";
import "./App.css";
import ClientForm from "./pages/ClientForm/ClientForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageNotFound from "./components/PageNotFound/PageNotFound";

import ComplainForm from "./pages/ComplainForm/ComplainForm";

import Home from "./pages/home/Home";
import AboutUs from "./pages/AboutUS/AboutUs";

function App() {
  const user = "";
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          key="complainform"
          path="/complainform"
          element={<ComplainForm />}
        />
        <Route key="clientform" path="/clientform" element={<ClientForm />} />
        <Route key="aboutus" path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
