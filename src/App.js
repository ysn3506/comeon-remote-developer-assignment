import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/login";
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
