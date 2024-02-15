import React from 'react';
import heroes from './components/data/data.json';

const Superheroes= () => {
  
  return (
    <div className="superheroes">
      <h1>Superheroes</h1>
      <div className="item-cards">
        {heroes.map((item) => (
          <div key={item.id} className="item-card">
           
                <h2>{item.name}</h2>
                <p>{item.universe}</p>
                <p>{item.alterego}</p>
                <p>{item.occupation}</p>
            <p>{item.friends}</p>
                <p>{item.superpowers}</p>
                <img src={item.url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Superheroes;
