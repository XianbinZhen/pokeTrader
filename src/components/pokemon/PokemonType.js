import React from 'react';

const PokemonType = ({ typeName }) => {
	return (
		<span className={`inline-block mr-2 px-1 bg-pokemonType-${typeName} text-white rounded-md shadow-md text-xs`}>
			{typeName}
		</span>
	);
};

export default PokemonType;
