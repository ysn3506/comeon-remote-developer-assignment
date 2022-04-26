import React from 'react';
import PropTypes from "prop-types";
import "./style.scss"

function GameCategories({categories}) {
    return (
        <div className="ui list">
          {categories.map(({id,name} )=> (
            <div className="item" key={id}>
              <h3>{name}</h3>
            </div>
          ))}
        </div>
    );
}

export default GameCategories;



GameCategories.propTypes = {
  categories: PropTypes.arrayOf(Object).isRequired
};

