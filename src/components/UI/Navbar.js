import React from 'react';
import logo from '../../img/logo.png';
import { FaSearch, FaBars } from 'react-icons/fa';

const Navbar = () => {
	const toggleMenu = () => {
		const menu = document.querySelector('#menu');
		if (menu.className.includes('hidden')) menu.className = 'lg:block';
		else menu.className = 'hidden lg:block';
	};
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-around bg-blue-400 rounded">
			<div className="h-16 ml-0 lg:h-20 flex sm:justify-center items-center justify-around">
				<img src={logo} alt="logo" className="h-full p-2" />
				<div className="cursor-pointer sm:hidden hover:text-yellow-500" onClick={toggleMenu}>
					<FaBars className="text-2xl" />
				</div>
			</div>

			<div className="flex justify-around py-2">
				<div className="flex items-center ">
					<FaSearch />
					<input type="text" placeholder="Search" className="px-2 mx-2 rounded " />
				</div>
			</div>
			<div className="hidden sm:block md:block col-span-2 lg:col-span-1 " id="menu">
				<ul className="flex justify-center ">
					<li className="px-2 py-1 cursor-pointer hover:text-yellow-200">option 1</li>
					<li className="px-2 py-1 cursor-pointer hover:text-yellow-200">option 2</li>
					<li className="px-2 py-1 cursor-pointer hover:text-yellow-200 ">option 3</li>
					<li className="px-2 py-1 cursor-pointer hover:text-yellow-200 ">option 4</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
