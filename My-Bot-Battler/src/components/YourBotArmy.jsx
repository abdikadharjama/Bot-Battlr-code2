import React from 'react';

function YourBotArmy({ army, releaseBot, dischargeBot }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <div key={bot.id}>
          <img src={bot.avatar_url} alt={bot.name} style={{width: '100px', height: '100px'}} />
          <h3>{bot.name}</h3>
          <button onClick={() => releaseBot(bot.id)}>Release</button>
          <button onClick={() => dischargeBot(bot.id)} style={{marginLeft: '10px'}}>Discharge</button>
        </div>
      ))}
    </div>
  );
}

export default YourBotArmy;
