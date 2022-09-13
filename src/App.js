
import React from 'react';
import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import Home from './pages';
import SigninPage from './pages/signin';
import CheckWallet from './pages/wallet';


function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/signin" element={<SigninPage/>} exact />
        <Route path="/wallet" element={<CheckWallet/>} exact />
        

      </Routes>
    </Router>
    
   
  );
}

export default App;
