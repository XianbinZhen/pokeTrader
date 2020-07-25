import { SEARCH_POKEMON } from './searchPokemonType';

const initialState = {
	searchPokemon: ''
};

const searchPokemonReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_POKEMON:
			return {
				...state,
				searchPokemon: action.payload
			};
		default:
			return state;
	}
};

export default searchPokemonReducer;
