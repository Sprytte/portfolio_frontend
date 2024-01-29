import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import Timeline from './Pages/Timeline';
import Cards from './Pages/cards';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Experience from './Pages/Experience';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/time" element={<Timeline />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
