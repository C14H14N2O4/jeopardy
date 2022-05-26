import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import './index.css';
import App from './App';
import Sign from './routes/Sign'
import About from './routes/About'
import Button from './routes/Button'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/sign" element={<Sign/>}/>
      <Route path="/about" element={<About />} />
      <Route path="/button" element={<Button />} />
    </Routes>
  </BrowserRouter>
);

