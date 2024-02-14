import React from 'react';

function BotCollection({ bots, enlistBot }) {
  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <div key={bot.id} onClick={() => enlistBot(bot)}>
          <img src={bot.avatar_url} alt={bot.name} />
          <h2>{bot.name}</h2>
          <p>{bot.catchphrase}</p>
        </div>
      ))}
    </div>
  );
}

export default BotCollection;
