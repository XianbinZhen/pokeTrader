import { FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAILURE } from './pokemonType';
import axios from 'axios';

const NATIONAL_DEX_URL = 'https://pokeapi.co/api/v2/pokedex/1';
const PAGE_SIZE = 20;

export const fetchPokemonRequest = () => {
	return {
		type: FETCH_POKEMON_REQUEST
	};
};

export const fetchPokemonSuccess = (pokemon) => {
	return {
		type: FETCH_POKEMON_SUCCESS,
		payload: pokemon
	};
};

export const fetchPokemonFailure = (error) => {
	return {
		type: FETCH_POKEMON_FAILURE,
		payload: error
	};
};

export const fetchPokemon = (page) => {
	return (dispatch) => {
		dispatch(fetchPokemonRequest);
		axios
			.get(NATIONAL_DEX_URL)
			.then((res) => {
				const pokemon = res.data.pokemon_entries.slice(page, page + PAGE_SIZE);
				dispatch(fetchPokemonSuccess(pokemon));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchPokemonFailure(errorMsg));
			});
	};
};
