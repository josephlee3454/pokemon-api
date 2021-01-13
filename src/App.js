import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Pokemon from './componenets/Pokemon';



function App() {

  const [pokemon, setPokemon]= useState([{
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/"
  }])

  useEffect(() => {
    // getPokemon();
    getPokemonAxios();
  }, [])
  const getPokemon = () =>{
    fetch("https://pokeapi.co/api/v2/pokemon/1")
    .then(response => {
      return response.json();
  }).then(response => {
      console.log(response.results);
  }).catch(err=>{
      console.log(err);
  });
  }
  const getPokemonAxios = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
      .then(res => {
        console.log(res.data.results)
        setPokemon(res.data.results);
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  return (
    <div className="App">
      {
        pokemon.map((pkm,idx)=>
          <Pokemon pkm={pkm} key={idx} />
        )
      }
      <button></button>
    </div>
  );
}

export default App;
