import React from "react";
import BotCard from "./BotCard";

function Botshow({ records, removeBot, deleteBot }) {
  return (
    <>
      {records.map((bot) => {
        return (
          <>
            <BotCard
              key={bot.id}
              record={bot}
              clickEvent={removeBot}
              deleteBot={deleteBot}
            />
          </>
        );
      })}
    </>
  );
}

export default Botshow;