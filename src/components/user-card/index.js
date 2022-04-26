import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
// import { useNavigate } from "react-router-dom";
import { useSelector , useDispatch} from "react-redux";
import { logUserOut } from "../../storage/redux/user/actions";

export default function UserCard({ user }) {
  const username = useSelector((state) => state.currentUser.username);
    // const navigate = useNavigate();
    const dispatch = useDispatch();

    const logOut = () => {
      
   dispatch(logUserOut(username))

  };

  return (
    <>
      <div className="ui comments">
        <div className="comment">
          <div className="avatar">
            <img
              className="circular  small image"
              src={user.avatar}
              alt="avatar"
            />
          </div>
          <div className="content">
            <div className="author">{user.name}</div>
            <div className="text">{user.event}</div>
          </div>
        </div>
      </div>
      <button
        className="ui secondary button"
        type="button"
        onClick={() => logOut()}
      >
        <i className="left chevron icon" />
        Log Out
      </button>
    </>
  );
}
UserCard.defaultProps = {
  user: {},
};

UserCard.propTypes = {
  user: PropTypes.instanceOf(Object),
};
