import React,{useState, useEffect} from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Login from "./views/login";
import Header from "./components/header";
import Home from "./views/home";
import Error from "./views/error";
import OnBoarding from "./views/onboarding";


function App() {
  const user = useSelector((state) => state.currentUser);
  const path = window.location;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
   const loadingDuration=setTimeout(() => {
     setLoaded(true);
     clearTimeout(loadingDuration);
   }, 1500);
  },[])

  if (!loaded) return <OnBoarding />
  
  return (
    <div className="App">
      <Header />
      <SwitchTransition mode="out-in">
        <CSSTransition key={path} classNames="fade" timeout={250}>
          <BrowserRouter>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  user?.name ? (
                    <Navigate to="/home" />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
              <Route
                path="/home"
                element={user?.name ? <Home /> : <Navigate to="/" />}
              />
              <Route
                path="/login"
                element={user?.name ? <Navigate to="/home" /> : <Login />}
              />
              <Route path="*" element={<Error />} />
            </Routes>
          </BrowserRouter>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default App;
