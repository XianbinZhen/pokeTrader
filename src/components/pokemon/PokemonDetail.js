import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PokemonType from '../pokemon/PokemonType';

const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon/';
const IMG_URL = 'https://pokeres.bastionbot.org/images/pokemon/';

const PokemonDetail = ({ match }) => {
	const { id } = match.params;
	const [ data, setData ] = useState({});

	useEffect(
		() => {
			axios
				.get(`${POKEMON_URL}${id}`)
				.then((res) => {
					setData(res.data);
				})
				.catch((error) => console.log(error));
			return () => {
				//
			};
		},
		[ id ]
	);

	return (
		<div className="container text-center">
			<div className="p-2 flex justify-around items-center mt-3 border">
				<img
					className="block w-64 h-64 object-contain p-2 border-white rounded-md shadow-md"
					src={id > 807 ? data.sprites.front_default : `${IMG_URL}${id}.png`}
					alt="pokemon-sprites"
				/>
				<div className="p-2 font-bold text-lg">
					<div className="text-lg">
						<p>
							#{id} <br />
							{data.name}
						</p>
					</div>
					<table>
						<tbody>
							<tr>
								<td>Types</td>
								<td>
									{data &&
										data.types &&
										data.types.map((type) => (
											<PokemonType typeName={type.type.name} key={type.type.name}>
												{type.type.name}
											</PokemonType>
										))}
								</td>
							</tr>
							<tr>
								<td>Height</td>
								<td>{data.height}</td>
							</tr>
							<tr>
								<td>Weight</td>
								<td>{data.weight}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div className="grid-cols-6">other sprites</div>
			<button className="btn-blue btn m-2">
				<Link to="/">Back</Link>
			</button>
		</div>
	);
};

export default PokemonDetail;
