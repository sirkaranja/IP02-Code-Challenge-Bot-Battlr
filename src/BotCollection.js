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
  
      </div>
    </div>
  );
}

export default BotCollection;
