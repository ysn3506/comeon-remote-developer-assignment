import React from 'react';
import PropTypes from "prop-types";
import { CSSTransition } from 'react-transition-group';
import "./style.scss"


function GameLayout({active, closeGame}) {
    return (
      <CSSTransition
        in={active}
        appear
        timeout={200}
        classNames="game-transition"
      >
        <div className="game-wrapper">
          <button className="ui secondary button" type="button" onClick={()=>closeGame(false)}>
            <i className="left chevron icon" />
            Close
          </button>
          <div id="game-launch">.</div>
        </div>
      </CSSTransition>
    );
}

export default GameLayout;

GameLayout.defaultProps = {
    active: false,
    closeGame:undefined
}

GameLayout.propTypes = {
    active: PropTypes.bool,
    closeGame:PropTypes.func
}