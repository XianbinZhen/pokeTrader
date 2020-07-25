import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Pokemon = ({ name, entry_number }) => {
	const [ url, setUrl ] = useState('');
	const [ weight, setWeight ] = useState('');

	useEffect(() => {
		axios.get(`https://pokeapi.co/api/v2/pokemon/${entry_number}`).then((res) => {
			const imgUrl = res.data.sprites.front_default;
			const weight = res.data.weight;
			setUrl(imgUrl);
			setWeight(weight);
		});
		return () => {
			//
		};
	}, []);
	return (
		<div className="p-2  ">
			<img
				src={url}
				alt="pokemon"
				className="cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105 p-2 w-48 h-48 object-contain shadow-lg rounded-t-md border"
			/>
			<div className="bg-blue-500 text-white p-2 rounded-b-md">
				<a className="font-bold" href="#">
					{name}
				</a>
				<h5 className="text-gray-400">{entry_number}</h5>
				<h5>$ {weight}</h5>
			</div>
		</div>
	);
};
export default Pokemon;
