import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import loadingImg from '../../img/loading.gif';
import PokemonType from './PokemonType';
const Pokemon = ({ name, entry_number }) => {
	const [ url, setUrl ] = useState('');
	const [ loading, setLoading ] = useState(true);
	const [ weight, setWeight ] = useState('');
	const [ type, setType ] = useState([]);

	useEffect(
		() => {
			axios.get(`https://pokeapi.co/api/v2/pokemon/${entry_number}`).then((res) => {
				const imgUrl = res.data.sprites.front_default;
				const weight = res.data.weight;
				const type = res.data.types;
				setUrl(imgUrl);
				setWeight(weight);
				setType(type);
				setLoading(false);
			});
			return () => {
				//
			};
		},
		[ entry_number ]
	);
	return (
		<div className="p-2 relative">
			<Link to="/detail">
				<img
					src={loading ? loadingImg : url}
					alt="pokemon"
					className="cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105 p-2 w-32 h-32 object-contain shadow-lg rounded-t-md border"
				/>
			</Link>
			<div className="flex justify-center items-center p-1 absolute top-0 inset-x-0 ">
				{type && type.map((type, index) => <PokemonType key={index} typeName={type.type.name} />)}
			</div>
			<div className="bg-blue-500 text-white p-2 rounded-b-md">
				<a className="font-bold" href="google.com">
					<span className="capitalize">{name}</span>
				</a>
				<h5>$ {weight}</h5>
			</div>
		</div>
	);
};
export default Pokemon;
