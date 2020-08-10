import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FaSearch } from 'react-icons/fa'
import { searchPokemon } from '../../redux'

const Search = () => {
	const [ searchInput, setSearchInput ] = useState('')
	const dispatch = useDispatch()

	const handleSearch = () => {
		if (searchInput) dispatch(searchPokemon(searchInput))
		else window.location.reload(false)
	}
	const handleKeyDown = (e) => {
		if (e.keyCode === 13) {
			if (searchInput) dispatch(searchPokemon(searchInput))
			else window.location.reload(false)
		}
	}

	return (
		<div className="flex justify-around py-2">
			<div className="flex items-center ">
				<FaSearch />
				<input
					onKeyDown={handleKeyDown}
					onChange={(e) => setSearchInput(e.target.value)}
					type="text"
					placeholder="Search"
					className="px-2 m-2 rounded border-b-2 "
				/>
				<button className="btn btn-blue m-2" onClick={handleSearch}>
					Search
				</button>
			</div>
		</div>
	)
}

export default Search
