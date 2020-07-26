import {
	FETCH_POKEMON_REQUEST,
	FETCH_POKEMON_SUCCESS,
	FETCH_POKEMON_FAILURE,
	FETCH_POKEMON_SUCCESS_TO_SHOW
} from './pokemonType';
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

export const fetchPokemonToShow = (pokemonToShow) => {
	return {
		type: FETCH_POKEMON_SUCCESS_TO_SHOW,
		payload: pokemonToShow
	};
};

export const fetchPokemon = (page) => {
	return (dispatch) => {
		dispatch(fetchPokemonRequest);
		axios
			.get(NATIONAL_DEX_URL)
			.then((res) => {
				const pokemon = res.data.pokemon_entries;
				const pokemonToShow = pokemon.slice(page, page + PAGE_SIZE);
				dispatch(fetchPokemonSuccess(pokemon));
				dispatch(fetchPokemonToShow(pokemonToShow));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchPokemonFailure(errorMsg));
			});
	};
};

export const searchPokemon = (searchInput) => {
	return (dispatch) => {
		dispatch(fetchPokemonRequest);
		axios
			.get(NATIONAL_DEX_URL)
			.then((res) => {
				const pokemon = res.data.pokemon_entries;
				const pokemonToShow = pokemon.filter((data) => data.pokemon_species.name.includes(searchInput));
				dispatch(fetchPokemonSuccess(pokemon));
				dispatch(fetchPokemonToShow(pokemonToShow));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchPokemonFailure(errorMsg));
			});
	};
};
