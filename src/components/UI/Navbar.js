import React from 'react';
import logo from '../../img/logo.png';

const Navbar = () => {
	return (
		<div>
			<div className="flex justify-around items-center bg-blue-400 rounded">
				<div className="h-16 lg:h-20 flex items-center justify-around">
					<img src={logo} alt="logo" className="h-full p-3" />
				</div>
				<ul className="flex justify-center ">
					<li className="nav-li">option 1</li>
					<li className="nav-li">option 2</li>
					<li className="nav-li ">option 3</li>
					<li className="nav-li ">option 4</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
