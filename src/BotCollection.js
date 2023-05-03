import React, { useEffect, useState } from 'react';

function BotCollection(props) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('https://bots-database.onrender.com/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Bot Collection</h1>
      <div className="card-container">
        {bots.map(bot => (
          <div key={bot.id} className="card" onClick={() => props.onEnlistBot(bot)}>
            <img src={bot.avatar_url} alt={bot.name} />
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
