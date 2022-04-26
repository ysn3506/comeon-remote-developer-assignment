import { userLogin, userLogout } from "../../../services/apis";
import constants from "./constants";

export const setCurrenUser = (user) => (dispatch) => {
  userLogin(user)
    .then((resp) => {
      const userInfo={... resp.data.player,username:user.username}
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
      dispatch({
        type: constants.USER_LOGIN_ERROR,
        payload: "true",
      });
       dispatch({
         type: constants.SET_CURRENT_USER,
         payload:{},
       });
    });
};


export const logUserOut = (username) => (dispatch) => {
  userLogout(username).catch(() => {
    dispatch({
      type: constants.SET_CURRENT_USER,
      payload: {}
    })
  })
}

export default {setCurrenUser, logUserOut}