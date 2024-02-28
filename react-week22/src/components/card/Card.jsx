
function CardHero({ item }) {
  return (
    <div key={item.id} className="item-card">
      <h2>{item.name}</h2>
      <p>{item.universe}</p>
      <p>{item.alterego}</p>
      <p>{item.occupation}</p>
      <p>{item.friends}</p>
      <p>{item.superpowers}</p>
      <img src={item.url} alt={item.name} />
    </div>
  );
}

export default CardHero;
