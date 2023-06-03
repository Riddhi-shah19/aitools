import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import Hero from './components/Hero';
import Ai_tools from './components/Ai_tools';

function App() {
  return (
    
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Header/>}/>
      <Route path='hero' element={<Hero/>} />
      <Route path='ai_tools' element={<Ai_tools/>} />
    </Routes>
 </BrowserRouter>

  );
}

export default App;
