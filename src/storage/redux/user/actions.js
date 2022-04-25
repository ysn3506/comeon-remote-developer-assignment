import { userLogin } from "../../../services/apis";
import constants from "./constants";

const setCurrenUser = (user) => (dispatch) => {
  userLogin(user)
    .then((resp) => {
      dispatch({
        type: constants.SET_CURRENT_USER,
        payload: resp.data.player,
      });
      dispatch({
        type: constants.USER_LOGIN_ERROR,
        payload: "",
      });
    })
    .catch(() => {
      dispatch({
        type: constants.USER_LOGIN_ERROR,
        payload: "Incorrect User Name or Password",
      });
    });
};

export default setCurrenUser;
