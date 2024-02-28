
import CardHero from './components/card/Card';
import heroes from './data/data.json';
import Header from './components/header/Header';

const Superheroes = () => {
  return (
    <div>
      <Header />
      <div className="item-cards">
        {heroes.map((item) => (
          <CardHero key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Superheroes;
