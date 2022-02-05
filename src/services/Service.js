import {showPokemon, showPokemonDetail} from '../actions/PokemonActions';
import axios from 'axios';

export const loadPokemonAPI = () => dispatch => {
  axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => {
      dispatch(showPokemon(response.data.results));
    })
    .catch(error => console.log(error));
};

export const loadPokemonDetailAPI = id => dispatch => {
  axios
    .get('https://pokeapi.co/api/v2/pokemon/' + id)
    .then(response => {
      dispatch(showPokemonDetail(response.data));
    })
    .catch(error => console.log(error));
};
