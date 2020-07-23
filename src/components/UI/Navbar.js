import React from 'react';
import logo from '../../img/logo.png';
import { FaSearch } from 'react-icons/fa';
const Navbar = () => {
	return (
		<div className="flex bg-blue-400 justify-between items-center rounded flex-wrap">
			<div className="h-20">
				<img src={logo} alt="logo" className="h-full p-2" />
			</div>
			<div>
				<ul className="flex">
					<li className="mx-2">option 1</li>
					<li className="mx-2">option 2</li>
					<li className="mx-2">option 3</li>
					<li className="mx-2">option 4</li>
				</ul>
			</div>
			<div className="flex items-center ">
				<FaSearch />
				<input type="text" placeholder="Search" className="mx-2 rounded" />
			</div>
		</div>
	);
};

export default Navbar;
