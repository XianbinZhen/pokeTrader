import { combineReducers } from 'redux';
import pokemonReducer from './pokemon/pokemonReducer';
import paginationReducer from './pagination/paginationReducer';
import searchPokemonReducer from './searchPokemon/searchPokemonReducer';

const rootReducer = combineReducers({
	pokemon: pokemonReducer,
	page: paginationReducer,
	searchPokemonResult: searchPokemonReducer
});

export default rootReducer;
