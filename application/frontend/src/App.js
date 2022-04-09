/**
 * COPYRIGHT San Francisco State University SCS648 Team 4 - SP22
 *
 *
 *
 * This File contains the App.js for the application
 * This component controls the routing and has the main layout of the application
 */

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import M2NavBar from './Components/M2NavBar';
import SubNavBar from './Components/SubNavBar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Post from './Pages/Post';
import MyPage from './Pages/MyPage';
import Cart from './Pages/Cart';
import Messages from './Pages/Messages';
import AdminLogin from './Pages/AdminLogin';
import { DataProvider } from './DataContext/DataContext';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <M2NavBar />
        <SubNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/Messages" element={<Messages />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
        </Routes>
        <Footer />
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
