import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./views/login";
import Header from './components/header';
import Home from './views/home';
import Error from "./views/error";

function App() {

  const user = useSelector((state) => state.currentUser);

  
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            exact path="/"
            element={user?.name ? <Navigate to="/home" /> : <Login />}
          />
          <Route
            path="/home"
            element={user?.name ? <Home/>:<Navigate to="/" />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
