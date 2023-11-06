// BotCollection.js
import React from "react";
import BotCard from "./BotCard";

function BotCollection({ records, enlistBot, deleteBot }) {
  return (
    <div className="row">
      {records.map((bot) => (
        <BotCard
          key={bot.id}
          record={bot}
          clickEvent={enlistBot}
          deleteBot={deleteBot}
        />
      ))}
    </div>
  );
}

export default BotCollection;