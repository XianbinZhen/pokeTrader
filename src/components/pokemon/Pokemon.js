import React from 'react';
import pokemon from '../../img/logo.png';
const Pokemon = () => {
	return (
		<div className="p-2  ">
			<img
				src={pokemon}
				alt="pokemon"
				className="cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105 p-2 w-48 h-48 object-contain shadow-lg rounded-t-md border"
			/>
			<div className="bg-blue-500 text-white p-2 rounded-b-md">
				<a className="font-bold" href="#">
					Name
				</a>
				<h5 className="text-gray-400">detail</h5>
				<h5>$90</h5>
			</div>
		</div>
	);
};
export default Pokemon;
