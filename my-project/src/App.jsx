import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './assets/page/Home';
import AboutUs from './assets/page/AboutUs';
import Service from './assets/page/Service';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/Service' element={<Service />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;