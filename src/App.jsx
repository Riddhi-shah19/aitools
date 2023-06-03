import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import Hero from './components/Hero';
import Ai_tools from './components/Ai_tools';
import AI_API from './components/AI_API';

function App() {
  return (
    
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Header/>}/>
      <Route path='hero' element={<Hero/>} />
      <Route path='ai_tools' element={<Ai_tools/>} />
      <Route path='ai_api' element={<AI_API/>} />
    </Routes>
 </BrowserRouter>

  );
}

export default App;
