import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Services from "./pages/Services";
import Contactus from "./pages/Contactus";
import Home from "./pages/Home";
import { BrowserRouter,Route,Routes } from "react-router-dom";  
export default function App()
{
  return(
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Services" element={<Services />} />
        <Route path="Contactus" element={<Contactus />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)


