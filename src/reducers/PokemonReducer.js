import {
  SHOW_POKEMON,
  SHOW_POKEMON_DETAIL,
  ADD_TEAM,
  ADD_TRAINER,
} from '../actions/PokemonActionTypes';

const INITIAL_STATE = {
  allPokemon: [],
  selectedPokemon: undefined,
  allTrainers: [{name: 'test1'}],
  allTeams: [{name: 'testTeam'}],
};

const PokemonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_POKEMON:
      let pokemons = action.payload;
      return {
        ...state,
        allPokemon: pokemons,
      };
    case SHOW_POKEMON_DETAIL:
      let pokemon = action.payload;
      return {
        ...state,
        selectedPokemon: {...pokemon},
      };
    case ADD_TRAINER:
      let trainer = action.payload;
      return {
        ...state,
        allTrainers: [...state.allTrainers, trainer],
      };
    case ADD_TEAM:
      let team = action.payload;
      return {
        ...state,
        allTeams: [...state.allTeams, team],
      };
    default:
      return state;
  }
};

export default PokemonReducer;
