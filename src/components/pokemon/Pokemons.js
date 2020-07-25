import React, { useEffect } from 'react';
import Pokemon from './Pokemon';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemon } from '../../redux';

const Pokemons = () => {
	const { pokemon } = useSelector((state) => state.pokemon);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPokemon());
		return () => {
			//
		};
	}, []);

	return (
		<div className="flex flex-wrap items-center justify-center">
			{pokemon &&
				pokemon.map((pokemon) => (
					<Pokemon name={pokemon.pokemon_species.name} entry_number={pokemon.entry_number} />
				))}
		</div>
	);
};

export default Pokemons;
