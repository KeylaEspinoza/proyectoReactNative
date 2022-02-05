import {
  SHOW_POKEMON,
  SHOW_POKEMON_DETAIL,
  ADD_TEAM,
  ADD_TRAINER,
} from './PokemonActionTypes';

export const showPokemon = pokemonName => ({
  type: SHOW_POKEMON,
  payload: pokemonName,
});

export const showPokemonDetail = pokemon => ({
  type: SHOW_POKEMON_DETAIL,
  payload: pokemon,
});

export const addTrainer = trainer => ({
  type: ADD_TRAINER,
  payload: trainer,
});

export const addTeam = team => ({
  type: ADD_TEAM,
  payload: team,
});
