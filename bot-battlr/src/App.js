// App.js

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Botshow from "./components/Botshow";
import { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
function App() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/bots")
      .then((response) => response.json())
      .then((bots) => {
        setBots(bots);
      });
  }, []);

  function enlistBot(bot) {
    setBots(bots.map((b) => (b.id === bot.id ? { ...b, army: true } : b)));
  }

  function removeBot(bot) {
    setBots(bots.map((b) => (b.id === bot.id ? { ...b, army: false } : b)));
  }

  function deleteBot(bot) {
    const deletedBot = bots.filter((b) => b.id !== bot.id);
    setBots((bots) => deletedBot);

    // Delete in DB
    fetch(`http://localhost:4000/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => console.log(result));
  }

  return (
    <>
      <Navbar />

      <section className="jumbotron text-center">
        <div className="container">
          <div className="row">
            <Botshow
              records={bots.filter((b) => b.army)}
              removeBot={removeBot}
              deleteBot={deleteBot}
            />
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <BotCollection
              records={bots}
              enlistBot={enlistBot}
              deleteBot={deleteBot}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;