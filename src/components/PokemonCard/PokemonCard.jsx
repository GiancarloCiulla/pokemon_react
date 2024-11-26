import React from 'react';
import '../../styles/components/_PokemonCard.scss';

const PokemonCard = ({ pokemon }) => {
  // Función para determinar la clase CSS según el tipo principal del Pokémon
  const getCardClassByType = (type) => {
    switch (type.toLowerCase()) {
      case 'fire':
        return 'pokemon-card--fire';
      case 'water':
        return 'pokemon-card--water';
      case 'grass':
        return 'pokemon-card--grass';
      case 'electric':
        return 'pokemon-card--electric';
      case 'rock':
        return 'pokemon-card--rock';
      case 'ground':
        return 'pokemon-card--ground';
      case 'psychic':
        return 'pokemon-card--psychic';
      case 'poison':
        return 'pokemon-card--poison';
      default:
        return 'pokemon-card--default';
    }
  };

  // Determinar la clase basada en el primer tipo del Pokémon
  const cardClass = getCardClassByType(pokemon.types[0]);
console.log("CLASE", cardClass)
  return (
    <div className={`pokemon-card ${cardClass}`}>
      <div className="pokemon-card__header">
        <h1 className="pokemon-card__name">{pokemon.name}</h1>
        <span className="pokemon-card__id">#{String(pokemon.id).padStart(3, '0')}</span>
        <img className="pokemon-card__image" src={pokemon.image} alt={pokemon.name} />
      </div>

      <div className="pokemon-card__details">
        <div className="pokemon-card__types">
          {pokemon.types.map((type) => (
            <span key={type} className={`pokemon-card__type pokemon-card__type--${type.toLowerCase()}`}>
              {type}
            </span>
          ))}
        </div>

        <div className="pokemon-card__about">
          <h2>About</h2>
          <div className="pokemon-card__stats">
            <p>
              <i className="fas fa-weight"></i> {pokemon.weight / 10} kg
            </p>
            <p>
              <i className="fas fa-ruler-vertical"></i> {pokemon.height / 10} m
            </p>
          </div>
        </div>

        <div className="pokemon-card__base-stats">
          <h2>Base Stats</h2>
          {pokemon.stats.map((stat) => (
            <div key={stat.name} className="pokemon-card__stat">
              <span className="pokemon-card__stat-name">{stat.name.toUpperCase()}</span>
              <span className="pokemon-card__stat-value">{stat.value}</span>
              <div className="pokemon-card__stat-bar">
                <div
                  className="pokemon-card__stat-bar-fill"
                  style={{ width: `${(stat.value / 200) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
