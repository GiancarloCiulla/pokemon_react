import React from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';
import '../../styles/components/_PokemonList.scss'

const ListaPokemon = ({ pokemons }) => {
  if (!pokemons.length) {
    return <p>No hay Pokémon que mostrar. ¡Realiza una búsqueda!</p>;
  }

  return (
    <div>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default ListaPokemon;
