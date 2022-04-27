import React, { useState, useEffect, Suspense } from "react";
import { useSelector } from "react-redux";
import { getGames, getCategories } from "../../services/apis";
import UserCard from "../../components/user-card";
import "./style.scss";
import GameCard from "../../components/game-card";
import GameCategories from "../../components/game-categories";
import sortArray from "../../utilities";

const GameLayout=React.lazy(()=>import('../game'))

function Home() {
  const [games, setGames] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);
  const [searchField, setSearchField] = useState("");

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

  const renderGames = () => {
    if (!games) return <p>Loading...</p>;

    const filteredGames = games.filter(
      (game) =>
        game.name.toLowerCase().includes(searchField) &&
        game.categoryIds.includes(activeCategory)
    );

    const sortedGames = sortArray(filteredGames, "name");

    if (sortedGames.length === 0) return <p>There is no match</p>;

    return sortedGames.map((game) => (
      <GameCard key={game.code} game={game} gameActivator={setIsGameActive} />
    ));
  };

  return (
    <div className="home-wrapper">
      <div className="ui stackable two column row grid ">
        <div className="twelve wide column">
          <UserCard user={user} />
        </div>
        <div id="searchbar" className="four wide column">
          <div className=" ui icon input ">
            <input
              type="text"
              placeholder="Search Game"
              onChange={(e) => setSearchField(e.target.value.toLowerCase())}
            />
            <i className="search icon" />
          </div>
        </div>
      </div>
      <div className="ui stackable two column grid games-categories">
        <div className="twelve wide column">
          <h3 className="header">Games</h3>
          <div className="ui divider" />
          <div className="ui very relaxed items">{renderGames()}</div>
        </div>
        <div className="four wide column">
          <h3 className="header">Categories</h3>
          <div className="ui divider" />
          {categories ? (
            <GameCategories
              categories={categories}
              activeCategory={activeCategory}
              selectCategory={setActiveCategory}
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <Suspense fallback={<p>Loading...</p>} >
        <GameLayout active={isGameActive} closeGame={setIsGameActive} />
      </Suspense>
    </div>
  );
}

export default Home;
