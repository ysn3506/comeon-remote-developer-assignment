import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Cookies from "js-cookie";
import Login from "./views/login";
import Header from "./components/header";
import Home from "./views/home";
import Error from "./views/error";
import OnBoarding from "./views/onboarding";
import { setCurrenUser } from "./storage/redux/user/actions";

function App() {
  const getLoggedInCookie = Cookies.get("logged-in");
  const dispatch = useDispatch();

  const user = useSelector((state) => state.currentUser);
  const path = window.location;
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
 if (getLoggedInCookie && Object.keys(user).length <= 0) {
   dispatch(setCurrenUser(JSON.parse(getLoggedInCookie)));
   // Becuase of mock server, authentication is very simple and storing user info on cookie without any protection is dangerous. 
   // JWT or HttpOnly could be set up on backend to provide secure auth.
 }

    //  this setTimeout is just for provide onboarding animation. It doesn't have any functionality except it.
    const loadingDuration = setTimeout(() => {
      setLoaded(true);
      clearTimeout(loadingDuration);
    }, 1500);
  }, []);



  if (!loaded) return <OnBoarding />;

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
                  user.name ? <Navigate to="/home" /> : <Navigate to="/login" />
                }
              />
              <Route
                path="/home"
                element={user.name ? <Home /> : <Navigate to="/" />}
              />
              <Route
                path="/login"
                element={user.name ? <Navigate to="/home" /> : <Login />}
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
