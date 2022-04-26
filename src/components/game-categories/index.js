import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

function GameCategories({ categories, selectCategory, activeCategory }) {
  return (
    <div className="ui link list">
      {categories.map(({ id, name }) => (
        <button
          className={`item ${activeCategory === id && "active"}`}
          type="button"
          key={id}
          onClick={() => selectCategory(id)}
        >
          <h3>{name}</h3>
        </button>
      ))}
    </div>
  );
}

export default GameCategories;

GameCategories.defaultProps = {
  selectCategory: undefined,
  activeCategory: undefined,
};

GameCategories.propTypes = {
  categories: PropTypes.arrayOf(Object).isRequired,
  selectCategory: PropTypes.func,
  activeCategory: PropTypes.func,
};
