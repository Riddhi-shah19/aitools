
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Ai_tools from "./components/Ai_tools";
import AI_API from "./components/AI_API";
import ApiList from "./components/ApiList";
import Sidebar_tools from "./components/Sidebar_Tools";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="header" element={<Header />} />
        <Route path="/" element={<Hero />} />
        <Route path="ai_tools" element={<Ai_tools />} />
        <Route path="ai_api" element={<AI_API />} />
        <Route path="apilist" element={<ApiList />} />
        <Route path='sidebar_tools' element={<Sidebar_tools/>}/>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
