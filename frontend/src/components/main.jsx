import React from 'react'
import { useEffect, useState } from "react";
import { API, getPokemon } from "../functions/fetch";
import PokeCard from "./poke-card";
import './main.css'
import SearchPokemon from './search';

// Main functional component
export default function Main() {
  const [pokemons, setPokemons] = useState(null)
  const [favorite, setFavorite] = useState("")

  useEffect(() => {
    init()
  }, [])

  const init = () => {
    getPokemon("").then(response => setPokemons(response.results))
  }


  const handleSearch = async (query) => {
    try {
      const response = await fetch(`${API}${query.toLowerCase()}`);
      if (response.ok) {
        const data = await response.json();
        setPokemons([data]); // Poner en un array para mantener consistencia en la lista
      } else {
        setPokemons([]); // Si no se encuentra el Pokémon, vaciar la lista
        // alert("Pokémon no encontrado");
      }
    } catch (error) {
      console.error("Error al buscar el Pokémon:", error);
    }
  };


  if (pokemons === null) return <div>Loading...</div>

  return (
    <div>

      <SearchPokemon onSearch={handleSearch} onReset={init} />

      <div className="flex-container">
        {
          pokemons.length > 0 ?
            pokemons.map((pokemon) => (
              <PokeCard name={pokemon.name} favorite={favorite} setFavorite={setFavorite} />
            ))
            :
            <div>No se encontraron pokemones</div>
        }
      </div>

    </div>
  );
}
