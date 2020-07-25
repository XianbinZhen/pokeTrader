import React, { useEffect } from 'react';
import Pokemon from './Pokemon';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemon, searchPokemon } from '../../redux';

const Pokemons = () => {
	const { loading, pokemon, error } = useSelector((state) => state.pokemon);
	const { page } = useSelector((state) => state.page);
	const { searchPokemonResult } = useSelector((state) => state.searchPokemonResult);
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(searchPokemon(searchPokemonResult, page));
			return () => {
				//
			};
		},
		[ searchPokemonResult ]
	);

	useEffect(
		() => {
			dispatch(fetchPokemon(page));
			return () => {
				//
			};
		},
		[ page ]
	);

	return loading ? (
		<h1>loading...</h1>
	) : error ? (
		<h1>{error}</h1>
	) : (
		<div>
			<div className="flex flex-wrap items-center justify-center">
				{pokemon &&
					pokemon.map((pokemon) => (
						<Pokemon
							key={pokemon.entry_number}
							name={pokemon.pokemon_species.name}
							entry_number={pokemon.entry_number}
						/>
					))}
			</div>
		</div>
	);
};

export default Pokemons;
