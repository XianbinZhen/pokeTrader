import { combineReducers } from 'redux';
import pokemonReducer from './pokemon/pokemonReducer';
import paginationReducer from './pagination/paginationReducer';

const rootReducer = combineReducers({
	pokemon: pokemonReducer,
	page: paginationReducer
});

export default rootReducer;
