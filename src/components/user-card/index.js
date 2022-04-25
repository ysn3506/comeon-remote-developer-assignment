

import React from 'react';
import PropTypes from "prop-types";



export default function UserCard({user}) {
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
        <button className="ui secondary button" type="button">
          <i className="left chevron icon" />
          Log Out
        </button>
      </>
    );

}
UserCard.defaultProps = {
    user:{}
}

UserCard.propTypes = {
    user: PropTypes.instanceOf(Object)
}