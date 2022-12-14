import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from './pages/index';
import About from './pages/about';
import Projects from './pages/projects';
import Timeline from './pages/timeline';
import Contact from './pages/contact';
import Login from './pages/login';
import Error404 from './pages/error404';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<Index />} />
          <Route path='/o-nas' exact element={<About />} />
          <Route path='/projekty' exact element={<Projects />} />
          <Route path='/timeline' exact element={<Timeline />} />
          <Route path='/kontakt' exact element={<Contact />} />
          <Route path='/logowanie' exact element={<Login />} />
          <Route path='*' exact element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
