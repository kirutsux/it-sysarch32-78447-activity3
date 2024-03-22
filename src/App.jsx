import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Pokedex from './Pokedex.jsx';

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fetch("https://us-central1-it-sysarch32.cloudfunctions.net/pokemon")
        .then(response => response.json())
        .then(data => setPokemonData(data));
}, []);

  return (
    <>
      <Header/>
      <Pokedex pokemonData={pokemonData} />
    </>
  );
}

export default App;
