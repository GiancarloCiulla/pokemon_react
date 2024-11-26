import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchForm from './components/SearchForm/SearchForm';
import PokemonList from './components/PokemonList/PokemonList';
import './styles/views/_App.scss';
import './styles/components/_NavBar.scss';

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  // Función para manejar la búsqueda de Pokémon
  const handleDebouncedSearch = async (query) => {
    if (!query.trim()) return;

    // Validar si el Pokémon ya está en la lista (por nombre o ID)
    if (pokemons.some((pokemon) => pokemon.name === query.toLowerCase() || pokemon.id === parseInt(query))) {
      console.log('El Pokémon ya está en la lista.');
      return;
    }

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
      if (!response.ok) throw new Error('No se encontró el Pokémon');
      const data = await response.json();

      const pokemon = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        weight: data.weight,
        height: data.height,
        types: data.types.map((typeInfo) => typeInfo.type.name),
        stats: data.stats.map((statInfo) => ({
          name: statInfo.stat.name,
          value: statInfo.base_stat,
        })),
      };

      // Agregar el Pokémon a la lista
      setPokemons((prevPokemons) => [...prevPokemons, pokemon]);
    } catch (error) {
      console.error(error.message);
      alert('No se encontró el Pokémon. Inténtalo de nuevo.');
    }
  };

  return (
    <Router>
      <div>
        {/* Barra de navegación */}
        <nav className="navbar">
          <Link to="/">Inicio</Link>
          <Link to="/new">Agregar Pokémon</Link>
        </nav>

        {/* Configuración de rutas */}
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1 style={{ textAlign: 'center' }}>Pokedex</h1>
                {/* Formulario de búsqueda */}
                <SearchForm onDebouncedSearch={handleDebouncedSearch} />
                {/* Lista de Pokémon */}
                <PokemonList pokemons={pokemons} />
              </div>
            }
          />
          {/* Rutas adicionales */}
          {/* <Route path="/new" element={<NewPokemonForm />} /> */}
          {/* <Route path="/pokemon/:id" element={<PokemonDetail />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
