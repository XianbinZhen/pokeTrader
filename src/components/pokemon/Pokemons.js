import React, { useEffect } from 'react'
import Pokemon from './Pokemon'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPokemon } from '../../redux'

const Pokemons = () => {
	const { loading, error, pokemonToShow } = useSelector((state) => state.pokemon)
	const { page } = useSelector((state) => state.page)
	// const { searchPokemonResult } = useSelector((state) => state.searchPokemonResult);
	const dispatch = useDispatch()
	useEffect(
		() => {
			dispatch(fetchPokemon(page))
			return () => {
				//
			}
		},
		[ page, dispatch ]
	)

	// useEffect(
	// 	() => {
	// 		console.log('pokemon', pokemon);
	// 		// pokemon && dispatch(searchPokemon(pokemon, searchPokemonResult, page));
	// 		return () => {
	// 			//
	// 		};
	// 	},
	// 	[ searchPokemonResult, pokemon, page ]
	// );

	return loading ? (
		<h1>loading...</h1>
	) : error ? (
		<h1>{error}</h1>
	) : (
		<div>
			<div className="flex flex-wrap items-center justify-center">
				{pokemonToShow &&
					pokemonToShow.map((pokemon) => (
						<Pokemon
							key={pokemon.entry_number}
							name={pokemon.pokemon_species.name}
							entry_number={pokemon.entry_number}
						/>
					))}
			</div>
		</div>
	)
}

export default Pokemons
