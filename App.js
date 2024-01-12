
import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Details from './Component/Details';
import Feedbacks from './Component/Feedbacks';
import Gallaries from './Component/Gallaries';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import { Routes, Route, } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />     
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Details' element={<Details/>}/>
          <Route path='/Feedbacks'element={<Feedbacks/>}/>
          <Route path='/Gallaries' element={<Gallaries/>}/>
          <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
