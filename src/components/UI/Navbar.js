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
		<div className="relative flex flex-wrap items-center justify-around bg-blue-400 rounded">
			<div className="h-16 ml-0 lg:h-20">
				<img src={logo} alt="logo" className="h-full p-2" />
			</div>

			<div className="flex justify-around py-2">
				<div className="flex items-center ">
					<FaSearch />
					<input type="text" placeholder="Search" className="px-2 mx-2 rounded " />
				</div>
			</div>
			<div className="relative hidden lg:block" id="menu">
				<ul className="absolute top-0 left-0 w-1/2 h-screen bg-white lg:flex lg:h-auto lg:relative lg:w-full lg:bg-opacity-0">
					<li className="px-2 py-1 cursor-pointer hover:text-yellow-200">option 1</li>
					<li className="px-2 py-1 cursor-pointer hover:text-yellow-200">option 2</li>
					<li className="px-2 py-1 cursor-pointer hover:text-yellow-200 ">option 3</li>
					<li className="px-2 py-1 cursor-pointer hover:text-yellow-200 ">option 4</li>
				</ul>
			</div>
			<div className="cursor-pointer lg:hidden hover:text-yellow-500" onClick={toggleMenu}>
				<FaBars className="text-2xl" />
			</div>
		</div>
	);
};

export default Navbar;
