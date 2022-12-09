import React from "react";
import Nav from "./components/Nav_bar";
import Home from "./components/Home";
import Service from "./components/Service";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import {BrowserRouter,Route,Routes} from "react-router-dom"
const App=()=>
{
  return(
    <BrowserRouter>
    <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/Service" element={<Service/>}/>
   <Route path="/About" element={<About/>}/>
   <Route path="/FAQ" element={<FAQ/>}/>
   <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>

  )
};
export default App;
