import { SEARCH_POKEMON } from './searchPokemonType';

export const searchPokemon = (input) => {
	return {
		type: SEARCH_POKEMON,
		payload: input
	};
};
