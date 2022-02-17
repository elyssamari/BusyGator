import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Members from './Pages/Members';

function App() {
  return (
    
    <BrowserRouter>
        <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/about" element={<About />} />
        <Route path="/about/:username" element={ <Members /> }/>
    </Routes>

    </BrowserRouter>

  );
}

export default App;