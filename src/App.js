import React from 'react';

import Navbar from './components/navbar/Navbar';

import {
  BrowserRouter, Route, Routes

} from "react-router-dom";
import Home from './pages/Home';
import Footer from './Footer';
import Video from './pages/Video';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/videos/:videoId' element={<Video/>} />

    </Routes>
    <Footer/>

     
    </BrowserRouter>




  );
}

export default App;
