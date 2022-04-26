import React from 'react';
import PropTypes from "prop-types";
import "./style.scss";

require("../../lib/comeon.game-1.0.min");

function GameCard({game,gameActivator}){
    return (
      <>
        <div className="item">
          <div className="image">
            <img
              className="ui middle aligned"
              src={game.icon}
              alt="game thumbnail"
            />
          </div>
          <div className="content">
            <h3 className="ui header">{game.name}</h3>
            <div className="description">
              <p>{game.description}</p>
            </div>
            <button
              className="ui secondary right floated button play-button"
              type="button"
              onClick={() => {
                gameActivator(true);
                window.comeon.game.launch(game.code);
              }}
            >
              Play
              <i className="right chevron icon" />
            </button>
          </div>
        </div>
        <div className="ui divider" />
      </>
    );
};

export default GameCard;

GameCard.defaultProps = {
  game: {},
  gameActivator:undefined
}

GameCard.propTypes = {
  game: PropTypes.instanceOf(Object),
  gameActivator:PropTypes.func
}