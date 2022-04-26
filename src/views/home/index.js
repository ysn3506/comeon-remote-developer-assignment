import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getGames,getCategories } from "../../services/apis";
import UserCard from "../../components/user-card";
import "./style.scss";
import GameCard from "../../components/game-card";
import GameCategories from "../../components/game-categories";

function Home() {
    const [games, setGames] = useState([]);
    const [categories, setCategories] = useState([]);

    const user = useSelector((state) => state.currentUser);
  
  useEffect(() => {
    const getGamesList = async () => {
        const gamesList = await getGames();
        const categoryList = await getCategories();
        setGames(gamesList);
        setCategories(categoryList);
    };
    getGamesList();
  }, [user]);
    
  return (
    <div className="home-wrapper">
      <div className="ui stackable two column row grid ">
        <div className="twelve wide column">
          <UserCard user={user} />
        </div>
        <div id="searchbar" className="four wide column">
          <div className=" ui icon input ">
            <input type="text" placeholder="Search Game" />
            <i className="search icon" />
          </div>
        </div>
      </div>
      <div className="ui stackable two column grid games-categories">
        <div className="twelve wide column">
          <h3 className="header">Games</h3>
          <div className="ui divider" />
          <div className="ui very relaxed items">
            {games ? (
              games.map((game) => <GameCard key={game.code} game={game} />)
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
        <div className="four wide column">
          <h3 className="header">Categories</h3>
          <div className="ui divider" />
          {categories ? (
            <GameCategories categories={categories} />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
