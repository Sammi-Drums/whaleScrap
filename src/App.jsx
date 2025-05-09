import React from 'react';
import './App.css'
import Navbar from './Layout/navbar/Navbar';
import { Route, Router, Routes } from 'react-router-dom';
import LandingPage from './Pages/landingpage/LandingPage';
import Layout from './Layout/Layout';

const App = () => {
  return (
      <div className='app'>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<LandingPage />} />
          </Route>
          
        </Routes>
      </div>
    
  )
}

export default App