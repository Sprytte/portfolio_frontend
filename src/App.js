import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Homepage';
import Timeline from './Pages/Timeline';
import Cards from './Pages/cards';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/time" element={<Timeline />} />
          <Route path="/card" element={<Cards />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
