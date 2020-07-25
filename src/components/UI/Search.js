import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { searchPokemon } from '../../redux';

const Search = () => {
	const [ searchInput, setSearchInput ] = useState('');
	const dispatch = useDispatch();

	const handleSearch = (e) => {
		setSearchInput(e.target.value);
		if (e.target.value) dispatch(searchPokemon(e.target.value));
	};

	return (
		<div className="flex justify-around py-2">
			<div className="flex items-center ">
				<FaSearch />
				<input
					onChange={handleSearch}
					type="text"
					placeholder="Search"
					className="px-2 m-2 rounded border-b-2 "
				/>
			</div>
		</div>
	);
};

export default Search;
