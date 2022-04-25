import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getGames } from "../../services/apis";
import UserCard from "../../components/user-card";
import "./style.scss";


function Home() {
  const [games, setGames] = useState([]);

    const user = useSelector((state) => state.currentUser);
  useEffect(() => {
    const getGamesList = async () => {
      const gamesList = await getGames();
        setGames(gamesList);
    };
    getGamesList();
  }, [user]);
    console.log(games)
  return (
    <div className="home-wrapper">
      <div className="ui stackable two column row grid ">
        <div className="twelve wide column">
            <UserCard user={user}/>
        </div>
        <div className="four wide column  searchbar ">
          <div className=" ui icon input ">
            <input type="text" placeholder="Search..." />
            <i className="search icon" />
          </div>
        </div>
      </div>
      <div className="ui stackable two column grid games-categories">
        <div className="twelve wide column">
          <h3 className="header">Games</h3>
          <div className="ui divider" />
        </div>
        <div className="four wide column">
          <h3 className="header">Categories</h3>
          <div className="ui divider" />
        </div>
      </div>
    </div>
  );
}

export default Home;
