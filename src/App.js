import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Components/home';
import About from './Components/about';
import AddEmployee from './Components/addEmployee';
import Sidebar from './Components/sidebar';
import Header from './Components/header';
import './App.css'

const App = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <BrowserRouter>
          <div className='layout'>
            <Sidebar />
            <div>
              <Routes>
                {/* <Route path='/' element={<div className='image'></div>} /> */}
                <Route exact path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/addEmployee" element={<AddEmployee />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;


