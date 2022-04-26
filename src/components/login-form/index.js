import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {setCurrenUser} from "../../storage/redux/user/actions";
import "./style.scss";

function LoginForm() {
  const userRef = useRef();
  const passwordRef = useRef();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState();

  // in order to provide form validation, states below are created.
  const [isUserNameNull, setUserNameNull] = useState(false);
  const [isPasswordNull, setPasswordNull] = useState(false);

  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.currentUser);
  const navigate = useNavigate();

  const submitUser = (e) => {
    e.preventDefault();
    if (user && password) {
      const player = { username: user, password };
      dispatch(setCurrenUser(player));
      userRef.current.value = "";
      passwordRef.current.value = "";
      if (currentUser.name) navigate("/home");
    } else {
      setUserNameNull(true);
      setPasswordNull(true);
    }
  };

  const wrongUser = useSelector((state) => state.invalidUserEntry);

  return (
    <div className="form-wrapper">
      <div className="login-form">
        <form className="ui form">
          <div className={`field ${isUserNameNull && "error"}`}>
            <div className="label">
              <label htmlFor="username">Username</label>
              {isUserNameNull && <span>Required</span>}
            </div>
            <input
              ref={userRef}
              type="text"
              id="username"
              name="username"
              placeholder="User Name"
              onChange={() => {
                setUserNameNull(false);
                setUser(userRef.current.value);
              }}
            />
          </div>
          <div className={`field ${isPasswordNull && "error"}`}>
            <div className="label">
              <label htmlFor="password">Password</label>
              {isPasswordNull && <span>Required</span>}
            </div>

            <input
              ref={passwordRef}
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={() => {
                setPasswordNull(false);
                setPassword(passwordRef.current.value);
              }}
            />
          </div>
          <button
            className="ui button"
            type="submit"
            onClick={(e) => submitUser(e)}
          >
            Log In
          </button>
        </form>
      </div>
      <p className="wrong-user">{wrongUser && "Invalid Username or Password"}</p>
    </div>
  );
}

export default LoginForm;
