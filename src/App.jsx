import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import Hero from './components/Hero';
import Ai_tools from './components/Ai_tools';
import AI_API from './components/AI_API';
import ToolsPage from './components/ToolsPage';

function App() {
  return (
    
  <BrowserRouter>
    <Routes>
      <Route path='header' element={<Header/>}/>
      <Route path='/' element={<Hero/>} />
      <Route path='ai_tools' element={<Ai_tools/>} />
      <Route path='ai_api' element={<AI_API/>} />
      <Route path='toolspage' element={<ToolsPage/>} />
    </Routes>
 </BrowserRouter>

  );
}

export default App;
