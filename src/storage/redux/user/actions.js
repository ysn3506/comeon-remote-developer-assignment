import Cookies from "js-cookie";
import { userLogin, userLogout } from "../../../services/apis";
import constants from "./constants";
import {  inFiveMinutes } from "../../../utilities";

export const setCurrenUser = (user) => (dispatch) => {
  userLogin(user)
    .then((resp) => {
      const userInfo = { ...resp.data.player, username: user.username };
      Cookies.set('logged-in',JSON.stringify(user),{expires:inFiveMinutes()})
      dispatch({
        type: constants.SET_CURRENT_USER,
        payload: userInfo,
      });
      dispatch({
        type: constants.USER_LOGIN_ERROR,
        payload: false,
      });
    })
    .catch(() => {
      Cookies.remove("logged-in");
      dispatch({
        type: constants.USER_LOGIN_ERROR,
        payload: "true",
      });
      dispatch({
        type: constants.SET_CURRENT_USER,
        payload: {},
      });
    });
};

export const logUserOut = (username) => (dispatch) => {
  userLogout(username).catch(() => {
    Cookies.remove("logged-in");
    dispatch({
      type: constants.SET_CURRENT_USER,
      payload: {},
    });
  });
};

export default { setCurrenUser, logUserOut };
