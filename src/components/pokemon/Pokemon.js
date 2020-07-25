import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import loadingImg from '../../img/loading.gif';

const Pokemon = ({ name, entry_number }) => {
	const [ url, setUrl ] = useState('');
	const [ loading, setLoading ] = useState(true);
	const [ weight, setWeight ] = useState('');

	useEffect(
		() => {
			axios.get(`https://pokeapi.co/api/v2/pokemon/${entry_number}`).then((res) => {
				const imgUrl = res.data.sprites.front_default;
				const weight = res.data.weight;
				setUrl(imgUrl);
				setWeight(weight);
				setLoading(false);
			});
			return () => {
				//
			};
		},
		[ entry_number ]
	);
	return (
		<div className="p-2  ">
			<img
				src={loading ? loadingImg : url}
				alt="pokemon"
				className="cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105 p-2 w-32 h-32 object-contain shadow-lg rounded-t-md border"
			/>
			<div className="bg-blue-500 text-white p-2 rounded-b-md">
				<a className="font-bold" href="google.com">
					{name}
				</a>
				<h5>$ {weight}</h5>
			</div>
		</div>
	);
};
export default Pokemon;
