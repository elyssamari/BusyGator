import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Aaron from './Pages/Aaron';
import Abdullah from './Pages/Abdullah';
import Elyssa from './Pages/Elyssa';
import Janvi from './Pages/Janvi';
import Samantha from './Pages/Samantha';
import Siqi from './Pages/Siqi';
import Vishal from './Pages/Vishal';


function App() {
  return (
    <BrowserRouter>
        <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/about" element={<About />} />
        <Route path="/about/Aaron" element={ <Aaron /> }/>
        <Route path="/about/Abdullah" element={ <Abdullah /> }/>
        <Route path="/about/Elyssa" element={ <Elyssa /> }/>
        <Route path="/about/Samantha" element={ <Samantha /> }/>
        <Route path="/about/Janvi" element={ <Janvi /> }/>
        <Route path="/about/Siqi" element={ <Siqi /> }/>
        <Route path="/about/Vishal" element={ <Vishal /> }/>

    </Routes>
    </BrowserRouter>

  );
}

export default App;