import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
	return (
		<div className="flex justify-around py-2">
			<div className="flex items-center ">
				<FaSearch />
				<input type="text" placeholder="Search" className="px-2 mx-2 rounded " />
			</div>
		</div>
	);
};

export default Search;
