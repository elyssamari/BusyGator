import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import M2NavBar from './Components/M2NavBar';
import SubNavBar from './Components/SubNavBar';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Post from './Pages/Post';
import Listings from './Pages/Listings';
import Cart from './Pages/Cart';
import Orders from './Pages/Orders';
import Adminlogin from './Pages/Adminlogin';

import 'bootstrap/dist/css/bootstrap.min.css'
import { DataProvider } from './DataContext/DataContext';


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
          <Route path="/Listings" element={<Listings />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Adminlogin" element={<Adminlogin />} />
        </Routes>
        <Footer />
      </DataProvider>
    </BrowserRouter>

  );
}

export default App;