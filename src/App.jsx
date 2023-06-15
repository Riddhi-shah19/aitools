
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Ai_tools from "./components/Ai_tools";
import AI_API from "./components/AI_API";
import ApiList from "./components/ApiList";
import ToolsPage from './components/ToolsPage';
import Sidebar from "./components/Sidebar";
import Sidebar1 from "./components/Sidebar1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="header" element={<Header />} />
        <Route path="hero" element={<Hero />} />
        <Route path="ai_tools" element={<Ai_tools />} />
        <Route path="ai_api" element={<AI_API />} />
        <Route path="apilist" element={<ApiList />} />
        <Route path='toolspage' element={<ToolsPage/>} />
        <Route path='sidebar' element={<Sidebar/>} />
        <Route path='sidebar1' element={<Sidebar1/>} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
